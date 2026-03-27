import { ArrowRight } from "lucide-react";
import apmaBadge from "@/assets/apma-badge.png";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-person.jpg";
import lucyShowcase from "@/assets/lucy-showcase-v2.jpg";
import nomadShowcase from "@/assets/nomad-showcase-v2.jpg";
import FootAnatomyInteractive from "@/components/FootAnatomyInteractive";
import WhyKinisDifferent from "@/components/WhyKinisDifferent";

const products = {
  lucy: {
    label: "Kinis Lucy",
    badge: "Chứng nhận APMA",
    subtitle: "Giày đi bộ hàng ngày",
    description:
      "Kinis Lucy được thiết kế tối giản dựa trên khoa học bàn chân, phù hợp cho cuộc sống hàng ngày. Đây là sản phẩm trong Hệ sinh thái chăm sóc vận động bền vững Kinis, được Hiệp Hội Y Học Bàn Chân Hoa Kỳ (APMA) chứng nhận tốt cho sức khỏe bàn chân.",
    image: lucyShowcase,
    tags: ["Đi bộ", "Du lịch", "Sử dụng hàng ngày", "Cải thiện thăng bằng", "Bàn chân bẹt"],
    href: "/san-pham/lucy",
  },
  nomad: {
    label: "Kinis Nomad",
    badge: "Giày barefoot",
    subtitle: "Giày tập luyện chân trần",
    description:
      'Kinis Nomad là giày chân trần (barefoot) điển hình, giúp "đánh thức" sức mạnh cơ - xương - hệ thần kinh bản năng của đôi chân bạn. Đặc biệt phù hợp với người tập luyện, vận động viên chạy bộ và người có bàn chân bẹt.',
    image: nomadShowcase,
    tags: ["Tập gym", "Yoga/Pilates", "Bàn chân bẹt", "Tăng sức mạnh cơ chân"],
    href: "/san-pham/nomad",
  },
};

type ProductKey = keyof typeof products;
type Product = (typeof products)[ProductKey];

