import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

type LeetData = {
  totalSolved: number | null;
  easySolved: number | null;
  mediumSolved: number | null;
  hardSolved: number | null;
  totalEasy: number | null;
  totalMedium: number | null;
  totalHard: number | null;
  totalQuestions: number | null;
  ranking: number | null;
};

const initial: LeetData = {
  totalSolved: null,
  easySolved: null,
  mediumSolved: null,
  hardSolved: null,
  totalEasy: null,
  totalMedium: null,
  totalHard: null,
  totalQuestions: null,
  ranking: null,
};

const LeetCodeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [data, setData] = useState<LeetData>(initial);

  useEffect(() => {
    fetch("https://leetcode-api-faisalshohag.vercel.app/selvaaaaa")
      .then((r) => r.json())
      .then((d) =>
        setData({
          totalSolved: d.totalSolved ?? null,
          easySolved: d.easySolved ?? null,
          mediumSolved: d.mediumSolved ?? null,
          hardSolved: d.hardSolved ?? null,
          totalEasy: d.totalEasy ?? null,
          totalMedium: d.totalMedium ?? null,
          totalHard: d.totalHard ?? null,
          totalQuestions: d.totalQuestions ?? null,
          ranking: d.ranking ?? null,
        })
      )
      .catch(() => {});
  }, []);

  // Circular progress
  const total = data.totalSolved ?? 0;
  const totalQ = data.totalQuestions ?? 1;
  const pct = Math.min(total / totalQ, 1);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - pct);

  const rows = [
    {
      label: "Easy",
      solved: data.easySolved,
      total: data.totalEasy,
      color: "bg-green-500",
      text: "text-green-500",
    },
    {
      label: "Medium",
      solved: data.mediumSolved,
      total: data.totalMedium,
      color: "bg-amber-500",
      text: "text-amber-500",
    },
    {
      label: "Hard",
      solved: data.hardSolved,
      total: data.totalHard,
      color: "bg-red-500",
      text: "text-red-500",
    },
  ];

  return (
    <section id="leetcode" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 top-1/4 -right-32" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-3 text-foreground">
            LeetCode Stats
          </h2>
          <p className="text-muted-foreground">Problem-solving journey</p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
        >
          {/* Top row: name + rank */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {/* LeetCode logo */}
              <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" aria-hidden="true">
                <path
                  fill="#FFA116"
                  d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z"
                />
                <path
                  fill="#B3B3B3"
                  d="M20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"
                />
                <path
                  fill="#000"
                  d="M10.171 7.84c.252.243.598.346.94.318l5.349-.31c.633-.036 1.121-.586 1.085-1.221-.037-.635-.581-1.122-1.215-1.087l-3.667.214 2.527-2.524c.467-.467.467-1.219 0-1.685a1.193 1.193 0 0 0-1.685 0l-4.405 4.401c-.467.467-.467 1.225 0 1.692l1.071 1.07v.132z"
                />
              </svg>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 truncate">
                selvaaaaa
              </span>
            </div>
            <span className="text-gray-500 font-medium text-sm sm:text-base flex-shrink-0">
              {data.ranking !== null ? `#${data.ranking.toLocaleString()}` : "#—"}
            </span>
          </div>

          {/* Circle + bars */}
          <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 md:gap-10 items-center">
            {/* Circular progress */}
            <div className="relative w-[88px] h-[88px] sm:w-[140px] sm:h-[140px] flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="#FFA116"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={isInView ? { strokeDashoffset: dashOffset } : {}}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {data.totalSolved ?? "—"}
                </span>
              </div>
            </div>

            {/* Difficulty rows */}
            <div className="space-y-3 sm:space-y-5">
              {rows.map((row, i) => {
                const pctRow =
                  row.solved !== null && row.total
                    ? Math.min(row.solved / row.total, 1)
                    : 0;
                return (
                  <div key={row.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-sm sm:text-base font-semibold ${row.text}`}>{row.label}</span>
                      <span className="text-gray-500 text-xs sm:text-sm font-medium">
                        {row.solved ?? "—"} / {row.total ?? "—"}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${row.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${pctRow * 100}%` } : {}}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 + i * 0.15 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer text + link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 md:mt-10 max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
            I've solved over {data.totalSolved ?? "400"}+ problems on LeetCode and consistently practice DSA to strengthen my skills.
          </p>
          <a
            href="https://leetcode.com/u/selvaaaaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-base sm:text-lg"
          >
            Visit my LeetCode Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
