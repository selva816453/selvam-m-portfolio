import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      <div className="blur-orb w-[600px] h-[300px] bg-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto glow-gradient"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Available for Freelance
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and exciting opportunities. 
            If you have a project that needs some creative magic, let's talk!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="shine" size="xl">
              Start a Project
            </Button>
            <Button variant="neon" size="xl">
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
