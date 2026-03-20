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
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:py-24 md:py-32">
      <h1
        className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up ${dark ? "text-[hsl(var(--nav-foreground))]" : "text-foreground"}`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-2xl animate-fade-up [animation-delay:100ms] ${dark ? "text-[hsl(var(--nav-foreground))]/70" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
