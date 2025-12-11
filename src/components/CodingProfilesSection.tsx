import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Flame, Star } from "lucide-react";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "@selvaaaaa",
    stats: { solved: 258, rank: "509,796" },
    icon: "🏆",
    color: "from-amber-500 to-orange-500",
    url: "https://leetcode.com/u/selvaaaaa/",
  },
  {
    platform: "GitHub",
    username: "@selva816453",
    stats: { repos: 5, role: "Web Developer" },
    icon: "🐙",
    color: "from-gray-600 to-gray-800",
    url: "https://github.com/selva816453",
  },
  {
    platform: "GeeksforGeeks",
    username: "@selva8zxma",
    stats: { solved: 95, score: 208 },
    icon: "💚",
    color: "from-green-500 to-emerald-500",
    url: "https://www.geeksforgeeks.org/user/selva8zxma/",
  },
  {
    platform: "HackerRank",
    username: "@selva816453",
    stats: { certification: "Java", level: "Basic" },
    icon: "💎",
    color: "from-emerald-500 to-teal-500",
    url: "https://www.hackerrank.com/profile/selva816453",
  },
];

const achievements = [
  { icon: Trophy, label: "350+ Problems", value: "LeetCode + GFG" },
  { icon: Target, label: "Java Expert", value: "246 LC Problems" },
  { icon: Flame, label: "50 Days Badge", value: "LeetCode 2025" },
  { icon: Star, label: "Certified", value: "Java Basic" },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="blur-orb w-[350px] h-[350px] bg-secondary/15 top-1/4 -right-32" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My presence across competitive programming and development platforms
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-2xl p-6 cursor-pointer hover:glow-gradient transition-all duration-300 block"
            >
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {profile.platform}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {profile.username}
              </p>
              <div className="space-y-2">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="font-mono text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="glass rounded-xl p-4 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <achievement.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="font-bold text-foreground text-sm">{achievement.label}</p>
              <p className="text-xs text-muted-foreground">{achievement.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
