import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send, MouseIcon, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/selvam-profile.jpeg";

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
              I build responsive, scalable web applications with{" "}
              <span className="text-foreground font-semibold">Spring Boot</span> and modern web technologies, focusing on performance, clean design, and long-term maintainability.
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

          {/* Circular Portrait - face centered inside frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="hidden lg:block relative w-[320px] h-[320px] xl:w-[380px] xl:h-[380px] justify-self-end"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-2xl bg-background flex items-center justify-center">
              <img
                src={profilePhoto}
                alt="Selvam M"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex items-center gap-2 mt-16 mx-auto w-fit text-sm text-muted-foreground hover:text-primary transition-colors"
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
