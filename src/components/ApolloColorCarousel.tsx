import { useEffect, useState } from "react";

const variants = [
  { src: "", label: "Đen", color: "hsl(0 0% 15%)" },
  { src: "", label: "Trắng", color: "hsl(40 30% 90%)" },
  { src: "", label: "Xám", color: "hsl(0 0% 60%)" },
  { src: "", label: "Cam", color: "hsl(27 100% 52%)" },
];

const visibleOffsets = [-1, 0, 1] as const;

const ApolloColorCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % variants.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      data-apollo-carousel
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
                {item.src ? (
                  <img
                    src={item.src}
                    alt={`Kinis Apollo Pro ${item.label}`}
                    className="block w-full h-auto object-contain select-none"
                    draggable={false}
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="block w-full bg-muted rounded-xl flex items-center justify-center select-none"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <span className="text-xs text-muted-foreground">Ảnh sắp có</span>
                  </div>
                )}
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

export default ApolloColorCarousel;
