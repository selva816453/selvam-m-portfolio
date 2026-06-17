import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  repo: string;
  year: string;
  role: string;
};

const projects: Project[] = [
  {
    title: "College Lost and Found System",
    description:
      "A web platform that helps students and staff report, track, and recover lost items across the campus with real-time updates and an effortless claim workflow.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/selva816453/college-lost-and-found-system",
    repo: "selva816453/college-lost-and-found-system",
    year: "2025",
    role: "Full-stack",
  },
  {
    title: "E-Commerce Grocery Website",
    description:
      "A responsive grocery e-commerce experience featuring a product catalog, dynamic shopping cart, and smooth browsing across devices.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    github: "https://github.com/selva816453/Grocery-website-clone",
    repo: "selva816453/Grocery-website-clone",
    year: "2024",
    role: "Frontend",
  },
  {
    title: "Unauthorized Person Detection",
    description:
      "An AI-powered surveillance solution that detects and flags unauthorized individuals in restricted areas using computer vision and face recognition.",
    tags: ["Python", "OpenCV", "Deep Learning", "Face Recognition"],
    github: "https://github.com/selva816453/UnauthorizedPerson_Detection_System",
    repo: "selva816453/UnauthorizedPerson_Detection_System",
    year: "2024",
    role: "ML / Vision",
  },
];

const livePreview = (repo: string) =>
  `https://opengraph.githubassets.com/${Date.now()}/${repo}`;

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] bg-primary/10 -top-40 right-0" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 left-1/4" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center"
        >
          <p className="text-xs sm:text-sm font-mono text-secondary tracking-[0.4em] mb-4">
            ── SELECTED WORK ──
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight">
            Pro<span className="gradient-text italic">jects</span>
          </h2>
        </motion.div>

        {/* Zigzag magazine layout */}
        <div className="space-y-20 md:space-y-32 max-w-6xl mx-auto">
          {projects.map((p, i) => {
            const isReverse = i % 2 === 1;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Giant background numeral */}
                <div
                  className={`absolute -top-10 md:-top-16 ${
                    isReverse ? "right-0 md:right-4" : "left-0 md:left-4"
                  } text-[120px] sm:text-[160px] md:text-[220px] font-black leading-none text-foreground/[0.04] select-none pointer-events-none`}
                  aria-hidden
                >
                  0{i + 1}
                </div>

                <div
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-10 items-center ${
                    isReverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Preview card with tilt */}
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    initial={{ rotate: isReverse ? 3 : -3 }}
                    animate={{ rotate: isReverse ? 3 : -3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="block relative rounded-2xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-xl shadow-2xl hover:shadow-[0_25px_60px_-15px_hsl(var(--secondary)/0.45)] transition-shadow"
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/40 bg-background/60">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-green-400/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                    <div className="relative aspect-[120/63] bg-background/60 overflow-hidden">
                      <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-60" />
                      <img
                        src={livePreview(p.repo)}
                        alt={`${p.title} — live GitHub preview`}
                        loading="lazy"
                        className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.a>

                  {/* Content */}
                  <div className={isReverse ? "md:pr-4" : "md:pl-4"}>
                    <div className="flex items-center gap-3 mb-4 text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">
                      <span className="text-secondary">0{i + 1}</span>
                      <span className="h-px w-8 bg-border" />
                      <span>{p.year}</span>
                      <span className="h-px w-8 bg-border" />
                      <span>{p.role}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                      {p.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
