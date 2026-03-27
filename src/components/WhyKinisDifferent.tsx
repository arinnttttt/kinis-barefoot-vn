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
    top: "68%",
    left: "72%",
    cardSide: "right" as const,
  },
  {
    id: "no-arch",
    icon: Bone,
    label: "Không hỗ trợ vòm nhân tạo",
    description:
      'Điều này cho phép các nhóm cơ nội tại và xương bàn chân "thức tỉnh", từ đó hỗ trợ cải thiện cấu trúc vòm chân theo thời gian, đặc biệt là người có bàn chân bẹt.',
    top: "38%",
    left: "78%",
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
          {/* Feature cards - left side (desktop) */}
          <div className="hidden lg:flex flex-col gap-4 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[105%] w-72">
            {features.filter(f => f.cardSide === "left").map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-card border-secondary/30 shadow-[0_8px_32px_-8px_hsl(var(--secondary)/0.2)]"
                      : "bg-card/50 border-border/50 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-display text-sm font-bold text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Feature cards - right side (desktop) */}
          <div className="hidden lg:flex flex-col gap-4 absolute right-0 top-1/2 -translate-y-1/2 translate-x-[105%] w-72">
            {features.filter(f => f.cardSide === "right").map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-card border-secondary/30 shadow-[0_8px_32px_-8px_hsl(var(--secondary)/0.2)]"
                      : "bg-card/50 border-border/50 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-display text-sm font-bold text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Shoe image with hotspots */}
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <img
              src={shoeImage}
              alt="Giày Kinis Barefoot với các đặc điểm thiết kế"
              className="w-full h-auto"
              loading="lazy"
              width={800}
              height={800}
            />

            {/* Hotspot dots */}
            {features.map((feature) => (
              <div
                key={feature.id}
                className="absolute group cursor-pointer"
                style={{ top: feature.top, left: feature.left }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Pulse */}
                <span
                  className={`absolute -inset-2.5 rounded-full bg-secondary/30 transition-opacity duration-300 ${
                    activeFeature === feature.id ? "animate-ping opacity-75" : "animate-pulse opacity-40"
                  }`}
                />
                {/* Dot */}
                <span className="relative block w-4 h-4 rounded-full bg-secondary border-2 border-white shadow-lg" />

                {/* Callout line (desktop) - hidden, the cards are always visible */}

                {/* Mobile tooltip */}
                <div
                  className={`lg:hidden absolute z-30 w-56 sm:w-64 p-3.5 rounded-xl border border-secondary/20 bg-card shadow-[0_8px_32px_-8px_hsl(0,0%,0%,0.15)] transition-all duration-200 ${
                    feature.cardSide === "left" ? "right-6 top-1/2 -translate-y-1/2" : "left-6 top-1/2 -translate-y-1/2"
                  } ${activeFeature === feature.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <feature.icon className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-display text-sm font-bold text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards (visible below shoe on smaller screens) */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="p-4 rounded-xl border bg-card border-border/50"
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-display text-sm font-bold text-foreground">{feature.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* APMA Card */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
            <img
              src={apmaBadge}
              alt="APMA Seal of Acceptance"
              className="h-16 sm:h-20 shrink-0"
              loading="lazy"
            />
            <div>
              <p className="font-display text-base sm:text-lg font-bold text-foreground uppercase tracking-wide">
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

          {/* Ecosystem Card */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
            <img
              src={appMockup}
              alt="Kinis BalancePro App"
              className="h-28 sm:h-32 shrink-0 object-contain"
              loading="lazy"
            />
            <div>
              <p className="font-display text-base sm:text-lg font-bold text-foreground uppercase tracking-wide">
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
