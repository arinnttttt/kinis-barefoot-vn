import { Footprints, Layers, Brain, Bone } from "lucide-react";
const shoeImage = "https://kinis.vn/wp-content/uploads/2026/03/shoe-features.png";
import apmaSeal from "@/assets/apma-seal.png";
const appMockup = "https://kinis.vn/wp-content/uploads/2026/03/img-promo-app.png";
import kSystemLogo from "@/assets/k-system.png";

const features = [
  {
    id: "wide-toe",
    label: "Mũi giày rộng",
    description:
      "Giúp các ngón chân hoàn toàn được tự do, xòe tự nhiên, tăng diện tích tiếp xúc và cải thiện đáng kể sự ổn định và thăng bằng.",
    top: "60%",
    left: "88%",
    cardSide: "right",
    iconClass: "lucide-footprints",
  },
  {
    id: "zero-drop",
    label: "Đế phẳng Zero-Drop",
    description:
      "Gót chân và mũi chân ở cùng một mức, ngăn lệch tư thế và phân bổ trọng lượng cơ thể đều đặn.",
    top: "78%",
    left: "13%",
    cardSide: "left",
    iconClass: "lucide-layers",
  },
  {
    id: "thin-sole",
    label: "Đế mỏng & linh hoạt",
    description:
      "Tăng cường hệ cảm giác (proprioception) từ mặt đất lên não bộ, giúp hệ thần kinh tự động điều chỉnh và ổn định cơ thể khi đi trên nhiều loại địa hình khác nhau.",
    top: "85%",
    left: "42%",
    cardSide: "left",
    iconClass: "lucide-brain",
  },
  {
    id: "no-arch",
    label: "Không hỗ trợ vòm nhân tạo",
    description:
      'Điều này cho phép các nhóm cơ nội tại và xương bàn chân "thức tỉnh", từ đó hỗ trợ cải thiện cấu trúc vòm chân theo thời gian, đặc biệt là người có bàn chân bẹt.',
    top: "78%",
    left: "70%",
    cardSide: "right",
    iconClass: "lucide-bone",
  },
];

const iconMap = { Footprints, Layers, Brain, Bone };
const featureIcons = [Footprints, Layers, Brain, Bone];

