const LifestyleBanner = () => (
  <section className="w-full overflow-hidden relative">
    <img
      src="https://kinis.vn/wp-content/uploads/2026/03/kv_shoe-scaled.png"
      alt="Kinis barefoot shoes lifestyle"
      className="w-full h-auto block"
      loading="lazy"
      width={4000}
      height={620}
    />
    <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
  </section>
);

export default LifestyleBanner;
