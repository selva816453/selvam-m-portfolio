import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/selva.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
          {/* Profile Picture */}
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/50 glow-cyan"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <img
              src={profilePhoto}
              alt="Selva"
              className="w-full h-full object-cover"
            />
          </motion.div>

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
            <Button 
              variant="hero-outline" 
              size="xl" 
              className="group"
              asChild
            >
              <a href="/resume.pdf" download="John_Doe_Resume.pdf">
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Github, href: "https://github.com/johndoe", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com/johndoe", label: "Instagram" },
              { icon: Twitter, href: "https://twitter.com/johndoe", label: "Twitter" },
              { icon: Mail, href: "mailto:john@example.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-cyan hover:scale-110 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
