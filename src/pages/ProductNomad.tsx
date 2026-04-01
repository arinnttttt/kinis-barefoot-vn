import Layout from "@/components/layout/Layout";
import { Footprints, Activity, Brain, Shield, Feather, Wind, SprayCan, Check } from "lucide-react";
import nomadImage from "@/assets/kinis-nomad.png";

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

const ProductNomad = () => (
  <Layout>
    {/* Hero Section - White, 2 columns */}
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[60vh] py-16 sm:py-20 lg:py-24">
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
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Why Kinis Nomad Section */}
    <section id="why-nomad" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up">
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
            <span className="text-xl">🇺🇸</span>
            <span className="text-sm font-body font-semibold uppercase tracking-wider" style={{ color: "hsl(220,50%,30%)" }}>
              Sản phẩm nhập khẩu chính hãng từ Hoa Kỳ
            </span>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductNomad;
