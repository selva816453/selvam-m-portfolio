import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Target } from "lucide-react";
import profilePhoto from "@/assets/selva.jpeg";

const stats = [
  { icon: Code2, value: "3+", label: "Years Learning Experience" },
  { icon: Rocket, value: "5+", label: "Projects Completed" },
  { icon: Target, value: "300+", label: "Problems Solved" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="blur-orb w-[400px] h-[400px] bg-secondary/20 -top-32 -right-32" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6 animate-pulse-glow" />
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Selvam M"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Java & <span className="gradient-text">Frontend Developer</span> | Clean Architecture, Scalable Systems, Better User Experience
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm Selvam M, a developer specializing in Java and modern frontend technologies. I build responsive, efficient web applications using Spring Boot, HTML, CSS, and JavaScript, with a focus on clean architecture and maintainable code.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I have developed real-world projects, including a fashion e-commerce platform and a personal portfolio, applying mobile-first design and intuitive user interfaces.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I continuously strengthen my skills in software development and problem-solving, with a focus on delivering reliable and scalable solutions. I am seeking a Software Engineer role where I can contribute to building impactful digital products.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center group hover:glow-cyan transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
