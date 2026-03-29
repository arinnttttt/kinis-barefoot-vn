import { ArrowRight } from "lucide-react";
import audienceGym from "@/assets/audience-gym.jpg";
import audienceFlatfeet from "@/assets/audience-flatfeet.jpg";
import audienceRunner from "@/assets/audience-runner.jpg";

const audiences = [
  {
    title: "Người tập luyện trong Phòng Gym/Fitness",
    description:
      "Dòng Kinis Nomad được thiết kế cho sàn gym. Loại bỏ foam mềm của giày chạy, cung cấp nền phẳng, ổn định cao cho Squat, Deadlift, Yoga và Pilates. Tăng kích hoạt cơ và điều chỉnh cơ chế vận động phần dưới cơ thể.",
    href: "/doi-tuong/gym",
    image: audienceGym,
    overlay: "rgba(0,0,0,0.75)",
    titleColor: "#ffffff",
    textColor: "rgba(255,255,255,0.75)",
    btnBg: "#ffffff",
    btnText: "hsl(0,0%,10%)",
  },
  {
    title: "Người có bàn chân bẹt (Flat Feet)",
    description:
      "Kinis hoạt động như công cụ tập luyện, cung cấp không gian và cảm nhận mặt đất để người bàn chân bẹt chủ động kích hoạt và tăng cường cơ vòm chân theo thời gian, đặc biệt là người bàn chân bẹt thể mềm (linh hoạt).",
    href: "/doi-tuong/ban-chan-bet",
    image: audienceFlatfeet,
    overlay: "rgba(249,115,22,0.82)",
    titleColor: "#ffffff",
    textColor: "rgba(255,255,255,0.85)",
    btnBg: "#ffffff",
    btnText: "hsl(27,100%,45%)",
  },
  {
    title: "Người chạy bộ / Vận động viên (Runner)",
    description:
      "Kinis Barefoot là lựa chọn tối ưu cho runner trong quá trình luyện tập hoặc phục hồi sau khi chạy — nhờ thiết kế tối giản, mang cảm giác đi chân trần, giúp cải thiện cảm nhận mặt đất và sức mạnh bàn chân.",
    href: "/doi-tuong/chay-bo",
    image: audienceRunner,
    overlay: "rgba(255,255,255,0.88)",
    titleColor: "hsl(0,0%,10%)",
    textColor: "hsl(0,0%,35%)",
    btnBg: "hsl(0,0%,10%)",
    btnText: "#ffffff",
  },
];

const TargetAudienceSection = () => (
  <section
    className="py-8 sm:py-10 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,96%)", isolation: "isolate" }}
    aria-labelledby="audience-heading"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="audience-heading"
        className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight text-center mb-3 sm:mb-4"
        style={{ color: "hsl(0,0%,10%)" }}
      >
        Ai thực sự phù hợp với{" "}
        <span style={{ color: "hsl(27,100%,52%)" }}>Kinis Barefoot?</span>
      </h2>
      <p
        className="text-center text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 lg:mb-14 max-w-2xl mx-auto leading-relaxed"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        Kinis Barefoot dành cho tất cả những người yêu thích vận động, đang phục hồi hoặc mong muốn phòng ngừa chấn thương
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-7">
        {audiences.map((item, i) => (
          <div
            key={item.title}
            className="group relative flex flex-col rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[440px] animate-fade-up"
            style={{
              animationDelay: `${i * 120}ms`,
              ...(i === 2 ? {
                border: "1px solid transparent",
                backgroundClip: "padding-box",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08), 0 0 0 1px rgba(249,115,22,0.2)",
              } : {}),
            }}
          >
            {/* Background image */}
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Color overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: item.overlay }} />

            {/* Content */}
            <div className="relative flex flex-col flex-1 p-4 sm:p-5 lg:p-8 justify-end">
              <h3
                className="font-display text-base sm:text-base lg:text-xl font-bold leading-snug mb-2 sm:mb-2 lg:mb-3"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm sm:text-xs lg:text-base leading-relaxed mb-4 sm:mb-3 lg:mb-6 line-clamp-3 sm:line-clamp-4 lg:line-clamp-none"
                style={{ color: item.textColor }}
              >
                {item.description}
              </p>
              <a
                href={`/#${item.href}`}
                className="inline-flex items-center gap-2 self-start px-5 py-2.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-xl font-body font-semibold text-sm sm:text-xs lg:text-sm transition-all duration-300 ease-out hover:shadow-lg"
                style={{
                  backgroundColor: item.btnBg,
                  color: item.btnText,
                }}
              >
                Xem chi tiết
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;
