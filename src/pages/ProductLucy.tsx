import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";
import lucyImage from "@/assets/product-lucy.jpg";

const specs = [
  "Chất liệu EVA cao cấp + TPU ổn định",
  "Hỗ trợ vòm chân 3 điểm",
  "Lớp đệm hấp thụ chấn động",
  "Công nghệ thoáng khí kháng khuẩn",
  "Phù hợp: gym, fitness, chạy bộ nhẹ",
  "Size: 36–45",
];

const ProductLucy = () => (
  <Layout>
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-muted animate-fade-up">
            <img src={lucyImage} alt="Kinis Lucy" className="w-full h-full object-cover" />
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <span className="text-sm font-display font-semibold text-secondary uppercase tracking-wider">Sản phẩm</span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Kinis Lucy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Được thiết kế cho những người yêu vận động — Kinis Lucy mang đến sự hỗ trợ vòm chân hoàn hảo, giúp bạn tập luyện thoải mái hơn và giảm thiểu chấn thương.
            </p>

            <ul className="mt-8 space-y-3">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Liên hệ mua hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductLucy;
