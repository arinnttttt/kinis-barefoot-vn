import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import scienceImage from "@/assets/science-foot.jpg";

const principles = [
  {
    title: "Hỗ trợ vòm chân 3 điểm",
    desc: "Thiết kế dựa trên cấu trúc giải phẫu bàn chân, hỗ trợ vòm dọc trong, vòm dọc ngoài và vòm ngang — giúp phân bổ áp lực đều.",
  },
  {
    title: "Hấp thụ chấn động",
    desc: "Lớp EVA mật độ kép hấp thụ lực va chạm khi tiếp đất, giảm áp lực lên khớp gối và cột sống.",
  },
  {
    title: "Ổn định sinh cơ học",
    desc: "Khung TPU cứng ở phần giữa chân ngăn hiện tượng sụp vòm (overpronation), giữ bàn chân ở tư thế trung tính.",
  },
  {
    title: "Phản hồi năng lượng",
    desc: "Cấu trúc đàn hồi trả lại năng lượng cho mỗi bước chân, giúp giảm mệt mỏi khi vận động kéo dài.",
  },
];

const Science = () => (
  <Layout>
    <PageHero title="Khoa học đằng sau Kinis" subtitle="Dựa trên nghiên cứu sinh cơ học (biomechanics) và giải phẫu bàn chân" image={scienceImage} />

    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="p-5 sm:p-6 md:p-8 rounded-2xl glass-light animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 sm:mb-4">
                <span className="font-display text-base sm:text-lg font-bold text-secondary">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-card-foreground">{p.title}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Science;
