import { useState, useEffect } from "react";

const variants = [
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-gray-scaled.png",
    label: "Xám",
    color: "hsl(0,0%,60%)",
  },
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-black-scaled.png",
    label: "Đen",
    color: "hsl(0,0%,15%)",
  },
  {
    src: "https://kinis.vn/wp-content/uploads/2026/04/nomad-red-scaled.png",
    label: "Đỏ",
    color: "hsl(0,75%,45%)",
  },
];

const NomadColorCarousel = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % variants.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) =>
    (active + offset + variants.length) % variants.length;

  return (
    <section className="py-4 sm:py-6 lg:py-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative flex items-center justify-center" style={{ height: "340px" }}>
        {[-1, 0, 1].map((offset) => {
          const idx = getIndex(offset);
          const item = variants[idx];
          const isActive = offset === 0;

          return (
            <div
              key={`${offset}-${idx}`}
              onClick={() => !isActive && setActive(idx)}
              className="absolute flex flex-col items-center transition-all duration-500 ease-in-out"
              style={{
                transform: isActive
                  ? "translateX(0) scale(1)"
                  : offset === -1
                  ? "translateX(-60%) scale(0.6)"
                  : "translateX(60%) scale(0.6)",
                opacity: isActive ? 1 : 0.35,
                zIndex: isActive ? 10 : 5,
                cursor: isActive ? "default" : "pointer",
              }}
            >
              <img
                src={item.src}
                alt={`Kinis Nomad ${item.label}`}
                className="w-56 sm:w-72 md:w-80 lg:w-96 object-contain pointer-events-none select-none"
                draggable={false}
              />
              {isActive && (
                <div className="flex items-center gap-2 mt-4 animate-fade-in">
                  <span
                    className="w-5 h-5 rounded-full border-2 border-white flex-shrink-0"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: "0 0 0 1px hsl(0 0% 80%)",
                    }}
                  />
                  <span className="text-sm sm:text-base font-display font-semibold text-foreground tracking-wide">
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NomadColorCarousel;
