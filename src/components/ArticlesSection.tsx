import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications with proper architecture and state management.",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    tags: ["React", "Architecture"],
    link: "#",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development in 2025 and beyond.",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    tags: ["Web Dev", "Trends"],
    link: "#",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively for type-safe code.",
    date: "Nov 1, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Tutorial"],
    link: "#",
  },
];

const ArticleCard = ({ article, index, isInView }: { 
  article: typeof articles[0]; 
  index: number; 
  isInView: boolean;
}) => {
  return (
    <motion.a
      href={article.link}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group block glass rounded-2xl p-6 hover:glow-gradient transition-all duration-500"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {article.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        <motion.span
          className="text-primary flex items-center gap-1 text-sm font-medium"
          whileHover={{ x: 5 }}
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </div>
    </motion.a>
  );
};

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="blur-orb w-[400px] h-[400px] bg-accent/15 -top-32 -left-32" />

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.title}
              article={article}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
