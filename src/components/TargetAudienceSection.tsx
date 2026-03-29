import { ArrowRight } from "lucide-react";

const audiences = [
  {
    title: "Người tập luyện trong Phòng Gym/Fitness",
    description:
      "Dòng Kinis Nomad được thiết kế cho sàn gym. Loại bỏ foam mềm của giày chạy, cung cấp nền phẳng, ổn định cao cho Squat, Deadlift, Yoga và Pilates. Tăng kích hoạt cơ và điều chỉnh cơ chế vận động phần dưới cơ thể.",
    href: "/doi-tuong/gym",
    bg: "hsl(0,0%,12%)",
    accent: "hsl(0,0%,22%)",
    btnBg: "hsl(0,0%,20%)",
    btnText: "#ffffff",
  },
  {
    title: "Người có bàn chân bẹt (Flat Feet)",
    description:
      "Kinis hoạt động như công cụ tập luyện, cung cấp không gian và cảm nhận mặt đất để người bàn chân bẹt chủ động kích hoạt và tăng cường cơ vòm chân theo thời gian, đặc biệt là người bàn chân bẹt thể mềm (linh hoạt).",
    href: "/doi-tuong/ban-chan-bet",
    bg: "hsl(27,100%,52%)",
    accent: "hsl(27,100%,45%)",
    btnBg: "hsl(27,100%,42%)",
    btnText: "#ffffff",
  },
  {
    title: "Người chạy bộ / Vận động viên (Runner)",
    description:
      "Kinis Barefoot là lựa chọn tối ưu cho runner trong quá trình luyện tập hoặc phục hồi sau khi chạy — nhờ thiết kế tối giản, mang cảm giác đi chân trần, giúp cải thiện cảm nhận mặt đất và sức mạnh bàn chân.",
    href: "/doi-tuong/chay-bo",
    bg: "hsl(25,40%,28%)",
    accent: "hsl(25,40%,22%)",
    btnBg: "hsl(25,40%,35%)",
    btnText: "#ffffff",
  },
];

const TargetAudienceSection = () => (
  <section
    className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        className="text-center text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-14 max-w-2xl mx-auto leading-relaxed"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        Kinis Barefoot dành cho tất cả những người yêu thích vận động, đang phục hồi hoặc mong muốn phòng ngừa chấn thương
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {audiences.map((item, i) => (
          <div
            key={item.title}
            className="relative flex flex-col rounded-2xl overflow-hidden animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            {/* Decorative notch top */}
            <div className="relative h-16 sm:h-20" style={{ backgroundColor: item.bg }}>
              <div
                className="absolute -bottom-px right-0 w-[60%] h-full rounded-bl-[2rem]"
                style={{ backgroundColor: "hsl(0,0%,96%)" }}
              />
            </div>

            {/* Card body */}
            <div
              className="flex flex-col flex-1 px-6 sm:px-7 pb-7 sm:pb-8 pt-1 rounded-tr-[2rem]"
              style={{ backgroundColor: item.bg }}
            >
              <h3
                className="font-display text-lg sm:text-xl font-bold leading-snug mb-4 uppercase tracking-wide"
                style={{ color: "#ffffff" }}
              >
                {item.title}
              </h3>

              <p
                className="text-sm sm:text-[0.938rem] leading-relaxed mb-6 flex-1"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {item.description}
              </p>

              <a
                href={`/#${item.href}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-300 ease-out hover:brightness-110"
                style={{
                  backgroundColor: item.btnBg,
                  color: item.btnText,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                Xem chi tiết
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;
