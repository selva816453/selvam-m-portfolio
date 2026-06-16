import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Terminal, Cpu } from "lucide-react";

const skillsData = {
  languages: [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
  ],
  technologies: [
    { name: "MySQL", color: "secondary" },
    { name: "Git", color: "accent" },
    { name: "HTML", color: "primary" },
    { name: "CSS", color: "secondary" },
  ],
  constructs: [
    { name: "DBMS", color: "primary" },
    { name: "DSA", color: "secondary" },
    { name: "OOP", color: "accent" },
    { name: "OS", color: "primary" },
    { name: "Problem Solving", color: "secondary" },
  ],
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[400px] h-[400px] bg-primary/10 top-1/3 -left-32" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">
            Technical Arsenal
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight">
            <span className="text-foreground">Skills & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Technologies
            </span>
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Programming Languages - Large (7 cols) */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:col-span-7 group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 hover:bg-card/60 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <Code2 className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Programming Languages</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillsData.languages.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-foreground/5 rounded-2xl p-4 border border-foreground/5 hover:border-primary/30 transition-colors"
                  >
                    <span className="block text-sm text-foreground/80 mb-2 font-medium">{skill.name}</span>
                    <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technologies - Medium (5 cols) */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:col-span-5 group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 hover:bg-card/60 transition-all duration-500"
          >
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/10 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/20">
                  <Terminal className="w-6 h-6 text-secondary" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Technologies</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.technologies.map((tech) => {
                  const colorMap: Record<string, string> = {
                    primary: "bg-primary/10 text-primary border-primary/20",
                    secondary: "bg-secondary/10 text-secondary border-secondary/20",
                    accent: "bg-accent/10 text-accent border-accent/20",
                  };
                  return (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${colorMap[tech.color]} transition-transform duration-300 hover:scale-105`}
                    >
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* IT Constructs - Full Width (12 cols) */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="md:col-span-12 group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 hover:bg-card/60 transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
                  <Cpu className="w-6 h-6 text-accent" strokeWidth={2} />
                </div>
                <h4 className="text-xl font-semibold text-foreground">IT Constructs</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {skillsData.constructs.map((item) => {
                  const dotColorMap: Record<string, string> = {
                    primary: "bg-primary",
                    secondary: "bg-secondary",
                    accent: "bg-accent",
                  };
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 text-foreground/80 text-sm bg-foreground/5 p-4 rounded-xl border border-transparent hover:border-accent/30 transition-all duration-300"
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${dotColorMap[item.color]} shrink-0`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
