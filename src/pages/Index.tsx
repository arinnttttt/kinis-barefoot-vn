import { ArrowRight } from "lucide-react";
import apmaBadge from "@/assets/apma-badge.png";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-person.jpg";
import lucyShowcase from "@/assets/lucy-showcase.jpg";
import nomadShowcase from "@/assets/nomad-showcase.jpg";

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
        <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-3 mb-3 md:mb-4 lg:mb-3">
          <img src={apmaBadge} alt="Chứng nhận APMA" className="h-10 md:h-12 lg:h-12 shrink-0" />
          <div>
            <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {product.subtitle}
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-3xl font-semibold text-foreground">
              {product.label}
            </h3>
          </div>
        </div>
      )}
      {tabKey !== 'lucy' && (
        <div className="mb-3 md:mb-4 lg:mb-3">
          <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {product.subtitle}
          </p>
          <h3 className="font-display text-2xl md:text-3xl lg:text-3xl font-semibold text-foreground">
            {product.label}
          </h3>
        </div>
      )}

      <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-base mb-4 md:mb-4 lg:mb-3">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-1.5 mb-5 md:mb-5 lg:mb-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5 rounded-full bg-white shadow-[inset_-1px_-2px_6px_0_rgba(255,118,12,0.20)] text-xs md:text-sm lg:text-sm font-medium text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={product.href}
        className="inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 lg:px-7 lg:py-3 bg-primary text-primary-foreground font-body font-semibold text-sm md:text-base lg:text-sm rounded-xl hover:opacity-90 transition-opacity"
      >
        Xem Chi Tiết
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>

    <div className="order-1 md:order-2">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[4/5] lg:aspect-[5/4]">
        <img src={product.image} alt={product.label} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[hsl(0_0%_0%/0.5)] to-transparent">
          <span className="font-display text-lg md:text-xl font-bold text-[hsl(var(--nav-foreground))]">
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
      <section className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden bg-[hsl(var(--nav))]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kinis shoes"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0_0%_0%/0.88)] via-[hsl(0_0%_0%/0.55)] to-[hsl(0_0%_0%/0.3)]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-20 w-full">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold text-[hsl(var(--nav-foreground))] tracking-tight leading-[1.05] uppercase">
              Đánh thức
              <br />
              <span className="text-gradient">sức mạnh</span>
              <br />
              bàn chân Việt
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[hsl(var(--nav-foreground))]/65 leading-relaxed max-w-lg">
              Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/san-pham/lucy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-secondary text-secondary-foreground font-body font-semibold text-sm sm:text-base rounded-xl hover:brightness-110 transition-all"
              >
                Tìm hiểu giày Kinis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/khoa-hoc"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 glass-card rounded-xl text-[hsl(var(--nav-foreground))] font-body font-semibold text-sm sm:text-base hover:text-secondary transition-colors"
              >
                Thông tin khoa học
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-8 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
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
              className="product-tabs-panel-container relative z-10 -mt-px overflow-hidden rounded-2xl border border-[hsl(0_0%_0%/0.06)] bg-[hsl(0_0%_100%/0.5)] p-4 sm:p-6 shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.08)] backdrop-blur-xl md:p-8 lg:p-5"
              data-tabs-panels
            >
              <ProductPanel product={lucy} tabKey="lucy" />
              <ProductPanel product={nomad} tabKey="nomad" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
