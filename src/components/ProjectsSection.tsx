import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "College Lost and Found Management System",
    description:
      "A web platform that helps students and staff report, track, and recover lost items across the campus. Built with a clean UI, real-time updates, and a simple workflow that makes posting and claiming items effortless.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/selva816453/college-lost-and-found-system",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
  },
  {
    title: "E-Commerce Grocery Website",
    description:
      "A responsive grocery e-commerce experience featuring a product catalog, dynamic shopping cart, and smooth browsing across devices. Focused on a fast, accessible UI that mirrors a real online grocery store.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/selva816453/Grocery-website-clone",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
  },
  {
    title: "Unauthorized Person Detection System",
    description:
      "An AI-powered surveillance solution that detects and flags unauthorized individuals in restricted areas using computer vision. Designed for real-time monitoring with accurate face recognition and instant alerts to enhance security.",
    tags: ["Python", "OpenCV", "Deep Learning", "Face Recognition"],
    github: "https://github.com/selva816453/UnauthorizedPerson_Detection_System",
    image:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=1200&q=80",
  },
];

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative group"
      >
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
        <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl bg-white">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="space-y-5"
      >
        <p className="text-sm font-mono text-secondary tracking-wider">
          PROJECT 0{index + 1}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 bg-primary/10 rounded-full text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-secondary/40 transition-all"
        >
          <Github className="w-5 h-5" />
          GitHub
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] bg-primary/10 -top-40 right-0" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 left-1/4" />

      <div className="container-custom relative z-10 px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-3 text-foreground">Projects</h2>
          <p className="text-muted-foreground text-lg">Most recent work</p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

