import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import nomadImage from "@/assets/product-nomad.jpg";

const specs = [
  "Chất liệu Ortholite® chống mỏi",
  "Đế cứng TPU chống xoắn",
  "Lớp gel hấp thụ chấn động vùng gót",
  "Chống nước, khô nhanh",
  "Phù hợp: trekking, hiking, du lịch",
  "Size: 36–46",
];

const ProductNomad = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-muted"
          >
            <img src={nomadImage} alt="Kinis Nomad" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-sm font-display font-semibold text-primary uppercase tracking-wider">Sản phẩm</span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Kinis Nomad
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Dành cho những tâm hồn phiêu lưu — Kinis Nomad được tối ưu cho địa hình gồ ghề, bảo vệ bàn chân trong mọi cuộc hành trình.
            </p>

            <ul className="mt-8 space-y-3">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Liên hệ mua hàng
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductNomad;
