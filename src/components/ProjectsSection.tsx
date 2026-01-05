import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "College Lost and Found Management System",
    description: "A comprehensive web application for managing lost and found items in college campus, helping students and staff report and recover their belongings.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/selva816453/college-lost-and-found-system",
    live: "https://found-it-buddy.lovable.app",
    featured: true,
    color: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    title: "E-Commerce Grocery Website",
    description: "A comprehensive grocery e-commerce platform with product catalog, shopping cart, and responsive design for seamless online shopping experience.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/selva816453/Grocery-website-clone",
    live: "#",
    featured: true,
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const ProjectCard = ({ project, index, isInView }: { 
  project: typeof projects[0]; 
  index: number; 
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative glass rounded-3xl overflow-hidden border border-white/10 ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ perspective: "1000px" }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        animate={{
          background: isHovered 
            ? `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`
            : undefined
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "100%",
              opacity: 0 
            }}
            animate={isHovered ? {
              y: "-20%",
              opacity: [0, 1, 0],
            } : {}}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative p-8 space-y-5 z-10">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Folder className="w-12 h-12 text-primary" />
          </motion.div>
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-primary"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </div>
        </div>

        <motion.h3 
          className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
          animate={isHovered ? { x: 5 } : { x: 0 }}
        >
          {project.title}
          <motion.span
            className="inline-block ml-2"
            animate={isHovered ? { x: 5, opacity: 1 } : { x: -10, opacity: 0 }}
          >
            <ArrowUpRight className="w-5 h-5 inline" />
          </motion.span>
        </motion.h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        <motion.div 
          className="flex flex-wrap gap-2 pt-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.05, delayChildren: index * 0.15 + 0.3 } },
            hidden: {}
          }}
        >
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-xs font-mono px-3 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary border border-primary/20 hover:border-primary/50 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isHovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating orbs */}
      <motion.div 
        className="blur-orb w-[500px] h-[500px] bg-primary/10 -top-40 right-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="blur-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 left-1/4"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="blur-orb w-[300px] h-[300px] bg-violet-500/10 top-1/2 -left-20"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Some of my recent work that showcases my skills and passion for building exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button 
            variant="hero-outline" 
            size="lg"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
