import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import profilePhoto from "@/assets/selva.jpeg";

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

      <div className="container-custom relative z-10 px-6 lg:px-16" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground">Software Developer</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Blob portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[420px] aspect-[200/187] mx-auto lg:mx-0 lg:justify-self-end"
          >
            <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <mask id="aboutBlobMask" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#aboutBlobMask)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(var(--secondary))" />
                <image href={profilePhoto} width="200" height="187" preserveAspectRatio="xMidYMid slice" />
              </g>
            </svg>
          </motion.div>

          {/* Right column: bio + stats + button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 max-w-xl"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Java Developer with strong expertise in Spring Boot and modern frontend technologies. I have a solid foundation in clean architecture and writing maintainable, scalable code. Passionate about building responsive and efficient web applications, I am seeking a Software Engineer role where I can contribute effectively and continue to grow as a developer.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-left"
                >
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line leading-snug">
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
