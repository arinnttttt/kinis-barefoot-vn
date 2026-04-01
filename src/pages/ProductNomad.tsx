import Layout from "@/components/layout/Layout";
import { Check, Footprints, Activity, Brain } from "lucide-react";
import nomadImage from "@/assets/product-nomad.jpg";

const specs = [
  "Chất liệu Ortholite® chống mỏi",
  "Đế cứng TPU chống xoắn",
  "Lớp gel hấp thụ chấn động vùng gót",
  "Chống nước, khô nhanh",
  "Phù hợp: trekking, hiking, du lịch",
  "Size: 36–46",
];

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
    {/* Hero Section */}
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <div className="absolute inset-0">
        <img
          src={nomadImage}
          alt="Kinis Nomad"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3))" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-5" style={{ backgroundColor: "rgba(249,115,22,0.15)", color: "hsl(27,100%,52%)" }}>
            Kinis Nomad
          </span>
          <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
            Giày tập luyện chân trần chuyên nghiệp
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]" style={{ color: "#ffffff" }}>
            Đánh thức
            <br />
            <span style={{ color: "hsl(27,100%,52%)" }}>sức mạnh</span> đôi chân
          </h1>
          <div className="mt-8 sm:mt-10">
            <a
              href="#why-nomad"
              className="btn-primary-orange inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl"
              style={{ backgroundColor: "hsl(27,100%,52%)", color: "#ffffff" }}
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Why Kinis Nomad Section */}
    <section id="why-nomad" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "hsl(0,0%,10%)" }}>
            Tại sao bạn cần <span style={{ color: "hsl(27,100%,52%)" }}>Kinis Nomad</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(0,0%,40%)" }}>
            Được thiết kế dựa trên khoa học bàn chân, Kinis Nomad là giải pháp giúp đôi chân vận động đúng cơ chế tự nhiên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 sm:p-8 animate-fade-up"
              style={{
                animationDelay: `${i * 100}ms`,
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(249,115,22,0.1)" }}>
                <b.icon className="w-6 h-6" style={{ color: "hsl(27,100%,52%)" }} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2" style={{ color: "hsl(0,0%,10%)" }}>
                {b.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(0,0%,40%)" }}>
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-body font-medium uppercase tracking-wider" style={{ color: "hsl(0,0%,55%)" }}>
          Sản phẩm nhập khẩu chính hãng từ Hoa Kỳ
        </p>
      </div>
    </section>

    {/* Product Specs Section */}
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-muted animate-fade-up">
            <img src={nomadImage} alt="Kinis Nomad" className="w-full h-full object-cover" />
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <span className="text-xs sm:text-sm font-display font-semibold uppercase tracking-wider" style={{ color: "hsl(27,100%,52%)" }}>
              Thông số kỹ thuật
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "hsl(0,0%,10%)" }}>
              Chi tiết sản phẩm
            </h2>

            <ul className="mt-6 sm:mt-8 space-y-3">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(249,115,22,0.1)" }}>
                    <Check className="w-3 h-3" style={{ color: "hsl(27,100%,52%)" }} />
                  </div>
                  <span className="text-sm sm:text-base" style={{ color: "hsl(0,0%,20%)" }}>{s}</span>
                </li>
              ))}
            </ul>

            <button
              className="btn-primary-dark mt-8 sm:mt-10 w-full sm:w-auto px-8 py-3.5 font-body font-semibold text-sm sm:text-base rounded-xl"
              style={{ backgroundColor: "hsl(0,0%,10%)", color: "#ffffff" }}
            >
              Liên hệ mua hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductNomad;
