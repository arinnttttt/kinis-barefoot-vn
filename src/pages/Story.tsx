import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import storyImage from "@/assets/story.jpg";

const milestones = [
  { year: "2022", title: "Ý tưởng ra đời", desc: "Xuất phát từ nỗi đau chân khi luyện tập, nhóm sáng lập quyết định tạo ra giải pháp lót giày khoa học." },
  { year: "2023", title: "Nghiên cứu & Phát triển", desc: "Hợp tác với các chuyên gia sinh cơ học để thiết kế cấu trúc lót giày tối ưu." },
  { year: "2024", title: "Ra mắt Kinis Lucy", desc: "Sản phẩm đầu tiên được giới thiệu, nhận phản hồi tích cực từ cộng đồng thể thao." },
  { year: "2025", title: "Kinis Nomad", desc: "Mở rộng dòng sản phẩm với Kinis Nomad dành cho dân phiêu lưu." },
];

const Story = () => (
  <Layout>
    <PageHero title="Câu chuyện của chúng tôi" subtitle="Từ ý tưởng đến sản phẩm — hành trình nâng niu bàn chân Việt" image={storyImage} />

    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground leading-relaxed mb-16"
        >
          Kinis ra đời từ một câu hỏi đơn giản: "Tại sao chúng ta đầu tư vào giày nhưng lại quên đi phần quan trọng nhất — lót giày?" Chúng tôi tin rằng một đôi lót giày tốt có thể thay đổi cách bạn vận động, tập luyện và sinh hoạt hàng ngày.
        </motion.p>

        <div className="space-y-12">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="font-display text-xl font-bold text-secondary">{m.year}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{m.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Story;
