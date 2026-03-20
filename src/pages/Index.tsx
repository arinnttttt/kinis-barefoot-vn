import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

const Index = () => {
  const [activeTab, setActiveTab] = useState<ProductKey>("lucy");
  const product = products[activeTab];

  return (
    <Layout>
      {/* ===== SECTION 1: HERO BANNER ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[hsl(var(--nav))]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kinis shoes"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0_0%_0%/0.88)] via-[hsl(0_0%_0%/0.55)] to-[hsl(0_0%_0%/0.3)]" />
          {/* Subtle orange glow */}
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
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-body font-semibold text-sm rounded-xl hover:brightness-110 transition-all"
              >
                Tìm hiểu giày Kinis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/khoa-hoc"
                className="inline-flex items-center gap-2 px-7 py-3.5 glass-card rounded-xl text-[hsl(var(--nav-foreground))] font-body font-semibold text-sm hover:text-secondary transition-colors"
              >
                Thông tin khoa học
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: SẢN PHẨM (Tab Switcher) ===== */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground uppercase tracking-tight">
              Sản phẩm
            </h2>
          </motion.div>

          {/* Folder-style Tab Switcher */}
          <div className="flex justify-center mb-0">
            <div className="relative inline-flex items-end gap-0">
              {(["lucy", "nomad"] as ProductKey[]).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-10 md:px-14 py-3.5 font-body font-semibold text-sm md:text-base transition-all duration-200 rounded-t-2xl border border-b-0 ${
                      isActive
                        ? "bg-[hsl(0_0%_100%/0.7)] backdrop-blur-xl border-[hsl(0_0%_0%/0.08)] text-foreground z-10 shadow-[0_-4px_20px_-4px_hsl(0_0%_0%/0.08)]"
                        : "bg-[hsl(0_0%_100%/0.25)] backdrop-blur-md border-[hsl(0_0%_0%/0.04)] text-muted-foreground hover:bg-[hsl(0_0%_100%/0.4)] hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-indicator"
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-secondary"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    {products[key].label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Glass content panel */}
          <div className="rounded-2xl rounded-tl-none border border-[hsl(0_0%_0%/0.06)] bg-[hsl(0_0%_100%/0.5)] backdrop-blur-xl shadow-[0_8px_32px_-8px_hsl(0_0%_0%/0.08)] p-8 md:p-12">

          {/* Product Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Text side */}
              <div className="order-2 lg:order-1">
                {/* Badge */}
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

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full glass-light text-sm font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={product.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
                >
                  Xem Chi Tiết
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image side */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden aspect-square"
                >
                  <img
                    src={product.image}
                    alt={product.label}
                    className="w-full h-full object-cover"
                  />
                  {/* Glass overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[hsl(0_0%_0%/0.5)] to-transparent">
                    <span className="font-display text-xl font-bold text-[hsl(var(--nav-foreground))]">
                      {product.label}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
