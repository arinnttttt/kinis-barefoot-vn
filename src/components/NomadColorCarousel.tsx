import { useEffect, useState } from "react";

const variants = [
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-gray-scaled.png",
    label: "Xám",
    color: "hsl(0 0% 60%)",
  },
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-black-scaled.png",
    label: "Đen",
    color: "hsl(0 0% 15%)",
  },
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-red-scaled.png",
    label: "Đỏ",
    color: "hsl(0 75% 45%)",
  },
];

const visibleOffsets = [-1, 0, 1] as const;

const NomadColorCarousel = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % variants.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="py-4 sm:py-6 lg:py-8 overflow-hidden"
      style={{ backgroundColor: "hsl(0 0% 100%)" }}
    >
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <div className="flex items-end justify-center gap-0 sm:gap-2 md:gap-4 lg:gap-6">
          {visibleOffsets.map((offset) => {
            const idx = (active + offset + variants.length) % variants.length;
            const item = variants[idx];
            const isActive = offset === 0;

            return (
              <button
                key={`${offset}-${idx}`}
                type="button"
                onClick={() => !isActive && setActive(idx)}
                className="flex flex-col items-center border-0 bg-transparent p-0 transition-all duration-500 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.35,
                  transform: isActive ? "translateY(0) scale(1)" : "translateY(10px) scale(0.82)",
                  width: isActive ? "clamp(12rem, 30vw, 24rem)" : "clamp(6rem, 17vw, 12rem)",
                  cursor: isActive ? "default" : "pointer",
                }}
                aria-label={`Chọn màu ${item.label}`}
              >
                <img
                  src={item.src}
                  alt={`Kinis Nomad ${item.label}`}
                  className="block w-full h-auto object-contain select-none"
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />

                <div
                  className="mt-3 flex items-center gap-2 transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0 }}
                  aria-hidden={!isActive}
                >
                  <span
                    className="h-4 w-4 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: "0 0 0 1px hsl(0 0% 82%)",
                    }}
                  />
                  <span className="text-sm sm:text-base font-display font-semibold text-foreground tracking-wide">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NomadColorCarousel;
