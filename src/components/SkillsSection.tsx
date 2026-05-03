import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Category = {
  title: string;
  items: string[];
};

const categories: Category[] = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript"],
  },
  {
    title: "Technologies",
    items: ["MySQL", "Git", "HTML", "CSS"],
  },
  {
    title: "IT Constructs",
    items: ["DBMS", "DSA", "OOP", "OS", "Problem Solving"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[400px] h-[400px] bg-primary/10 top-1/3 -left-32" />

      <div className="container-custom relative z-10 px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Skills
          </h2>
          <p className="text-muted-foreground">My technical level</p>
        </motion.div>

        {/* Accordion grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="self-start"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-4 group"
                >
                  <span className="text-xl md:text-2xl font-bold text-foreground">
                    {cat.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-secondary"
                  >
                    <ChevronDown className="w-6 h-6" strokeWidth={2.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 pt-2 pb-2 space-y-4">
                        {cat.items.map((item, idx) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="text-base md:text-lg font-semibold text-foreground/90 list-none"
                          >
                            {item}
                          </motion.li>
                        ))}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
