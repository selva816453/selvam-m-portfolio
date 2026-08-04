const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const QUERY = `
query userData($username: String!) {
  allQuestionsCount { difficulty count }
  matchedUser(username: $username) {
    username
    profile { ranking }
    submitStatsGlobal { acSubmissionNum { difficulty count } }
  }
}`;

const CACHE_MS = 5 * 60 * 1000;
const cache = new Map<string, { at: number; data: unknown }>();

const TOTALS = { All: 4013, Easy: 958, Medium: 2095, Hard: 960 };

async function fromGraphQL(username: string) {
  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: `https://leetcode.com/u/${username}/`,
      Origin: "https://leetcode.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    },
    body: JSON.stringify({ query: QUERY, variables: { username } }),
    signal: AbortSignal.timeout(6000),
  });
  const text = await res.text();
  if (!text.trim().startsWith("{")) throw new Error("blocked");
  const json = JSON.parse(text);
  const m = json?.data?.matchedUser;
  if (!m) throw new Error("user not found");

  const ac: Record<string, number> = {};
  for (const s of m.submitStatsGlobal.acSubmissionNum) ac[s.difficulty] = s.count;
  const all: Record<string, number> = { ...TOTALS };
  for (const s of json.data.allQuestionsCount ?? []) all[s.difficulty] = s.count;

  return {
    totalSolved: ac.All ?? 0,
    easySolved: ac.Easy ?? 0,
    mediumSolved: ac.Medium ?? 0,
    hardSolved: ac.Hard ?? 0,
    totalQuestions: all.All,
    totalEasy: all.Easy,
    totalMedium: all.Medium,
    totalHard: all.Hard,
    ranking: m.profile?.ranking ?? null,
    source: "leetcode",
  };
}

async function fromAlfa(username: string) {
  const [solvedRes, profileRes] = await Promise.all([
    fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, { signal: AbortSignal.timeout(9000) }),
    fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`).catch(() => null),
  ]);
  const solved = await solvedRes.json();
  let ranking: number | null = null;
  try {
    const p = profileRes ? await profileRes.json() : null;
    ranking = p?.ranking ?? null;
  } catch (_) { /* ignore */ }

  return {
    totalSolved: solved.solvedProblem ?? 0,
    easySolved: solved.easySolved ?? 0,
    mediumSolved: solved.mediumSolved ?? 0,
    hardSolved: solved.hardSolved ?? 0,
    totalQuestions: TOTALS.All,
    totalEasy: TOTALS.Easy,
    totalMedium: TOTALS.Medium,
    totalHard: TOTALS.Hard,
    ranking,
    source: "alfa",
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const url = new URL(req.url);
  let username = url.searchParams.get("username") ?? "";
  if (!username && req.method === "POST") {
    try {
      const body = await req.json();
      username = body?.username ?? "";
    } catch (_) { /* ignore */ }
  }
  if (!username) username = "Selvam-27";

  const cached = cache.get(username);
  if (cached && Date.now() - cached.at < CACHE_MS) {
    return new Response(JSON.stringify(cached.data), {
      headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
    });
  }

  const attempts: string[] = [];
  for (const fn of [fromGraphQL, fromAlfa]) {
    try {
      const data = await fn(username);
      cache.set(username, { at: Date.now(), data });
      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "public, max-age=300" },
      });
    } catch (e) {
      attempts.push(String(e));
    }
  }

  console.error("leetcode-stats failed", attempts);
  if (cached) {
    return new Response(JSON.stringify(cached.data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ error: "Unable to fetch LeetCode stats", attempts }), {
    status: 502,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
