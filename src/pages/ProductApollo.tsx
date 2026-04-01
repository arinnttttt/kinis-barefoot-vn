import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";

const apolloImage = "https://kinis.vn/wp-content/uploads/2026/04/kinis-apollo.png";

const specs = [
  "Đế zero-drop tối ưu cho bài tập compound",
  "Chất liệu upper thoáng khí, bền bỉ",
  "Lớp đế ngoài cao su bám sàn vượt trội",
  "Thiết kế wide toe-box cho sự ổn định",
  "Phù hợp: HIIT, CrossFit, Weightlifting",
  "Size: 36–46",
];

const ProductApollo = () => (
  <Layout>
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-muted animate-fade-up">
            <img src={apolloImage} alt="Kinis Apollo" className="w-full h-full object-cover" />
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <span className="text-xs sm:text-sm font-display font-semibold text-secondary uppercase tracking-wider">Sản phẩm</span>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Kinis Apollo
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Được thiết kế dành riêng cho những buổi tập luyện cường độ cao — Kinis Apollo kết hợp triết lý barefoot với công nghệ hỗ trợ vận động, giúp bạn tối ưu hiệu suất trong mọi bài tập.
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3">
              {specs.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground">{s}</span>
                </li>
              ))}
            </ul>

            <button className="btn-primary-dark mt-8 sm:mt-10 w-full sm:w-auto px-8 py-3.5 font-body font-semibold text-sm sm:text-base rounded-xl" style={{ backgroundColor: "hsl(0,0%,10%)", color: "#ffffff" }}>
              Liên hệ mua hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductApollo;
