import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Footprints } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-insoles.jpg";
import lucyImage from "@/assets/product-lucy.jpg";
import nomadImage from "@/assets/product-nomad.jpg";

const features = [
  { icon: Shield, title: "Bảo vệ bàn chân", desc: "Hỗ trợ vòm chân, giảm áp lực lên gót và mũi chân" },
  { icon: Zap, title: "Hiệu suất tối ưu", desc: "Tăng cường phản hồi năng lượng cho mỗi bước di chuyển" },
  { icon: Footprints, title: "Phù hợp mọi đối tượng", desc: "Từ vận động viên đến người có vấn đề bàn chân bẹt" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative hero-dark overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Kinis Insoles" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground tracking-tight leading-[1.1]">
            Nâng niu<br />
            <span className="text-gradient">mỗi bước chân</span>
          </h1>
          <p className="mt-6 text-lg text-secondary-foreground/70 leading-relaxed">
            Lót giày công nghệ cao Kinis — được thiết kế dựa trên khoa học sinh cơ học, mang đến sự thoải mái và bảo vệ tối ưu cho đôi chân của bạn.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/san-pham/lucy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              Khám phá sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/khoa-hoc"
              className="inline-flex items-center gap-2 px-6 py-3 border border-secondary-foreground/20 text-secondary-foreground font-display font-semibold text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Tìm hiểu khoa học
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Sản phẩm của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Kinis Lucy", desc: "Dành cho vận động & tập luyện hàng ngày", img: lucyImage, href: "/san-pham/lucy" },
            { name: "Kinis Nomad", desc: "Dành cho phiêu lưu & khám phá", img: nomadImage, href: "/san-pham/nomad" },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to={p.href} className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-card-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                    Xem chi tiết <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-dark section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
          Sẵn sàng trải nghiệm sự khác biệt?
        </h2>
        <p className="text-secondary-foreground/60 text-lg mb-8">
          Tìm hiểu sản phẩm Kinis phù hợp nhất với bạn
        </p>
        <Link
          to="/san-pham/lucy"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Bắt đầu ngay <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
