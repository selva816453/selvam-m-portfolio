import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/selvam-m-350562324/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/selva816453", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/_s_e_l_v_a_27/", label: "Instagram" },
  { icon: Mail, href: "mailto:selva816453@gmail.com", label: "Email" },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Contact Me",
    value: "+91 96558 16453",
    href: "tel:+919655816453",
  },
  {
    icon: Mail,
    title: "Email",
    value: "selva816453@gmail.com",
    href: "mailto:selva816453@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tamil Nadu, India",
    href: null,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClasses =
    "w-full px-5 py-4 bg-muted/40 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300";

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="blur-orb w-[500px] h-[500px] bg-primary/10 -bottom-48 left-1/2 -translate-x-1/2" />
      <div className="blur-orb w-[300px] h-[300px] bg-secondary/15 top-32 -left-32" />

      <div className="container-custom relative z-10 px-5 sm:px-6 lg:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">Contact Me</h2>
          <p className="text-muted-foreground text-base md:text-lg">Get in touch</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-7 sm:space-y-10 lg:pl-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-5 group">
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{info.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {info.href ? (
                    <a href={info.href} className="block hover:text-primary transition-colors">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-2"
            >
              <h3 className="text-sm font-mono text-muted-foreground tracking-[0.3em] mb-4 uppercase">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 text-primary hover:border-primary hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
            <textarea
              placeholder="Message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />

            <div className="flex justify-center pt-2">
              <Button type="submit" variant="gradient" size="xl" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block mr-2"
                    >
                      ⏳
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
