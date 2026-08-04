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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const username = url.searchParams.get("username") ?? "Selvam-27";

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query: QUERY, variables: { username } }),
    });

    const json = await res.json();
    const m = json?.data?.matchedUser;
    if (!m) throw new Error("User not found");

    const ac: Record<string, number> = {};
    for (const s of m.submitStatsGlobal.acSubmissionNum) ac[s.difficulty] = s.count;
    const all: Record<string, number> = {};
    for (const s of json.data.allQuestionsCount) all[s.difficulty] = s.count;

    return new Response(
      JSON.stringify({
        totalSolved: ac.All ?? 0,
        easySolved: ac.Easy ?? 0,
        mediumSolved: ac.Medium ?? 0,
        hardSolved: ac.Hard ?? 0,
        totalQuestions: all.All ?? 0,
        totalEasy: all.Easy ?? 0,
        totalMedium: all.Medium ?? 0,
        totalHard: all.Hard ?? 0,
        ranking: m.profile?.ranking ?? null,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
