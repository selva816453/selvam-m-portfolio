import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-custom">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Built by{" "}
            <span className="gradient-text font-medium">Selvam M</span>
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
