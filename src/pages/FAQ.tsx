import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Kinis phù hợp với loại giày nào?", a: "Kinis được thiết kế để phù hợp với hầu hết các loại giày thể thao, giày chạy bộ, giày trekking và giày hàng ngày. Bạn chỉ cần tháo lót giày cũ và thay thế bằng Kinis." },
  { q: "Tôi nên chọn size như thế nào?", a: "Kinis có bảng size từ 36–46. Bạn chọn theo size giày hiện tại. Nếu nằm giữa hai size, hãy chọn size lớn hơn và cắt theo đường hướng dẫn." },
  { q: "Lót giày Kinis có bền không?", a: "Với cách sử dụng bình thường, lót giày Kinis có thể sử dụng từ 6–12 tháng. Đối với vận động viên chuyên nghiệp, chúng tôi khuyến nghị thay mới mỗi 4–6 tháng." },
  { q: "Kinis có giúp chữa bàn chân bẹt không?", a: "Kinis là sản phẩm hỗ trợ, không phải thiết bị y tế. Tuy nhiên, thiết kế hỗ trợ vòm chân 3 điểm giúp cải thiện đáng kể tình trạng bàn chân bẹt và giảm đau hiệu quả." },
  { q: "Tôi có thể giặt lót giày Kinis không?", a: "Có, bạn có thể giặt tay nhẹ nhàng với nước ấm và xà phòng. Để khô tự nhiên, tránh phơi trực tiếp dưới ánh nắng mặt trời hoặc sấy máy." },
  { q: "Kinis Lucy và Kinis Nomad khác nhau như thế nào?", a: "Kinis Lucy được thiết kế cho vận động trong nhà và tập luyện hàng ngày, với lớp đệm mềm hơn. Kinis Nomad được tối ưu cho địa hình gồ ghề, có đế cứng hơn và chống nước." },
  { q: "Tôi mua Kinis ở đâu?", a: "Hiện tại bạn có thể liên hệ trực tiếp qua website hoặc các kênh social media của chúng tôi để đặt hàng. Chúng tôi đang mở rộng kênh phân phối." },
];

const FAQ = () => (
  <Layout>
    <PageHero title="Câu hỏi thường gặp" subtitle="Giải đáp mọi thắc mắc về sản phẩm Kinis" />

    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow">
              <AccordionTrigger className="font-display text-left font-semibold text-card-foreground hover:text-secondary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQ;
