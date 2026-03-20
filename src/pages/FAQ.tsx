import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Giày barefoot là gì",
    faqs: [
      { q: "Kinis có phải là thương hiệu giày không?", a: "Không hẳn. Kinis là hệ sinh thái chăm sóc sức khỏe vận động dựa trên chỉ số thăng bằng tiên phong tại Việt Nam, với nền tảng khoa học về sự vận động và đội ngũ chuyên môn đến từ Hoa Kỳ. Hệ sinh thái bao gồm Kinis AI Việt Nam (công cụ kiểm tra chỉ số thăng bằng tích hợp AI) và Kinis Barefoot Shoes (dòng giày giúp bàn chân trở về trạng thái tự nhiên)." },
      { q: "Giày barefoot Kinis là giày gì?", a: 'Giày barefoot Kinis là dòng sản phẩm được phát triển dựa trên triết lý "barefoot" (giày mang cảm giác như đi chân trần), được thiết kế để bàn chân vận động gần với trạng thái tự nhiên nhất, giúp cải thiện cảm nhận mặt đất, thăng bằng và tư thế khi di chuyển hằng ngày.' },
      { q: "Giày barefoot Kinis khác gì giày thông thường?", a: "Giày barefoot Kinis khác biệt ở 4 yếu tố chính:\n• Đế phẳng (zero-drop): gót và mũi bằng nhau, không ảnh hưởng dáng đi tự nhiên.\n• Mũi giày rộng (wide toe box): ngón chân xòe tự nhiên, khác với giày truyền thống bó hẹp.\n• Đế mỏng, linh hoạt: cảm nhận mặt đất tốt hơn nhưng vẫn bảo vệ bàn chân.\n• Không hỗ trợ vòm nhân tạo: khuyến khích cơ bàn chân hoạt động tự nhiên." },
      { q: "Giày barefoot Kinis có phải là giày y tế không?", a: "Không. Giày barefoot Kinis không phải giày điều trị hay chữa bệnh, mà là giày hỗ trợ vận động tự nhiên và sức khỏe bàn chân khi sử dụng đúng cách." },
      { q: "Giày Kinis có được thiết kế dựa trên khoa học không?", a: "Có. Giày Kinis Barefoot được thiết kế dựa trên nguyên lý khoa học về cơ sinh học (biomechanics) và cấu trúc bàn chân, nhằm hỗ trợ chuyển động tự nhiên, cải thiện chỉ số thăng bằng và cảm nhận mặt đất tốt hơn. Thiết kế zero-drop, mũi giày rộng và đế linh hoạt giúp bàn chân hoạt động đúng chức năng vốn có." },
    ],
  },
  {
    category: "Cách làm quen với giày barefoot",
    faqs: [
      { q: "Mất bao lâu để làm quen với giày barefoot?", a: "Thời gian thích nghi từ 3–6 tháng tùy vào cơ thể mỗi người. Sau thời gian thích nghi, bạn sẽ cảm nhận được thay đổi tích cực: chuyển động tự nhiên hơn, cảm nhận mặt đất tốt hơn, cải thiện thăng bằng." },
      { q: "Giày barefoot Kinis Nomad cần thời gian thích nghi như thế nào?", a: "Kinis đề xuất lộ trình thích nghi:\n\n🔹 Giai đoạn 1 (1–2 tuần): Mang 30–60 phút/ngày, sử dụng trong hoạt động nhẹ.\n🔹 Giai đoạn 2 (1–2 tuần tiếp): Tăng lên 1–2 giờ/ngày, bắt đầu tập luyện nhẹ.\n🔹 Giai đoạn 3 (sau 1–2 tháng): Mang thường xuyên hơn, kết hợp tập luyện đa dạng.\n\nNếu bạn mới chuyển từ giày truyền thống, nên làm quen trước với Kinis Lucy." },
      { q: "Có dấu hiệu nào cho thấy bàn chân đang thích nghi tốt?", a: "Bạn sẽ cảm nhận: căng nhẹ ở lòng bàn chân, cổ chân, bắp chân; cảm giác mỏi cơ nhưng giảm dần sau vài ngày. Đây là dấu hiệu hoàn toàn bình thường.\n\nTuy nhiên, nếu bạn cảm thấy đau nhói, đau tăng dần, đau cố định hoặc đau buổi sáng khi bước xuống giường, nên giảm thời gian đi giày hoặc tạm ngưng." },
      { q: "Giày barefoot Kinis có thoải mái ngay từ lần đầu mang không?", a: "Tùy thuộc vào tình trạng mỗi người. Nếu đã quen với giày barefoot, bạn sẽ cảm thấy thoải mái ngay. Nếu chưa từng đi giày barefoot, cần thời gian thích nghi tối đa 6 tháng." },
    ],
  },
  {
    category: "Giày Kinis phù hợp với ai",
    faqs: [
      { q: "Giày barefoot Kinis phù hợp cho ai?", a: "Giày barefoot Kinis phù hợp cho:\n• Người đi bộ nhiều, đứng nhiều\n• Người muốn cải thiện thăng bằng và tư thế\n• Người mới bắt đầu quan tâm đến triết lý barefoot\n• Người tập luyện, vận động nhẹ đến trung bình\n• Người trung niên muốn vận động an toàn" },
      { q: "Những người nào không phù hợp mang giày barefoot Kinis?", a: "Kinis không khuyến khích trong các trường hợp sau (nên tham vấn bác sĩ trước):\n• Chấn thương cấp tính ở bàn chân, cổ chân, gân Achilles\n• Viêm gan bàn chân (plantar fasciitis) giai đoạn đau nhiều\n• Thoái hóa khớp nặng, biến dạng bàn chân nghiêm trọng\n• Mới phẫu thuật hoặc đang trong giai đoạn phục hồi y khoa" },
      { q: "Người lớn tuổi có phù hợp đi giày barefoot Kinis không?", a: "Hoàn toàn phù hợp. Giày barefoot Kinis giúp:\n• Cải thiện thăng bằng nhờ ngón chân xòe rộng và phân bổ trọng lượng tốt hơn\n• Tăng cường sức mạnh bàn chân và mắt cá chân\n• Cải thiện tư thế, giảm căng thẳng lên các chi dưới\n• Tăng cảm nhận môi trường, kích hoạt cảm giác từ chân truyền lên não bộ\n\nTuy nhiên, tùy thể trạng mỗi người để có thời gian làm quen phù hợp." },
      { q: "Bàn chân bẹt có mang được giày Kinis không?", a: "Có. Giày barefoot Kinis có thể hỗ trợ quá trình cải thiện bàn chân bẹt nhờ thiết kế không đệm nâng đỡ, mũi giày rộng và vừa vặn tự nhiên. Tuy nhiên:\n• Giày Kinis là sản phẩm hỗ trợ, không thay thế điều trị y tế.\n• Với bàn chân bẹt nặng hoặc liên quan bệnh lý khác, cần tham khảo ý kiến bác sĩ." },
    ],
  },
  {
    category: "Câu hỏi về Kinis Nomad",
    faqs: [
      { q: "Kinis Nomad là dòng giày gì?", a: "Kinis Nomad là dòng giày barefoot kiểu mẫu với thiết kế zero-drop, mũi giày rộng, nhẹ, tối giản, phù hợp sử dụng trong luyện tập thể thao, tập gym, yoga." },
      { q: "Giày Kinis Nomad có thể dùng để chạy bộ không?", a: "Kinis Nomad không phải giày chạy bộ chuyên dụng. Đây là mẫu giày phù hợp để luyện tập thể dục, leo núi, hiking, tập gym, yoga/pilates. Kinis không khuyến khích sử dụng để chạy bộ đường dài hoặc chạy tốc độ cao khi chưa thích nghi." },
      { q: "Có thể dùng Nomad thay cho vớ/tất khi tập gym không?", a: "Hoàn toàn được. Kinis Nomad được thiết kế để sử dụng thay cho vớ/tất khi tập gym, mang lại cảm giác gần như đi chân trần nhưng vẫn đảm bảo vệ sinh và an toàn. Đế mỏng zero-drop và mũi giày rộng giúp bàn chân tiếp đất tự nhiên, ổn định khi squat, deadlift." },
      { q: "Đế giày Nomad mỏng có đảm bảo độ bền không?", a: "Có. Đế Kinis Nomad được làm từ chất liệu cao su bền và linh hoạt, chịu lực tốt, không bị rách dễ dàng trong sử dụng hàng ngày và tập luyện trong phòng gym. Với điều kiện tập luyện bình thường, Nomad đảm bảo độ bền và bảo vệ cho bàn chân." },
    ],
  },
  {
    category: "Câu hỏi về Kinis Lucy",
    faqs: [
      { q: "Kinis Lucy có phải là giày barefoot không?", a: "Kinis Lucy vẫn đảm bảo một số thiết kế điển hình của giày barefoot (đế phẳng, mũi giày rộng, không đệm gót), nhưng có tính ứng dụng cao và không cần thời gian thích nghi. Lucy dành cho người mới chuyển tiếp từ giày truyền thống sang giày barefoot." },
      { q: "Giày Kinis Lucy có chứng nhận y tế không?", a: "Có. Giày Kinis Lucy đạt chứng nhận APMA Seal of Acceptance (Hiệp Hội Y Khoa Chỉnh Hình Hoa Kỳ) — chứng minh thiết kế tôn trọng cấu trúc tự nhiên của bàn chân, hỗ trợ thăng bằng, phù hợp mang hằng ngày và giảm nguy cơ biến dạng ngón chân." },
      { q: "Giày Kinis Lucy có cần thời gian thích nghi không?", a: "Không. Bạn hoàn toàn sử dụng ngay mà không cần thời gian thích nghi. Kinis Lucy là dòng giày dành cho người mới bắt đầu chuyển tiếp từ giày truyền thống sang giày barefoot." },
      { q: "Giày Kinis Lucy có thể mang cả ngày không?", a: "Có. Kinis Lucy được thiết kế để đi cả ngày: đi làm, đi chơi, dạo phố cuối tuần, vẫn giữ sự thoải mái và tự nhiên cho bàn chân." },
    ],
  },
  {
    category: "Sử dụng và bảo quản",
    faqs: [
      { q: "Tôi có thể đặt mua giày Kinis ở đâu?", a: "Hiện tại Bye Beo là Nhà phân phối ĐỘC QUYỀN giày barefoot Kinis duy nhất tại Việt Nam. Bạn có thể mua trực tiếp giày Kinis tại Hệ sinh thái Bye Beo." },
      { q: "Vệ sinh giày Kinis như thế nào?", a: "Các mẫu giày Kinis (Nomad và Lucy) hoàn toàn có thể giặt tay hoặc giặt máy ở chế độ nhẹ, sau đó phơi khô tự nhiên. Không sử dụng máy sấy nhiệt độ cao để làm khô giày." },
      { q: "Làm sao hạn chế mùi khi mang giày barefoot Kinis?", a: "Giày Kinis được làm từ chất liệu vải chuyên biệt, có khả năng kháng khuẩn, hạn chế mùi. Để giày luôn sạch sẽ, bạn nên:\n• Phơi giày nơi thoáng khí sau khi sử dụng\n• Có thể dùng tất mỏng hoặc xịt khử mùi tự nhiên\n• Tránh mang liên tục nhiều giờ trong môi trường ẩm kín" },
      { q: "Khi nào nên thay một đôi giày barefoot Kinis?", a: "Thời gian sử dụng phụ thuộc tần suất và bề mặt dùng giày. Nên thay khi:\n• Đế mòn đáng kể làm giảm độ bám\n• Cảm giác bảo vệ giảm đáng kể\n• Dấu hiệu mất form dáng, rách" },
      { q: "Giày barefoot Kinis có giúp giảm đau lưng hoặc đau gối không?", a: "Trong nhiều trường hợp, giày barefoot có thể hỗ trợ giảm đau lưng và gối nhờ phân bổ trọng lượng đều hơn và cải thiện tư thế. Tuy nhiên, nếu bạn đang có vấn đề y khoa, hãy tham vấn bác sĩ trước khi sử dụng." },
    ],
  },
];

const FAQ = () => (
  <Layout>
    <PageHero title="Câu hỏi thường gặp" subtitle="Những thắc mắc phổ biến về giày barefoot và sản phẩm Kinis." />

    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto space-y-12">
        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx}>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-1 pb-4 border-b border-border">
              {cat.category}
            </h2>
            <Accordion type="single" collapsible className="space-y-3 mt-4">
              {cat.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`cat-${catIdx}-item-${i}`}
                  className="glass-light rounded-xl px-6 data-[state=open]:shadow-md transition-shadow border-0"
                >
                  <AccordionTrigger className="font-display text-left font-semibold text-card-foreground hover:text-secondary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 whitespace-pre-line">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default FAQ;
