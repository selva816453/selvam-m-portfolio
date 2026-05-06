import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import projectLostFound from "@/assets/project-lost-found.jpg";
import projectGrocery from "@/assets/project-grocery.jpg";
import projectDetection from "@/assets/project-detection.jpg";

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
    image: projectLostFound,
  },
  {
    title: "E-Commerce Grocery Website",
    description:
      "A responsive grocery e-commerce experience featuring a product catalog, dynamic shopping cart, and smooth browsing across devices. Focused on a fast, accessible UI that mirrors a real online grocery store.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/selva816453/Grocery-website-clone",
    image: projectGrocery,
  },
  {
    title: "Unauthorized Person Detection System",
    description:
      "An AI-powered surveillance solution that detects and flags unauthorized individuals in restricted areas using computer vision. Designed for real-time monitoring with accurate face recognition and instant alerts to enhance security.",
    tags: ["Python", "OpenCV", "Deep Learning", "Face Recognition"],
    github: "https://github.com/selva816453/UnauthorizedPerson_Detection_System",
    image: projectDetection,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[index];
  const reversed = index % 2 === 1;

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % projects.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  };
  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] bg-primary/10 -top-40 right-0" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 left-1/4" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 text-foreground">Projects</h2>
          <p className="text-muted-foreground text-base md:text-lg">Most recent work</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute -left-4 sm:-left-2 md:-left-14 top-28 sm:top-1/2 sm:-translate-y-1/2 z-20 p-1.5 sm:p-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute -right-4 sm:-right-2 md:-right-14 top-28 sm:top-1/2 sm:-translate-y-1/2 z-20 p-1.5 sm:p-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={2.5} />
          </button>

          <div className="overflow-hidden px-5 md:px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.title}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl bg-white">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                    className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-xs sm:text-sm font-mono text-secondary tracking-wider">
                    PROJECT 0{index + 1}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
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
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-secondary" : "w-2 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
