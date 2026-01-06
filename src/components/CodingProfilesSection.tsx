import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Trophy, Target, Flame, Star, ExternalLink, Code2, Sparkles } from "lucide-react";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "@selvaaaaa",
    solved: "258+",
    rank: "509,796",
    icon: "🏆",
    bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
    url: "https://leetcode.com/u/selvaaaaa/",
  },
  {
    platform: "GitHub",
    username: "@selva816453",
    solved: "5+",
    rank: "Web Dev",
    icon: "🐙",
    bgColor: "bg-gradient-to-br from-gray-500/20 to-slate-600/20",
    borderColor: "border-gray-500/30",
    accentColor: "text-gray-300",
    url: "https://github.com/selva816453",
  },
  {
    platform: "GeeksforGeeks",
    username: "@selva8zxma",
    solved: "95+",
    rank: "Score: 208",
    icon: "💚",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
    accentColor: "text-green-400",
    url: "https://www.geeksforgeeks.org/user/selva8zxma/",
  },
  {
    platform: "HackerRank",
    username: "@selva816453",
    solved: "Java",
    rank: "Certified",
    icon: "💎",
    bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    url: "https://www.hackerrank.com/profile/selva816453",
  },
];

const stats = [
  { icon: Trophy, value: "350+", label: "Problems Solved", color: "text-amber-400" },
  { icon: Target, value: "246", label: "LeetCode Java", color: "text-blue-400" },
  { icon: Flame, value: "50", label: "Days Badge", color: "text-orange-400" },
  { icon: Star, value: "4", label: "Platforms", color: "text-purple-400" },
];

const CodingProfilesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coding" className="section-padding relative overflow-hidden">
      {/* Dark Glassmorphism Background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      
      {/* Frosted glass overlay with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.02]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Soft ambient glow orbs */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full top-1/4 -right-48 bg-primary/5 blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full -bottom-32 -left-32 bg-secondary/5 blur-[100px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute w-[300px] h-[300px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/5 blur-[80px]"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Competitive Coding</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My journey across competitive programming platforms
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-5 text-center border border-white/10 hover:border-primary/30 transition-all"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Profiles Grid - New Modern Layout */}
        <div className="grid md:grid-cols-2 gap-5">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative flex items-center gap-5 p-6 rounded-2xl border ${profile.borderColor} ${profile.bgColor} backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at ${hoveredIndex === index ? '50%' : '0%'} 50%, hsl(var(--primary) / 0.15), transparent 70%)`
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center text-4xl border border-white/10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {profile.icon}
              </motion.div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.platform}
                  </h3>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </motion.span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{profile.username}</p>
                
                {/* Stats badges */}
                <div className="flex gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${profile.bgColor} border ${profile.borderColor} ${profile.accentColor}`}>
                    {profile.solved}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-muted-foreground">
                    {profile.rank}
                  </span>
                </div>
              </div>

              {/* Arrow indicator */}
              <motion.div
                className="flex-shrink-0"
                animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
              >
                <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center ${profile.accentColor} group-hover:bg-primary/20 group-hover:border-primary/30 transition-all`}>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Bottom highlight line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">Always learning, always growing</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
