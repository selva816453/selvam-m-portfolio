import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Flame, Star } from "lucide-react";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "@johndoe",
    stats: { solved: 500, ranking: "Top 5%" },
    icon: "🏆",
    color: "from-amber-500 to-orange-500",
  },
  {
    platform: "GitHub",
    username: "@johndoe",
    stats: { repos: 120, contributions: "2.5K" },
    icon: "🐙",
    color: "from-gray-600 to-gray-800",
  },
  {
    platform: "Codeforces",
    username: "@johndoe",
    stats: { rating: 1850, rank: "Expert" },
    icon: "⚔️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    platform: "HackerRank",
    username: "@johndoe",
    stats: { badges: 25, stars: "5★" },
    icon: "💎",
    color: "from-green-500 to-emerald-500",
  },
];

const achievements = [
  { icon: Trophy, label: "500+ Problems Solved", value: "Competitive Coding" },
  { icon: Target, label: "100% Streak", value: "GitHub Activity" },
  { icon: Flame, label: "365 Days", value: "Daily Coding" },
  { icon: Star, label: "50+ Stars", value: "Open Source" },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
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
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass rounded-2xl p-6 cursor-pointer hover:glow-gradient transition-all duration-300"
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
            </motion.div>
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
