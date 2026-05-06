import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/selvam-profile.jpeg";

const stats = [
  { value: "8.1+", label: "Aggregate\nCGPA" },
  { value: "03+", label: "Projects" },
  { value: "400+", label: "Problems Solved in\nLeetCode" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 -top-32 -right-32" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground">Software Developer</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-9 lg:gap-16 items-center">
          {/* Circular portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[400px] aspect-square mx-auto lg:mx-0 lg:justify-self-end"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-2xl bg-background flex items-center justify-center">
              <img
                src={profilePhoto}
                alt="Selvam M"
                className="w-full h-full object-cover object-top brightness-110 contrast-105 saturate-110"
              />
            </div>
          </motion.div>

          {/* Right column: bio + stats + button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-7 max-w-xl mx-auto lg:mx-0"
          >
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Java Developer with strong expertise in Spring Boot and modern frontend technologies. I have a solid foundation in clean architecture and writing maintainable, scalable code. Passionate about building responsive and efficient web applications, I am seeking a Software Engineer role where I can contribute effectively and continue to grow as a developer.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download Resume button */}
            <motion.a
              href="/SELVAM_M_Resume.pdf"
              download="SELVAM_M_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-secondary/40 transition-all"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
