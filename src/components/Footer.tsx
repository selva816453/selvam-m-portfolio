import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Mail, href: "#", label: "Email", color: "hover:text-primary" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-custom">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:glow-cyan hover:scale-110`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

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
            <span className="gradient-text font-medium">John Doe</span>
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
