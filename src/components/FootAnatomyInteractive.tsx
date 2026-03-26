import { useState } from "react";
import footAnatomy from "@/assets/foot-anatomy.jpg";

const hotspots = [
  {
    id: "nerves",
    label: "200K+ đầu dây thần kinh",
    description: "Hơn 200.000 đầu dây thần kinh giúp bàn chân cảm nhận mặt đất và gửi tín hiệu về não để điều chỉnh thăng bằng.",
    top: "18%",
    left: "55%",
    delay: "1.4s",
  },
  {
    id: "joints",
    label: "33 khớp",
    description: "33 khớp nối cho phép bàn chân uốn cong, xoay và thích nghi với mọi bề mặt địa hình.",
    top: "52%",
    left: "42%",
    delay: "0.7s",
  },
  {
    id: "bones",
    label: "26 xương",
    description: "Bàn chân chứa 26 xương — chiếm 1/4 tổng số xương trong cơ thể, tạo nên cấu trúc vững chắc và linh hoạt.",
    top: "78%",
    left: "48%",
    delay: "0s",
  },
];

const FootAnatomyInteractive = () => {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.12)]">
        <img
          src={footAnatomy}
          alt="Giải phẫu bàn chân - 26 xương, 33 khớp và hơn 200.000 đầu dây thần kinh"
          className="w-full h-auto"
          loading="lazy"
          width={800}
          height={1024}
        />

        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute group"
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveSpot(spot.id)}
            onMouseLeave={() => setActiveSpot(null)}
            onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
          >
            {/* Pulse ring */}
            <span
              className="absolute -inset-2 rounded-full bg-secondary/30 animate-ping"
              style={{ animationDelay: spot.delay, animationDuration: "2s" }}
            />
            {/* Dot */}
            <span className="relative block w-3.5 h-3.5 rounded-full bg-secondary border-2 border-white shadow-lg cursor-pointer transition-transform duration-200 hover:scale-150" />

            {/* Tooltip */}
            {activeSpot === spot.id && (
              <div className="absolute z-30 left-6 top-1/2 -translate-y-1/2 w-56 sm:w-64 p-3.5 rounded-xl bg-card/90 backdrop-blur-xl border border-border shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.15)] animate-fade-in">
                <p className="font-display text-sm font-bold text-secondary mb-1">
                  {spot.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {spot.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootAnatomyInteractive;
