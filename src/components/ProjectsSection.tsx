import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "College Lost and Found Management System",
    description:
      "A web platform that helps students and staff report, track, and recover lost items across the campus. Built with a clean UI, real-time updates, and a simple workflow that makes posting and claiming items effortless.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/selva816453/college-lost-and-found-system",
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    ],
  },
  {
    title: "E-Commerce Grocery Website",
    description:
      "A responsive grocery e-commerce experience featuring a product catalog, dynamic shopping cart, and smooth browsing across devices. Focused on a fast, accessible UI that mirrors a real online grocery store.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/selva816453/Grocery-website-clone",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);

  const project = projects[index];
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] bg-primary/10 -top-40 right-0" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 left-1/4" />

      <div className="container-custom relative z-10 px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-3 text-foreground">Projects</h2>
          <p className="text-muted-foreground text-lg">Most recent work</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute -left-4 md:-left-16 top-1/3 -translate-y-1/2 z-20 p-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute -right-4 md:-right-16 top-1/3 -translate-y-1/2 z-20 p-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ChevronRight className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.5} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Stacked screenshots */}
              <div className="space-y-6">
                {project.images.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="rounded-2xl overflow-hidden bg-white shadow-2xl mx-auto max-w-2xl border border-border/30"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full h-auto block"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-5 pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
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
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-secondary/40 transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub Repository
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
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
