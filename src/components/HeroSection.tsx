import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send, MouseIcon, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/selva.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle gradient orbs to keep depth without breaking the clean dark theme */}
      <div className="blur-orb w-[400px] h-[400px] bg-primary/10 -top-32 -left-32" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/10 -bottom-32 -right-32" />

      <div className="container-custom relative z-10 px-6 lg:px-16">
        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-16">
          {/* Vertical Social Icons */}
          <motion.div
            className="flex flex-col gap-6 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/selvam-m-350562324/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/selva816453", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/_s_e_l_v_a_27/", label: "Instagram" },
              { icon: Mail, href: "mailto:selva816453@gmail.com", label: "Email" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-primary/80 hover:text-primary hover:scale-125 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight">
              Hi, I'm <span className="gradient-text">Selvam M</span>
            </h1>

            <h3 className="text-lg md:text-2xl font-medium text-muted-foreground mb-6">
              Java &amp; Frontend Developer
            </h3>

            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              I build responsive, efficient web applications using{" "}
              <span className="text-foreground font-semibold">Spring Boot, HTML, CSS, and JavaScript</span>,
              with a focus on clean architecture and maintainable code.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-secondary/40 transition-all"
            >
              Contact me
              <Send className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Blob-Shaped Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="hidden lg:block relative w-[320px] h-[340px] xl:w-[380px] xl:h-[400px] justify-self-end"
          >
            <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <mask id="blobMask" maskType="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#blobMask)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" fill="hsl(var(--secondary))" />
                <image href={profilePhoto} width="200" height="187" preserveAspectRatio="xMidYMid slice" />
              </g>
            </svg>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="hidden md:inline-flex items-center gap-2 mt-16 ml-12 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="w-5 h-8 rounded-full border-2 border-primary flex items-start justify-center p-1">
            <motion.span
              className="w-1 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </span>
          Scroll down
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
