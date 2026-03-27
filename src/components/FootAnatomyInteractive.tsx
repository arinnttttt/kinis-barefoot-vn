import footAnatomy from "@/assets/foot-anatomy.jpg";

const hotspots = [
  {
    id: "bones",
    label: "26 xương",
    description: "Bàn chân chứa 26 xương — chiếm 1/4 tổng số xương trong cơ thể, tạo nên cấu trúc vững chắc và linh hoạt.",
    top: "22%",
    left: "38%",
    delay: "0s",
  },
  {
    id: "joints",
    label: "33 khớp",
    description: "33 khớp nối cho phép bàn chân uốn cong, xoay và thích nghi với mọi bề mặt địa hình.",
    top: "42%",
    left: "42%",
    delay: "0.7s",
  },
  {
    id: "nerves",
    label: "200K+ đầu dây thần kinh",
    description: "Hơn 200.000 đầu dây thần kinh giúp bàn chân cảm nhận mặt đất và gửi tín hiệu về não để điều chỉnh thăng bằng.",
    top: "62%",
    left: "55%",
    delay: "1.4s",
  },
];

const FootAnatomyInteractive = () => {
  return (
    <div className="foot-anatomy-interactive relative w-full h-full">
      <div className="rounded-2xl overflow-hidden shadow-[0_8px_32px_-8px_hsl(0,0%,0%,0.12)] h-full">
        <img
          src={footAnatomy}
          alt="Giải phẫu bàn chân - 26 xương, 33 khớp và hơn 200.000 đầu dây thần kinh"
          className="w-full h-[110%] object-cover object-top block"
          loading="lazy"
          width={800}
          height={1024}
        />

        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="foot-hotspot absolute"
            style={{ top: spot.top, left: spot.left }}
          >
            {/* Pulse ring */}
            <span
              className="foot-hotspot-ping absolute -inset-3 rounded-full"
              style={{
                animationDelay: spot.delay,
                animationDuration: "2s",
                backgroundColor: "hsla(25, 95%, 53%, 0.3)",
              }}
            />
            {/* Dot */}
            <span
              className="foot-hotspot-dot relative block w-5 h-5 rounded-full border-2 border-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "hsl(25, 95%, 53%)" }}
            />

            {/* Tooltip - pure CSS hover */}
            <div className="foot-hotspot-tooltip absolute z-30 left-6 top-1/2 w-56 sm:w-64 p-3.5 rounded-xl border shadow-[0_8px_32px_-8px_hsl(0,0%,0%,0.15)]">
              <p
                className="font-display text-sm font-bold mb-1"
                style={{ color: "hsl(25, 95%, 53%)" }}
              >
                {spot.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(0, 0%, 45%)" }}>
                {spot.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootAnatomyInteractive;
