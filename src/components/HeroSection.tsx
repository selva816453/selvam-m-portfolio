import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Scene3D from "./Scene3D";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <ParticleBackground />
      <Scene3D />
      
      {/* Gradient Orbs */}
      <div className="blur-orb w-[500px] h-[500px] bg-primary/30 -top-48 -left-48" />
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/30 -bottom-32 -right-32" />
      <div className="blur-orb w-[300px] h-[300px] bg-accent/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary font-mono text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {"// Hello, World!"}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-foreground">I'm </span>
            <span className="gradient-text text-glow">John Doe</span>
          </h1>

          <div className="text-2xl md:text-4xl font-medium text-muted-foreground mb-8 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Open Source Contributor",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text-cyan"
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Crafting exceptional digital experiences with modern technologies.
            Passionate about building products that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button variant="hero" size="xl" className="group">
              <Mail className="mr-2 group-hover:rotate-12 transition-transform" />
              Hire Me
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
