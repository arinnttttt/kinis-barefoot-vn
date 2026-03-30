import lifestyleBanner from "@/assets/lifestyle-banner.png";

const LifestyleBanner = () => (
  <section className="w-full overflow-hidden mb-12 sm:mb-16 lg:mb-20">
    <img
      src={lifestyleBanner}
      alt="Kinis barefoot shoes lifestyle"
      className="w-full h-auto block"
      loading="lazy"
      width={4000}
      height={620}
    />
  </section>
);

export default LifestyleBanner;