const WhyKinisDifferent = () => {
  return (
    <section className="why-kinis-section py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(0, 0%, 96%)", isolation: "isolate" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight" style={{ color: "hsl(0, 0%, 10%)" }}>
            Điều gì khiến <span style={{ color: "hsl(27, 100%, 52%)" }}>Kinis Barefoot</span> khác biệt?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(0, 0%, 40%)" }}>
            Thiết kế giày Kinis tôn trọng hoàn toàn cấu trúc tự nhiên của bàn chân, dựa trên nền tảng khoa học vận động và cơ chế sinh học tự nhiên (natural biomechanics).
          </p>
        </div>

        {/* Interactive shoe with hotspots */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <img
              src={shoeImage}
              alt="Giày Kinis Barefoot với các đặc điểm thiết kế"
              className="w-full h-auto"
              loading="lazy"
              width={800}
              height={800}
            />

            {/* Hotspot dots - desktop only, CSS hover */}
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature.id}
                  className="shoe-hotspot hidden lg:block absolute"
                  style={{ top: feature.top, left: feature.left }}
                >
                  <span className="shoe-hotspot-ping absolute -inset-2.5 rounded-full" style={{ backgroundColor: "hsla(27, 100%, 52%, 0.3)" }} />
                  <span className="relative block w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: "hsl(27, 100%, 52%)" }} />

                  <div
                    className={`shoe-hotspot-card absolute z-30 w-72 p-4 rounded-xl shadow-lg ${
                      feature.cardSide === "left" ? "right-8 top-1/2" : "left-8 top-1/2"
                    }`}
                    style={{
                      backgroundColor: "hsl(0, 0%, 100%)",
                      borderColor: "hsla(27, 100%, 52%, 0.2)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      transform: "translateY(-50%) scale(0.95)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 shrink-0" style={{ color: "hsl(27, 100%, 52%)" }} />
                      <span className="font-display text-base font-medium" style={{ color: "hsl(0, 0%, 10%)" }}>{feature.label}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(0, 0%, 40%)" }}>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/tablet: static cards below shoe */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature.id}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(0, 0%, 88%)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 shrink-0" style={{ color: "hsl(27, 100%, 52%)" }} />
                    <span className="font-display text-base font-medium" style={{ color: "hsl(0, 0%, 10%)" }}>{feature.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(0, 0%, 40%)" }}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom two cards - diagonal with rounded corners */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2">
          {/* APMA Card - black bg, skew approach preserves border-radius */}
          <div className="diagonal-skew-card rounded-2xl overflow-visible lg:w-[38%] relative flex flex-col" style={{ backgroundColor: "#1a1a1a" }}>
            {/* APMA Seal stamp */}
            <img
              src={apmaSeal}
              alt="APMA Accepted Seal"
              className="apma-seal-stamp absolute -top-5 sm:-top-5 -left-4 sm:-left-5 w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 object-contain z-10 sm:[transform:skewX(5deg)_rotate(-8deg)] rotate-[-8deg]"
              loading="lazy"
            />
            <div className="diagonal-skew-content p-6 sm:p-8 lg:pr-14 pl-14 sm:pl-24 pt-4 sm:pt-6">
              <p className="font-display text-lg sm:text-xl font-medium uppercase tracking-wide" style={{ color: "#ffffff" }}>
                Đạt chứng nhận APMA
              </p>
              <p className="text-xs font-medium mb-3" style={{ color: "#999999" }}>
                American Podiatric Medical Association
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#b3b3b3" }}>
                Giày Kinis Lucy đã đạt chứng nhận từ APMA (Hiệp Hội Y Học Bàn Chân Hoa Kỳ). Đây là "tiêu chuẩn vàng" toàn cầu xác nhận sản phẩm thúc đẩy sức khỏe bàn chân tự nhiên và bảo vệ cấu trúc xương.
              </p>
            </div>
          </div>

          {/* Ecosystem Card - orange bg with app mockup */}
          <div className="relative lg:w-[62%]" style={{ minHeight: "220px" }}>
            <div className="diagonal-skew-card rounded-2xl relative overflow-visible pb-36 sm:pb-0" style={{ backgroundColor: "#f97316" }}>
              <div className="diagonal-skew-content relative">
                <div className="p-6 sm:p-8 lg:pl-14 relative z-10 sm:max-w-[58%] lg:max-w-[56%]">
                  <p className="font-display text-lg sm:text-xl font-medium uppercase tracking-wide" style={{ color: "#ffffff" }}>
                    Nằm trong hệ sinh thái Kinis
                  </p>
                  <p className="text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Chăm sóc sức khỏe vận động toàn diện
                  </p>
                  <img src={kSystemLogo} alt="Kinis Ecosystem" className="h-6 sm:h-7 w-auto object-contain mb-2" loading="lazy" />
                  <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Hơn 1 đôi giày, Kinis mang đến cho bạn giải pháp toàn diện — Công cụ kiểm tra thăng bằng Kinis BalancePro tích hợp AI, được APTA khuyến nghị sử dụng trong khám lâm sàng và hệ thống bài tập cá nhân hóa cải thiện cùng giày Kinis.
                  </p>
                </div>
                {/* Tablet + Desktop: absolute mockup bleeds outside card, vw-based sizing for responsive scaling */}
                <img
                  src={appMockup}
                  alt="Kinis BalancePro App"
                  loading="lazy"
                  className="hidden sm:block absolute top-1/2 right-[-4%] lg:right-[-8%] w-[38%] lg:w-[42%] max-w-[520px] min-w-[240px] h-auto object-contain pointer-events-none z-20"
                  style={{ transform: "translateY(-50%) skewX(5deg)" }}
                />
                {/* Mobile only */}
                <div className="sm:hidden absolute bottom-0 left-0 right-0 flex justify-center translate-y-1/2 px-4">
                  <img
                    src={appMockup}
                    alt="Kinis BalancePro App"
                    className="w-full max-w-[320px] h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            {/* Spacer for mobile mockup overflow */}
            <div className="sm:hidden h-36" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKinisDifferent;
