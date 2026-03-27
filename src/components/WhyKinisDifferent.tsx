import { useState } from "react";
import { Footprints, Layers, Brain, Bone } from "lucide-react";
import shoeImage from "@/assets/shoe-features.png";
import apmaBadge from "@/assets/apma-badge.png";
import appMockup from "@/assets/kinis-app-mockup.png";

const features = [
  {
    id: "wide-toe",
    icon: Footprints,
    label: "Mũi giày rộng",
    description:
      "Giúp các ngón chân hoàn toàn được tự do, xòe tự nhiên, tăng diện tích tiếp xúc và cải thiện đáng kể sự ổn định và thăng bằng.",
    top: "60%",
    left: "88%",
    cardSide: "right" as const,
  },
  {
    id: "zero-drop",
    icon: Layers,
    label: "Đế phẳng Zero-Drop",
    description:
      "Gót chân và mũi chân ở cùng một mức, ngăn lệch tư thế và phân bổ trọng lượng cơ thể đều đặn.",
    top: "78%",
    left: "13%",
    cardSide: "left" as const,
  },
  {
    id: "thin-sole",
    icon: Brain,
    label: "Đế mỏng & linh hoạt",
    description:
      "Tăng cường hệ cảm giác (proprioception) từ mặt đất lên não bộ, giúp hệ thần kinh tự động điều chỉnh và ổn định cơ thể khi đi trên nhiều loại địa hình khác nhau.",
    top: "85%",
    left: "42%",
    cardSide: "left" as const,
  },
  {
    id: "no-arch",
    icon: Bone,
    label: "Không hỗ trợ vòm nhân tạo",
    description:
      'Điều này cho phép các nhóm cơ nội tại và xương bàn chân "thức tỉnh", từ đó hỗ trợ cải thiện cấu trúc vòm chân theo thời gian, đặc biệt là người có bàn chân bẹt.',
    top: "78%",
    left: "70%",
    cardSide: "right" as const,
  },
];

const WhyKinisDifferent = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight text-foreground">
            Điều gì khiến <span className="text-secondary">Kinis Barefoot</span> khác biệt?
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Thiết kế giày Kinis tôn trọng hoàn toàn cấu trúc tự nhiên của bàn chân, dựa trên nền tảng khoa học vận động và cơ chế sinh học tự nhiên (natural biomechanics).
          </p>
        </div>

        {/* Interactive shoe with hotspots */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Shoe image with hotspots - desktop only dots */}
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <img
              src={shoeImage}
              alt="Giày Kinis Barefoot với các đặc điểm thiết kế"
              className="w-full h-auto"
              loading="lazy"
              width={800}
              height={800}
            />

            {/* Hotspot dots - desktop only */}
            {features.map((feature) => (
              <div
                key={feature.id}
                className="hidden lg:block absolute cursor-pointer"
                style={{ top: feature.top, left: feature.left }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Pulse */}
                <span className="absolute -inset-2.5 rounded-full bg-secondary/30 animate-pulse opacity-40" />
                {/* Dot */}
                <span className="relative block w-4 h-4 rounded-full bg-secondary border-2 border-white shadow-lg" />

                {/* Desktop hover card */}
                <div
                  className={`absolute z-30 w-72 p-4 rounded-xl border border-secondary/20 bg-card shadow-[0_8px_32px_-8px_hsl(0,0%,0%,0.15)] transition-all duration-200 ${
                    feature.cardSide === "left" ? "right-8 top-1/2 -translate-y-1/2" : "left-8 top-1/2 -translate-y-1/2"
                  } ${activeFeature === feature.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-display text-base font-medium text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/tablet: static cards below shoe */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="p-4 rounded-xl border bg-card border-border/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-display text-base font-medium text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom two cards - diagonal overlap */}
        <div className="relative flex flex-col md:flex-row md:items-stretch gap-4 md:gap-0">
          {/* APMA Card - left */}
          <div className="diagonal-card-left relative md:w-[54%] bg-card border border-border/40 rounded-2xl p-6 sm:p-8 z-20 shadow-[4px_0_16px_-4px_hsl(0,0%,0%,0.06)]">
            <div className="md:pr-12">
              <p className="font-display text-base sm:text-lg font-medium text-foreground uppercase tracking-wide">
                Đạt chứng nhận APMA
              </p>
              <p className="text-xs text-muted-foreground font-medium mb-2">
                American Podiatric Medical Association
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Giày Kinis Lucy đã đạt chứng nhận từ APMA (Hiệp Hội Y Học Bàn Chân Hoa Kỳ). Đây là "tiêu chuẩn vàng" toàn cầu xác nhận sản phẩm thúc đẩy sức khỏe bàn chân tự nhiên và bảo vệ cấu trúc xương.
              </p>
            </div>
          </div>

          {/* Ecosystem Card - right */}
          <div className="diagonal-card-right relative md:w-[54%] md:-ml-[8%] bg-card border border-secondary/20 rounded-2xl p-6 sm:p-8 z-10">
            <div className="md:pl-12">
              <p className="font-display text-base sm:text-lg font-medium text-foreground uppercase tracking-wide">
                Nằm trong hệ sinh thái Kinis
              </p>
              <p className="text-xs text-secondary font-semibold mb-2">
                Chăm sóc sức khỏe vận động toàn diện
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hơn 1 đôi giày, Kinis mang đến cho bạn giải pháp toàn diện — Công cụ kiểm tra thăng bằng Kinis BalancePro tích hợp AI, được APTA khuyến nghị sử dụng trong khám lâm sàng và hệ thống bài tập cá nhân hóa cải thiện cùng giày Kinis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKinisDifferent;