const ProductPanel = ({ product, tabKey }: { product: Product; tabKey: ProductKey }) => (
  <div
    className="product-tab-panel grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-8 items-center"
    role="tabpanel"
    id={`tabpanel-${tabKey}`}
    aria-labelledby={`product-tab-label-${tabKey}`}
    data-tab-content={tabKey}
  >
    <div className="order-2 md:order-1">
      {/* Mobile: badge + text inline | Tablet+Desktop: badge on top, text below */}
      {tabKey === 'lucy' && (
        <div className="flex flex-row-reverse md:flex-col justify-between md:justify-start items-center md:items-start gap-3 mb-3 md:mb-4 lg:mb-3">
          <img src={apmaBadge} alt="Chứng nhận APMA" className="h-10 md:h-12 lg:h-12 shrink-0" />
          <div>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider" style={{ color: "hsl(0,0%,40%)" }}>
              {product.subtitle}
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-3xl font-semibold" style={{ color: "hsl(0,0%,10%)" }}>
              {product.label}
            </h3>
          </div>
        </div>
      )}
      {tabKey !== 'lucy' && (
        <div className="mb-3 md:mb-4 lg:mb-3">
          <p className="text-xs md:text-sm font-medium uppercase tracking-wider" style={{ color: "hsl(0,0%,40%)" }}>
            {product.subtitle}
          </p>
          <h3 className="font-display text-2xl md:text-3xl lg:text-3xl font-semibold" style={{ color: "hsl(0,0%,10%)" }}>
            {product.label}
          </h3>
        </div>
      )}

      <p className="leading-relaxed text-sm md:text-base lg:text-base mb-4 md:mb-4 lg:mb-3" style={{ color: "hsl(0,0%,40%)" }}>
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-1.5 mb-5 md:mb-5 lg:mb-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5 rounded-full text-xs md:text-sm lg:text-sm font-medium"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "inset -1px -2px 6px 0 rgba(255,118,12,0.20)",
              color: "hsl(0,0%,10%)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={product.href}
        className="btn-primary-dark inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-7 lg:py-3 font-body font-semibold text-sm md:text-base lg:text-sm rounded-xl"
        style={{
          backgroundColor: "hsl(0,0%,10%)",
          color: "#ffffff",
        }}
      >
        Xem Chi Tiết
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>

    <div className="order-1 md:order-2">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[4/5] lg:aspect-[5/4]">
        <img src={product.image} alt={product.label} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
          <span className="font-display text-lg md:text-xl font-bold" style={{ color: "#ffffff" }}>
            {product.label}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  const lucy = products.lucy;
  const nomad = products.nomad;

  return (
    <Layout>
      <section className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kinis shoes"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.55), rgba(0,0,0,0.3))" }} />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ backgroundColor: "rgba(249,115,22,0.1)" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-20 w-full">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.05] uppercase" style={{ color: "#ffffff" }}>
              Đánh thức
              <br />
              <span className="text-gradient">sức mạnh</span>
              <br />
              bàn chân Việt
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
              Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/#/san-pham/lucy"
                className="btn-primary-orange inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl"
                style={{ backgroundColor: "hsl(27,100%,52%)", color: "#ffffff" }}
              >
                Tìm hiểu giày Kinis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#/khoa-hoc"
                className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 glass-card rounded-xl font-body font-semibold text-sm sm:text-base"
                style={{ color: "#ffffff" }}
              >
                Thông tin khoa học
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-8 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,98%)", isolation: "isolate" }} aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="products-heading" className="sr-only">Sản phẩm giày Kinis</h2>
          <div className="product-tabs relative" data-component="tabs">
            <input
              id="product-tab-lucy"
              type="radio"
              name="product-tabs"
              className="product-tab-input"
              data-tab-control="lucy"
              defaultChecked
            />
            <input
              id="product-tab-nomad"
              type="radio"
              name="product-tabs"
              className="product-tab-input"
              data-tab-control="nomad"
            />

             <div
              className="relative z-20 flex justify-center gap-1"
              data-tabs-labels
              role="tablist"
              aria-label="Sản phẩm Kinis"
            >
              <label
                id="product-tab-label-lucy"
                htmlFor="product-tab-lucy"
                className="product-tab-trigger px-8 py-3 sm:px-10 sm:py-3.5 font-body text-sm font-semibold md:px-14 md:text-base"
                data-tab-trigger="lucy"
                aria-controls="tabpanel-lucy"
              >
                {lucy.label}
              </label>
              <label
                id="product-tab-label-nomad"
                htmlFor="product-tab-nomad"
                className="product-tab-trigger px-8 py-3 sm:px-10 sm:py-3.5 font-body text-sm font-semibold md:px-14 md:text-base"
                data-tab-trigger="nomad"
                aria-controls="tabpanel-nomad"
              >
                {nomad.label}
              </label>
            </div>

            <div
              className="product-tabs-panel-container relative z-10 -mt-px overflow-hidden rounded-2xl p-4 sm:p-6 md:p-8 lg:p-5"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                backgroundColor: "rgba(255,255,255,0.5)",
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              data-tabs-panels
            >
              <ProductPanel product={lucy} tabKey="lucy" />
              <ProductPanel product={nomad} tabKey="nomad" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-10 lg:px-6" style={{ backgroundColor: "hsl(0,0%,98%)", isolation: "isolate" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight text-center mb-8 sm:mb-10" style={{ color: "hsl(0,0%,10%)" }}>
            Đánh thức <span style={{ color: "hsl(27,100%,52%)" }}>sức mạnh bản năng</span> của bàn chân
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
            {/* Interactive image side */}
            <FootAnatomyInteractive />

            {/* Text side */}
            <div className="flex flex-col justify-center space-y-4 text-base sm:text-lg lg:text-lg leading-relaxed" style={{ color: "hsl(0,0%,40%)" }}>
              <p>
                Mọi chuyển động của cơ thể đều bắt đầu từ bàn chân.
              </p>
              <p>
                Bàn chân được cấu tạo từ <strong style={{ color: "hsl(0,0%,10%)" }}>26 xương</strong>, <strong style={{ color: "hsl(0,0%,10%)" }}>33 khớp</strong> và hơn <strong style={{ color: "hsl(0,0%,10%)" }}>200.000 đầu dây thần kinh</strong>.
                Với cấu trúc như vậy, bàn chân có đủ khả năng nâng đỡ toàn bộ cơ thể — nếu được hoạt động tự nhiên.
                Nhưng trong nhiều năm, chúng ta đã quen với những đôi giày đệm dày khiến bàn chân dần mất đi khả năng vận động tự nhiên ấy.
              </p>
              <div className="my-4 py-4 px-5 sm:px-6 rounded-2xl" style={{ background: "linear-gradient(to bottom right, rgba(249,115,22,0.15), rgba(249,115,22,0.05))", boxShadow: "0 4px 24px -4px rgba(249,115,22,0.15)" }}>
                <p className="font-body text-base sm:text-lg lg:text-xl font-medium leading-snug" style={{ color: "hsl(0,0%,10%)" }}>
                  Kinis ra đời từ ý tưởng đơn giản:
                </p>
                <p className="font-display text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed mt-1.5" style={{ color: "hsl(27,100%,52%)" }}>
                  Hãy để bàn chân trở về với cấu trúc nguyên bản và vận động tự nhiên của mình.
                </p>
              </div>
              <p>
                Kinis phát triển những đôi giày tối giản (minimalist) giúp bạn cảm nhận mặt đất chân thật,
                kích hoạt nhóm cơ bàn chân và xây dựng một nền tảng chuyển động khỏe mạnh theo thời gian.
                Bởi vì khi bàn chân khỏe, mọi chuyển động của cơ thể cũng trở nên tự nhiên và mạnh mẽ hơn.
              </p>
            </div>
          </div>

          <blockquote className="mt-8 sm:mt-10 text-center">
            <p className="font-display text-base sm:text-xl lg:text-xl italic leading-relaxed lg:whitespace-nowrap" style={{ color: "hsl(0,0%,40%)" }}>
              "Bàn chân con người là một kiệt tác — vừa hoàn hảo về cấu trúc, vừa mang vẻ đẹp của nghệ thuật."
            </p>
            <p className="mt-2 text-sm font-body font-semibold" style={{ color: "rgba(102,102,102,0.7)" }}>
              — Leonardo Da Vinci
            </p>
          </blockquote>
        </div>
      </section>
      <WhyKinisDifferent />
    </Layout>
  );
};

export default Index;