import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  dark?: boolean;
}

const PageHero = ({ title, subtitle, image, dark = true }: PageHeroProps) => (
  <section className={`relative overflow-hidden ${dark ? "bg-[hsl(var(--nav))]" : "bg-muted"}`}>
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_0%/0.9)] to-[hsl(0_0%_0%/0.4)]" />
      </div>
    )}
    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${dark ? "text-[hsl(var(--nav-foreground))]" : "text-foreground"}`}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 text-lg md:text-xl max-w-2xl ${dark ? "text-[hsl(var(--nav-foreground))]/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
