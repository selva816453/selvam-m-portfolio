import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 82, category: "Backend" },
  { name: "Docker", level: 78, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Figma", level: 85, category: "Design" },
];

const SkillBar = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-primary font-mono">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
               style={{ backgroundSize: "200% 100%" }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["Frontend", "Backend", "Tools", "Design"];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="blur-orb w-[500px] h-[500px] bg-primary/15 -bottom-48 -left-48" />
      <div className="blur-orb w-[300px] h-[300px] bg-accent/15 top-1/4 right-0" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.span
              key={category}
              className="px-6 py-2 glass rounded-full text-sm font-medium cursor-pointer hover:bg-primary/20 hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {["⚛️", "📘", "🟢", "🐍", "🐳", "☁️", "🎨", "📊"].map((emoji, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 glass rounded-xl flex items-center justify-center text-3xl cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 2, delay: index * 0.2 },
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
