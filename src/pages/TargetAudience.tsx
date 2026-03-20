import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { ArrowRight, Check } from "lucide-react";
import gymImage from "@/assets/gym-fitness.jpg";
import runnerImage from "@/assets/runner.jpg";
import flatFeetImage from "@/assets/flat-feet.jpg";

interface TargetPageProps {
  variant: "gym" | "runner" | "flat-feet";
}

const data = {
  gym: {
    title: "Người luyện tập Gym / Fitness",
    subtitle: "Tối ưu hiệu suất — bảo vệ bàn chân trong mỗi buổi tập",
    image: gymImage,
    intro: "Khi tập gym, bàn chân chịu áp lực lớn từ các bài squat, deadlift hay chạy trên máy. Lót giày Kinis hỗ trợ vòm chân và ổn định tư thế, giúp bạn tập hiệu quả hơn.",
    benefits: [
      "Ổn định bàn chân khi nâng tạ nặng",
      "Giảm mỏi chân sau buổi tập kéo dài",
      "Hỗ trợ vòm chân, cải thiện tư thế squat",
      "Lớp đệm hấp thụ chấn động khi nhảy",
    ],
    product: { name: "Kinis Lucy", href: "/san-pham/lucy" },
  },
  runner: {
    title: "Người chạy bộ",
    subtitle: "Mỗi bước chạy đều được bảo vệ",
    image: runnerImage,
    intro: "Chạy bộ tạo lực va chạm gấp 2-3 lần trọng lượng cơ thể lên bàn chân. Kinis giúp hấp thụ chấn động và ổn định bàn chân, giảm nguy cơ chấn thương phổ biến như viêm cân gan chân.",
    benefits: [
      "Hấp thụ lực va chạm khi tiếp đất",
      "Ngăn hiện tượng sụp vòm (overpronation)",
      "Giảm nguy cơ viêm cân gan chân",
      "Thoáng khí, không gây hầm bí",
    ],
    product: { name: "Kinis Lucy", href: "/san-pham/lucy" },
  },
  "flat-feet": {
    title: "Người bàn chân bẹt",
    subtitle: "Giải pháp hỗ trợ vòm chân từ khoa học",
    image: flatFeetImage,
    intro: "Bàn chân bẹt (flat feet) khiến áp lực phân bổ không đều, gây đau gót, đau đầu gối và mỏi lưng. Lót giày Kinis với thiết kế hỗ trợ vòm chân giúp khắc phục vấn đề này.",
    benefits: [
      "Nâng đỡ vòm chân, cải thiện tư thế đi đứng",
      "Giảm đau gót chân và đầu gối",
      "Phân bổ áp lực đều trên toàn bàn chân",
      "Sử dụng được hàng ngày, không cần kê đơn",
    ],
    product: { name: "Kinis Lucy", href: "/san-pham/lucy" },
  },
};

const TargetAudience = ({ variant }: TargetPageProps) => {
  const d = data[variant];

  return (
    <Layout>
      <PageHero title={d.title} subtitle={d.subtitle} image={d.image} />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12 animate-fade-in">
            {d.intro}
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border animate-fade-up">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-card-foreground mb-5 sm:mb-6">Lợi ích khi sử dụng Kinis</h3>
            <ul className="space-y-3 sm:space-y-4">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm sm:text-base text-card-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 sm:mt-10 text-center animate-fade-up [animation-delay:200ms]">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Sản phẩm phù hợp cho bạn:</p>
            <a
              href={d.product.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-secondary-foreground font-body font-semibold text-sm sm:text-base rounded-xl hover:opacity-90 transition-opacity"
            >
              {d.product.name} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TargetAudience;
