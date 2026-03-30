import lifestyleBanner from "@/assets/lifestyle-banner.png";

const LifestyleBanner = () => (
  <section className="w-full overflow-hidden">
    <img
      src={lifestyleBanner}
      alt="Kinis barefoot shoes lifestyle"
      className="w-full h-auto block"
      loading="lazy"
      width={4000}
      height={800}
    />
  </section>
);

export default LifestyleBanner;
