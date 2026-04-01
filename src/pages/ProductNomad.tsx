import Layout from "@/components/layout/Layout";
import { Footprints, Activity, Brain, Shield, Feather, Wind, SprayCan, Check } from "lucide-react";
import nomadImage from "@/assets/kinis-nomad.png";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: Footprints,
    title: "Kích hoạt sức mạnh bàn chân",
    description:
      "Thiết kế zero-drop hay đế phẳng, giúp cơ bàn chân hoạt động tự nhiên, tăng cường sức mạnh nội tại của cơ chân theo thời gian.",
  },
  {
    icon: Activity,
    title: "Hiệu chỉnh dáng đi và tư thế",
    description:
      "Đế phẳng giúp cơ thể tự căn chỉnh tư thế đứng và di chuyển đúng sinh cơ học.",
  },
  {
    icon: Brain,
    title: "Tăng cường cảm nhận mặt đất",
    description:
      "Đế mỏng truyền tải tín hiệu từ mặt đất, nâng cao khả năng thăng bằng và phản xạ.",
  },
];

const ProductNomad = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
  <Layout>
    {/* Hero Section - White, 2 columns */}
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-12 sm:py-16 lg:py-20">
          {/* Text column */}
          <div className="animate-fade-up">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-5"
              style={{ backgroundColor: "hsl(27 100% 52% / 0.12)", color: "hsl(27,100%,52%)" }}
            >
              Kinis Nomad
            </span>
            <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3 text-muted-foreground">
              Giày tập luyện chân trần chuyên nghiệp
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
              Đánh thức
              <br />
              <span style={{ color: "hsl(27,100%,52%)" }}>sức mạnh</span> đôi chân
            </h1>
            <div className="mt-8 sm:mt-10">
              <a
                href="https://kinis.vn/san-pham/nomad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "hsl(27,100%,52%)" }}
              >
                Mua ngay
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="flex items-center justify-center animate-fade-up [animation-delay:150ms]">
            <img
              src={nomadImage}
              alt="Kinis Nomad"
              className="w-full max-w-xl lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Why Kinis Nomad Section */}
    <section id="why-nomad" className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tại sao bạn cần <span style={{ color: "hsl(27,100%,52%)" }}>Kinis Nomad</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Được thiết kế dựa trên khoa học bàn chân, Kinis Nomad là giải pháp giúp đôi chân vận động đúng cơ chế tự nhiên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 sm:p-8 bg-card border border-border animate-fade-up"
              style={{
                animationDelay: `${i * 100}ms`,
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                <b.icon className="w-6 h-6" style={{ color: "hsl(27,100%,52%)" }} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground">
                {b.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(220 60% 95%), hsl(0 0% 100%), hsl(0 80% 95%))",
              border: "1px solid hsl(220 40% 85%)",
            }}
          >
            <span className="text-3xl">🇺🇸</span>
            <span className="text-sm font-body font-semibold uppercase tracking-wider" style={{ color: "hsl(220,50%,30%)" }}>
              Sản phẩm nhập khẩu chính hãng từ Hoa Kỳ
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Technology Section - White & Clean */}
    <section ref={sectionRef} className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video 360° */}
          <div className="flex items-center justify-center animate-fade-up">
            <video
              ref={videoRef}
              className="w-full max-w-md object-contain"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
              <source src="https://kinis.vn/wp-content/uploads/2026/04/nomad-180-rotate.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text content */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(27,100%,52%)" }}>
              Công nghệ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Công nghệ vật liệu
              <br />
              <span style={{ color: "hsl(27,100%,52%)" }}>đột phá</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Kinis Nomad sử dụng 100% sợi kỹ thuật Honeywell Spectra® – loại sợi siêu cường lực thường được sử dụng trong áo chống đạn và thiết bị bảo hộ cao cấp.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                { icon: Shield, text: "Vải siêu bền và chống mài mòn" },
                { icon: Feather, text: "Độ đàn hồi cao – ôm chân như 'làn da thứ hai'" },
                { icon: Wind, text: "Nhẹ và thoáng khí – mang lại cảm giác tự do" },
                { icon: SprayCan, text: "Kháng khuẩn – kiểm soát mùi khi tập luyện" },
              ].map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                    <item.icon className="w-5 h-5" style={{ color: "hsl(27,100%,52%)" }} />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Adaptation Roadmap Section - Dark */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(27,100%,52%)" }}>
            Lộ trình thích nghi
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Giày Kinis Nomad giúp bàn chân mạnh hơn
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(0,0%,65%)" }}>
            Nhưng cần thời gian thích nghi. Hãy kiên nhẫn theo lộ trình 3–6 tháng mà Kinis gợi ý.
          </p>
        </div>

        {/* Progress Steps - cards with integrated progress */}
        <div className="max-w-4xl mx-auto">
          {/* Progress line connecting cards */}
          <div className="hidden md:flex items-center justify-center mb-6 px-12">
            <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: "hsl(27,100%,52%)" }} />
            <div className="w-3 h-3 rounded-full mx-1" style={{ backgroundColor: "hsl(27,100%,52%)" }} />
            <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: "hsl(27,90%,46%)" }} />
            <div className="w-3 h-3 rounded-full mx-1" style={{ backgroundColor: "hsl(27,90%,46%)" }} />
            <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: "hsl(27,80%,40%)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                time: "Tuần 1 – 2",
                subtitle: "Làm quen",
                tasks: ["Mang 1–2 giờ mỗi ngày", "Tránh tập nặng hoặc vận động cường độ cao"],
                accent: "hsl(27,100%,52%)",
              },
              {
                time: "Tuần 3 – 4",
                subtitle: "Cảm nhận",
                tasks: ["Bắt đầu các bài tập nhẹ", "Làm quen với cảm giác tiếp đất"],
                accent: "hsl(27,90%,46%)",
              },
              {
                time: "Sau 1 – 2 tháng",
                subtitle: "Bứt phá",
                tasks: ["Có thể sử dụng như giày tập chính", "Đôi chân thích nghi hoàn toàn"],
                accent: "hsl(27,80%,40%)",
              },
            ].map((stage, i) => (
              <div
                key={stage.time}
                className="rounded-xl overflow-hidden animate-fade-up"
                style={{
                  animationDelay: `${i * 100}ms`,
                  backgroundColor: "hsl(0,0%,10%)",
                  border: "1px solid hsl(0,0%,18%)",
                }}
              >
                {/* Top accent bar with number */}
                <div className="flex items-center gap-3 px-5 py-3" style={{ backgroundColor: stage.accent }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ backgroundColor: "hsla(0,0%,100%,0.25)", color: "#fff" }}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white leading-tight">{stage.time}</p>
                    <p className="text-xs text-white/80">{stage.subtitle}</p>
                  </div>
                </div>
                {/* Tasks */}
                <div className="p-5">
                  <ul className="space-y-2.5">
                    {stage.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: stage.accent }} />
                        <span className="text-sm" style={{ color: "hsl(0,0%,65%)" }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Care note */}
        <p className="text-center text-sm mt-10 sm:mt-12 max-w-2xl mx-auto animate-fade-up" style={{ color: "hsl(0,0%,55%)" }}>
          ⚡ Có thể giặt máy (sử dụng túi giặt) và phơi khô tự nhiên để giữ độ bền của giày.
        </p>
      </div>
    </section>
  </Layout>
  );
};

export default ProductNomad;
