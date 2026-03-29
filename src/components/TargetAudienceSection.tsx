import { ArrowRight } from "lucide-react";

const audiences = [
  {
    title: "Người tập luyện trong Phòng Gym/Fitness",
    description:
      "Dòng Kinis Nomad được thiết kế cho sàn gym. Loại bỏ foam mềm của giày chạy, cung cấp nền phẳng, ổn định cao cho Squat, Deadlift, Yoga và Pilates. Tăng kích hoạt cơ và điều chỉnh cơ chế vận động phần dưới cơ thể.",
    href: "/doi-tuong/gym",
    icon: "🏋️",
  },
  {
    title: "Người có bàn chân bẹt (Flat Feet)",
    description:
      "Kinis hoạt động như công cụ tập luyện, cung cấp không gian và cảm nhận mặt đất để người bàn chân bẹt chủ động kích hoạt và tăng cường cơ vòm chân theo thời gian, đặc biệt là người bàn chân bẹt thể mềm (linh hoạt).",
    href: "/doi-tuong/ban-chan-bet",
    icon: "🦶",
  },
  {
    title: "Người chạy bộ / Vận động viên (Runner)",
    description:
      "Kinis Barefoot là lựa chọn tối ưu cho runner trong quá trình luyện tập hoặc phục hồi sau khi chạy — nhờ thiết kế tối giản, mang cảm giác đi chân trần, giúp cải thiện cảm nhận mặt đất và sức mạnh bàn chân.",
    href: "/doi-tuong/chay-bo",
    icon: "🏃",
  },
];

const TargetAudienceSection = () => (
  <section
    className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,98%)", isolation: "isolate" }}
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
        className="text-center text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        Kinis Barefoot dành cho tất cả những người yêu thích vận động, đang phục hồi hoặc mong muốn phòng ngừa chấn thương
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {audiences.map((item, i) => (
          <div
            key={item.title}
            className="group relative flex flex-col p-6 sm:p-7 lg:p-8 rounded-2xl transition-all duration-300 ease-out animate-fade-up"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <span className="text-3xl sm:text-4xl mb-4">{item.icon}</span>
            <h3
              className="font-display text-lg sm:text-xl font-semibold leading-snug mb-3"
              style={{ color: "hsl(0,0%,10%)" }}
            >
              {item.title}
            </h3>
            <p
              className="text-sm sm:text-base leading-relaxed mb-6 flex-1"
              style={{ color: "hsl(0,0%,40%)" }}
            >
              {item.description}
            </p>
            <a
              href={`/#${item.href}`}
              className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors duration-300"
              style={{ color: "hsl(27,100%,52%)" }}
            >
              Xem chi tiết
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;
