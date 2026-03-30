import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Kinis có phải là thương hiệu giày không?",
    a: "Không hẳn. Kinis là hệ sinh thái chăm sóc sức khỏe vận động dựa trên chỉ số thăng bằng tiên phong tại Việt Nam, với nền tảng khoa học về sự vận động, đội ngũ chuyên môn đến từ Hoa Kỳ và đón đầu công nghệ AI. Hiện tại hệ sinh thái bao gồm Kinis AI Việt Nam và Kinis Barefoot Shoes.",
  },
  {
    q: "Giày barefoot Kinis khác gì giày thông thường?",
    a: "Giày barefoot Kinis khác biệt ở 4 yếu tố chính: Đế phẳng (zero-drop) giúp gót và mũi bằng nhau; Mũi giày rộng cho ngón chân xòe tự nhiên; Đế mỏng, linh hoạt mang lại cảm giác chân trần; Không hỗ trợ vòm nhân tạo, khuyến khích cơ bàn chân hoạt động tự nhiên.",
  },
  {
    q: "Giày barefoot Kinis có phải là giày y tế không?",
    a: "Không. Giày barefoot Kinis không phải giày điều trị hay chữa bệnh, mà là giày hỗ trợ vận động tự nhiên và sức khỏe bàn chân khi sử dụng đúng cách.",
  },
  {
    q: "Giày Kinis phù hợp cho ai?",
    a: "Giày barefoot Kinis phù hợp cho người đi bộ nhiều, đứng nhiều; người muốn cải thiện thăng bằng & tư thế; người mới bắt đầu quan tâm đến triết lý barefoot; người tập luyện nhẹ đến trung bình; và người trung niên muốn vận động an toàn.",
  },
  {
    q: "Giày Kinis Nomad có thể dùng để chạy bộ không?",
    a: "Giày barefoot Kinis Nomad không phải giày chạy bộ chuyên dụng. Đây là mẫu giày phù hợp để luyện tập thể dục - thể thao, leo núi, hiking, tập gym, tập yoga/pilates. Kinis không khuyến khích sử dụng để chạy bộ đường dài khi chưa thích nghi với barefoot.",
  },
  {
    q: "Kinis Lucy có phải là giày barefoot không?",
    a: "Không hẳn. Kinis Lucy vẫn đảm bảo thiết kế điển hình của giày barefoot (đế phẳng, mũi giày rộng, không đệm gót), nhưng có tính ứng dụng cao và không cần thời gian thích nghi. Kinis Lucy dành cho người mới chuyển tiếp từ giày truyền thống sang giày barefoot.",
  },
  {
    q: "Tôi có thể đặt mua giày Kinis ở đâu?",
    a: "Hiện tại Bye Beo là Nhà phân phối ĐỘC QUYỀN giày barefoot Kinis duy nhất tại Việt Nam. Bạn có thể mua trực tiếp giày Kinis tại Hệ sinh thái Bye Beo.",
  },
  {
    q: "Vệ sinh giày Kinis như thế nào?",
    a: "Các mẫu giày Kinis gồm Kinis Nomad và Kinis Lucy hoàn toàn có thể giặt tay hoặc giặt máy ở chế độ nhẹ, sau đó phơi khô tự nhiên. Không sử dụng máy sấy nhiệt độ cao để làm khô giày.",
  },
];

const FAQItem = ({ item, isOpen, onToggle }: { item: typeof faqs[number]; isOpen: boolean; onToggle: () => void }) => (
  <div
    className="border-b transition-colors"
    style={{ borderColor: "hsl(0,0%,90%)" }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4 group"
    >
      <span
        className="font-body text-sm sm:text-base font-semibold leading-snug"
        style={{ color: "hsl(0,0%,15%)" }}
      >
        {item.q}
      </span>
      <ChevronDown
        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        style={{ color: "hsl(0,0%,45%)" }}
      />
    </button>
    <div
      className="overflow-hidden transition-all duration-300"
      style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
    >
      <p
        className="pb-4 sm:pb-5 text-sm sm:text-[15px] leading-relaxed pr-8"
        style={{ color: "hsl(0,0%,45%)" }}
      >
        {item.a}
      </p>
    </div>
  </div>
);

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "hsl(0,0%,100%)" }}
      aria-labelledby="home-faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2
            id="home-faq-heading"
            className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight mb-3"
            style={{ color: "hsl(0,0%,10%)" }}
          >
            Câu hỏi{" "}
            <span style={{ color: "hsl(27,100%,52%)" }}>thường gặp</span>
          </h2>
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: "hsl(0,0%,50%)" }}
          >
            Giải đáp nhanh những thắc mắc phổ biến nhất về giày barefoot Kinis
          </p>
        </div>

        {/* FAQ grid - 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
          <div>
            {faqs.slice(0, 4).map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div>
            {faqs.slice(4).map((item, i) => (
              <FAQItem
                key={i + 4}
                item={item}
                isOpen={openIndex === i + 4}
                onToggle={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/faq"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-primary-orange inline-flex items-center gap-2 font-body font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-colors"
            style={{ backgroundColor: "hsl(27,100%,52%)", color: "#fff" }}
          >
            Xem tất cả câu hỏi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
