import { useState } from "react";

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

  const getIndex = (offset: number) =>
    (active + offset + variants.length) % variants.length;

  return (
    <section className="py-10 sm:py-14 lg:py-16 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative flex items-center justify-center" style={{ minHeight: "340px" }}>
        {[-1, 0, 1].map((offset) => {
          const idx = getIndex(offset);
          const item = variants[idx];
          const isActive = offset === 0;

          return (
            <button
              key={`${offset}-${idx}`}
              onClick={() => setActive(idx)}
              className="absolute flex flex-col items-center transition-all duration-500 ease-in-out focus:outline-none"
              style={{
                transform: isActive
                  ? "translateX(0) scale(1)"
                  : offset === -1
                  ? "translateX(-65%) scale(0.65)"
                  : "translateX(65%) scale(0.65)",
                opacity: isActive ? 1 : 0.4,
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
            </button>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {variants.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none"
            style={{
              backgroundColor: i === active ? item.color : "hsl(0,0%,82%)",
              transform: i === active ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={item.label}
          />
        ))}
      </div>
    </section>
  );
};

export default NomadColorCarousel;
