import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
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
    className="product-tab-panel grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    role="tabpanel"
    id={`tabpanel-${tabKey}`}
    aria-labelledby={`product-tab-label-${tabKey}`}
    data-tab-content={tabKey}
  >
    <div className="order-2 lg:order-1">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
        <Award className="w-4 h-4 text-secondary" />
        <span className="text-xs font-bold text-secondary uppercase tracking-wider">
          {product.badge}
        </span>
      </div>

      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
        {product.subtitle}
      </p>

      <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-5">
        {product.label}
      </h3>

      <p className="text-muted-foreground leading-relaxed text-base mb-8">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 rounded-full bg-[hsl(0_0%_100%/0.5)] backdrop-blur-md border border-[hsl(0_0%_0%/0.06)] shadow-[0_2px_8px_-2px_hsl(0_0%_0%/0.06)] text-sm font-medium text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={product.href}
        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-xl hover:opacity-90 transition-opacity"
      >
        Xem Chi Tiết
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

    <div className="order-1 lg:order-2">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
        <img src={product.image} alt={product.label} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0_0%_0%/0.5)] to-transparent">
          <span className="font-display text-xl font-bold text-[hsl(var(--nav-foreground))]">
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(var(--nav))]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kinis shoes"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0_0%_0%/0.88)] via-[hsl(0_0%_0%/0.55)] to-[hsl(0_0%_0%/0.3)]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-semibold text-[hsl(var(--nav-foreground))] tracking-tight leading-[1.05] uppercase">
              Đánh thức
              <br />
              <span className="text-gradient">sức mạnh</span>
              <br />
              bàn chân Việt
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[hsl(var(--nav-foreground))]/65 leading-relaxed max-w-lg">
              Khôi phục cơ chế sinh học và vận động tự nhiên của bàn chân
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/san-pham/lucy"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-semibold text-base rounded-xl hover:brightness-110 transition-all"
              >
                Tìm hiểu giày Kinis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/khoa-hoc"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-xl text-[hsl(var(--nav-foreground))] font-body font-semibold text-base hover:text-secondary transition-colors"
              >
                Thông tin khoa học
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background overflow-hidden">
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
              className="relative z-20 flex justify-center"
              data-tabs-labels
              role="tablist"
              aria-label="Sản phẩm Kinis"
            >
              <label
                id="product-tab-label-lucy"
                htmlFor="product-tab-lucy"
                className="product-tab-trigger px-10 py-3.5 font-body text-sm font-semibold md:px-14 md:text-base"
                data-tab-trigger="lucy"
                aria-controls="tabpanel-lucy"
              >
                {lucy.label}
              </label>
              <label
                id="product-tab-label-nomad"
                htmlFor="product-tab-nomad"
                className="product-tab-trigger px-10 py-3.5 font-body text-sm font-semibold md:px-14 md:text-base"
                data-tab-trigger="nomad"
                aria-controls="tabpanel-nomad"
              >
                {nomad.label}
              </label>
            </div>

            <div
              className="relative z-10 -mt-px overflow-hidden rounded-2xl border border-[hsl(0_0%_0%/0.06)] bg-[hsl(0_0%_100%/0.5)] p-8 shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.08)] backdrop-blur-xl md:p-12"
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
