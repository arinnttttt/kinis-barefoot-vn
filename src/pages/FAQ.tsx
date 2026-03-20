import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Thông tin chung về brand Kinis",
    faqs: [
      { q: "Kinis có phải là thương hiệu giày không?", a: "Không hẳn. Kinis là hệ sinh thái chăm sóc sức khỏe vận động dựa trên chỉ số thăng bằng tiên phong tại Việt Nam, với nền tảng khoa học về sự vận động, đội ngũ chuyên môn đến từ Hoa Kỳ và đón đầu công nghệ AI. Hiện tại hệ sinh thái chăm sóc sức khỏe vận động Kinis bao gồm:\n- Kinis AI Việt Nam: Công cụ kiểm tra chỉ số thăng bằng tích hợp AI tiên phong tại Việt Nam, được cá nhân hóa dựa trên cơ sở khoa học và chuyên môn vật lý trị liệu đến từ Đội ngũ Chuyên gia Hoa Kỳ.\n- Kinis Barefoot Shoes: Dòng giày cho người bàn chân bẹt, giúp bàn chân trở về trạng thái tự nhiên – cân bằng – khỏe mạnh, giảm rủi ro vận động về lâu dài." },
      { q: "Triết lý hoạt động của Kinis Barefoot là gì?", a: "Kinis tin rằng, bàn chân con người là một cấu trúc hoàn hảo của tự nhiên, được sinh ra để cảm nhận, thích nghi và tự cân bằng. Kinis không sửa chữa cơ thể con người, mà trả lại cho cơ thể cách vận động mà nó vốn sinh ra để làm, với mẫu giày barefoot kiểu mẫu, giúp:\n- Giảm thiểu tối đa sự can thiệp của giày vào đôi bàn chân vốn dĩ đã có cấu tạo hoàn hảo để thích ứng với môi trường xung quanh\n- Trả lại cho bàn chân khả năng cảm nhận – thích nghi – tự cân bằng mà nó vốn có\n- Giúp cơ thể vận động đúng cách, thay vì che giấu vấn đề bằng đệm dày hay hỗ trợ nhân tạo" },
      { q: "Vì sao chuyển động tự nhiên (natural movement) lại quan trọng?", a: "Chuyển động tự nhiên (natural movement) là cách cơ thể di chuyển đúng với cơ chế sinh học vốn có, nơi bàn chân, cơ bắp, khớp và hệ thần kinh phối hợp nhịp nhàng mà không bị ép buộc hay can thiệp quá mức bởi giày dép, thiết bị hoặc thói quen sai.\nKinis lấy chuyển động tự nhiên làm nền tảng để thiết kế mẫu giày barefoot đảm bảo:\n- Giúp phân bổ trọng lực cơ thể hiệu quả và giảm áp lực lên các khớp xương vận động.\n- Cải thiện thăng bằng và khả năng kiểm soát cơ thể\n- Kích hoạt cơ bàn chân và cơ lõi đúng vai trò\n- Là nền tảng cho vận động an toàn và bền vững lâu dài" },
      { q: "Vì sao Kinis đặt sức khỏe bàn chân lên hàng đầu?", a: "Kinis tin rằng, bàn chân là nền móng của mọi chuyển động. Khi nền móng khỏe, các khớp phía trên như gối, hông và cột sống mới hoạt động ổn định và bền vững." },
      { q: "Giày Kinis có được thiết kế dựa trên khoa học hay nghiên cứu không?", a: "Giày Kinis Barefoot được thiết kế dựa trên nguyên lý khoa học về cơ sinh học (biomechanics) và cấu trúc bàn chân, nhằm hỗ trợ chuyển động tự nhiên, cải thiện chỉ số thăng bằng và cảm nhận mặt đất tốt hơn. Đồng thời, thiết kế zero-drop, mũi giày rộng và đế linh hoạt - điển hình của dòng giày barefoot sẽ giúp bàn chân hoạt động đúng chức năng vốn có.\nTóm lại, giày barefoot Kinis không phải là giày thể thao thông thường mà là sản phẩm dựa trên nguyên tắc vận động tự nhiên (natural movement) và nghiên cứu về khoa học trong biomechanics (cơ học chuyển động) để mang đến trải nghiệm \"như đi chân trần\", đưa bàn chân về đúng chức năng vốn có của nó." },
    ],
  },
  {
    category: "Thông tin chung về Kinis Barefoot",
    faqs: [
      { q: "Giày barefoot Kinis là giày gì?", a: "Giày barefoot Kinis là một dòng sản phẩm được phát triển dựa trên triết lý \"barefoot\" (giày mang cảm giác như đi chân trần), được thiết kế để bàn chân vận động gần với trạng thái tự nhiên nhất, giúp cải thiện cảm nhận mặt đất, thăng bằng và tư thế khi di chuyển hằng ngày." },
      { q: "Giày barefoot Kinis có phải giày minimalist không?", a: "Có. Giày barefoot Kinis có thể xem là một trong những nhóm giày minimalist, được thiết kế để mô phỏng cảm giác đi chân trần và cho phép bàn chân vận động tự nhiên nhất có thể." },
      { q: "Giày barefoot Kinis khác gì giày thông thường?", a: "Giày barefoot nói chung và giày barefoot Kinis nói riêng khác rất nhiều so với giày thông thường bạn hay đi hàng ngày. Nổi bật nhất để phân biệt cơ bản giày barefoot và giày thông thường có thể dựa vào 4 yếu tố:\n- Đế phẳng (zero-drop): gót và mũi bằng nhau không làm ảnh hưởng đến dáng đi và cấu trúc tự nhiên của bàn chân.\n- Mũi giày rộng (wide toe box): thiết kế giày barefoot có mũi giày rộng giúp ngón chân xòe tự nhiên, khác với giày truyền thống thường phần mũi bị bó hẹp lại.\n- Đế mỏng, linh hoạt: mang lại cảm giác như đi chân trần, giúp cảm nhận mặt đất tốt hơn nhưng vẫn đảm bảo giúp bạn tránh những vật cản gây tổn thương bàn chân.\n- Không hỗ trợ vòm nhân tạo ở phần gót chân: Điều này giúp khuyến khích cơ bàn chân hoạt động một cách linh hoạt ở trạng thái tự nhiên." },
      { q: "Giày barefoot Kinis có phải là một loại giày y tế không?", a: "Không. Giày barefoot Kinis không phải giày điều trị hay chữa bệnh, mà là giày hỗ trợ vận động tự nhiên và sức khỏe bàn chân khi sử dụng đúng cách." },
      { q: "Giày barefoot Kinis phù hợp cho ai?", a: "Là mẫu giày chăm sóc sức khỏe vận động một cách tự nhiên, giày barefoot Kinis phù hợp cho:\n- Người đi bộ nhiều, đứng nhiều\n- Người muốn cải thiện thăng bằng & tư thế\n- Người mới bắt đầu quan tâm đến triết lý \"barefoot\" và muốn bắt đầu thay thế giày truyền thống sang giày barefoot\n- Người tập luyện, vận động nhẹ đến trung bình\n- Người trung niên muốn vận động an toàn." },
      { q: "Giày barefoot Kinis có hiệu quả ngay từ lần đầu sử dụng không?", a: "Đối với người mới bắt đầu làm quen với giày barefoot thì cần thời gian thích ứng và cảm nhận. Thời gian làm quen giày tùy vào cơ thể của mỗi người. Thời gian thích nghi giày barefoot từ 3-6 tháng.\nSau thời gian thích nghi, bạn sẽ cảm nhận được thay đổi tích cực: cảm nhận được chuyển động tự nhiên của hệ vận động, cảm nhận được mặt đất tốt hơn, đồng thời cải thiện thăng bằng của bàn chân và cơ thể." },
      { q: "Những người nào không phù hợp mang giày barefoot Kinis?", a: "Kinis không khuyến khích những trường hợp này mang giày barefoot Kinis mà tốt nhất nên tham vấn bác sĩ hoặc chuyên gia vật lý trị liệu trước khi chuyển sang giày barefoot. Bao gồm:\n- Những người đang gặp chấn thương cấp tính ở bàn chân, cổ chân, gân Achilles\n- Những trường hợp bị viêm gan bàn chân (plantar fasciitis) giai đoạn đau nhiều\n- Người thoái hóa khớp nặng, biến dạng bàn chân nghiêm trọng\n- Người mới phẫu thuật hoặc đang trong giai đoạn phục hồi y khoa" },
    ],
  },
  {
    category: "Câu hỏi về giày barefoot Kinis Nomad",
    faqs: [
      { q: "Kinis Nomad là dòng giày gì?", a: "Kinis Nomad là dòng giày barefoot kiểu mẫu với thiết kế \"zero-drop\", mũi giày rộng, nhẹ, tối giản, phù hợp sử dụng trong luyện tập thể thao, tập gym, yoga." },
      { q: "Giày barefoot Kinis Nomad có thể dùng để chạy bộ không?", a: "Giày barefoot Kinis Nomad không phải giày chạy bộ chuyên dụng. Đây là mẫu giày phù hợp để luyện tập thể dục - thể thao, leo núi, hiking, tập gym, tập yoga/pilates.\nKinis không khuyến khích bạn sử dụng giày barefoot Kinis Nomad để chạy bộ đường dài hoặc chạy với tốc độ cao khi chưa thích nghi với barefoot." },
      { q: "Giày barefoot Kinis Nomad là giày nam hay nữ?", a: "Giày barefoot Kinis Nomad là loại giày unisex, phù hợp cho cả nam và nữ. Bạn có thể chọn lựa size và màu phù hợp một cách dễ dàng tại Hệ thống phân phối Bye Béo." },
      { q: "Điểm khác biệt giữa giày barefoot Kinis Nomad và các mẫu giày thông thường khác là gì?", a: "Giày barefoot Kinis Nomad là một mẫu giày barefoot điển hình, với thiết kế barefoot tối giản: zero-drop, đế linh hoạt, mũi giày rộng - giúp bàn chân chuyển động tự nhiên, linh hoạt, gia tăng cảm nhận với môi trường xung quanh, từ đó giúp đôi chân hoạt động đúng chức năng vốn có của nó." },
      { q: "Cách vệ sinh giày barefoot Kinis Nomad như thế nào?", a: "Giày barefoot Kinis Nomad RẤT DỄ VỆ SINH. Kinis Nomad được làm từ chất liệu chuyên biệt thoáng khí, bền bỉ, bạn có thể giặt tay và giặt máy ở chế độ nhẹ mà không ảnh hưởng đến chất lượng giày." },
      { q: "Giày barefoot Kinis Nomad cần thời gian làm quen và thích nghi không?", a: "Có. Vì là giày barefoot kiểu mẫu, nên giày barefoot Kinis Nomad cần thời gian để đôi chân thích nghi. Kinis đề xuất thời gian như sau:\n🔹 Giai đoạn 1 (kéo dài từ 1-2 tuần)\n- Mang 30–60 phút/ngày\n- Sử dụng trong các hoạt động nhẹ: đi bộ trong nhà, sinh hoạt hằng ngày\n🔹 Giai đoạn 2 (1-2 tuần tiếp theo)\n- Tăng thời gian lên 1–2 giờ/ngày\n- Bắt đầu sử dụng khi tập luyện nhẹ (yoga, pilates)\n🔹 Giai đoạn 3 (Sau 1–2 tháng)\n- Có thể mang thường xuyên hơn\n- Kết hợp tập luyện đa dạng hơn theo khả năng cá nhân\nLưu ý, thời gian thích nghi tùy vào mỗi người. Nếu bạn là người mới chuyển từ giày truyền thống sang giày barefoot, tốt nhất nên làm quen trước với mẫu giày Kinis Lucy." },
      { q: "Lưu ý gì khi sử dụng giày barefoot Kinis Nomad?", a: "Có 2 điểm cần lưu ý khi bạn sử dụng giày Nomad:\n- Cần thời gian để bàn chân thích nghi với thiết kế giày barefoot, tối đa 6 tháng.\n- Trên nền đất ướt, Kinis Nomad bị giảm khả năng bám dính." },
      { q: "Có dấu hiệu nào để biết được giày barefoot Kinis Nomad đang thích nghi tốt với bàn chân?", a: "Trong thời gian thích nghi từ giày thông thường sang giày barefoot Kinis Nomad, bạn sẽ cảm nhận những thay đổi của bàn chân như: căng nhẹ ở lòng bàn chân, cổ chân, bắp chân; cảm giác mỏi cơ nhưng giảm dần sau vài ngày. ĐÂY LÀ NHỮNG DẤU HIỆU HOÀN TOÀN BÌNH THƯỜNG, cho thấy chân của bạn đang dần thích ứng với giày barefoot Kinis Nomad.\nTuy nhiên, nếu bạn cảm thấy các cơn đau nhói, đau tăng dần, đau một điểm cố định, đau buổi sáng khi bước xuống giường thì tốt nhất nên giảm thời gian đi giày barefoot Kinis Nomad hoặc tạm ngưng một thời gian để chân hồi phục." },
      { q: "Tôi sử dụng giày barefoot Kinis Nomad thay cho vớ/tất khi đi tập gym được không?", a: "Hoàn toàn được. Giày barefoot Kinis Nomad được thiết kế để sử dụng thay cho vớ/tất khi tập gym, mang lại cảm giác gần như đi chân trần nhưng vẫn đảm bảo vệ sinh và an toàn. Phần đế mỏng zero-drop và mũi giày rộng giúp bàn chân tiếp đất tự nhiên, ổn định khi tập các bài tập như squat, deadlift.\nLưu ý: Nếu mới làm quen barefoot, hãy bắt đầu với thời gian và cường độ nhẹ để cơ thể thích nghi." },
      { q: "Đế giày barefoot Kinis Nomad mỏng như thế có đảm bảo độ bền không?", a: "Có. Đế của Kinis Nomad được thiết kế mỏng đúng chuẩn \"barefoot\" để mang lại cảm giác chân trần, nhưng vẫn được làm từ chất liệu cao su bền và linh hoạt giúp chịu lực tốt, không bị rách dễ dàng trong sử dụng hàng ngày và tập luyện trong phòng gym.\nTuy mỏng, nhưng độ bám và độ bền của đế giày barefoot Kinis Nomad vẫn phù hợp với các hoạt động thông thường.\nNhư mọi giày barefoot khác, nếu bạn thường xuyên tiếp xúc với bề mặt rất thô ráp hoặc vật sắc nhọn, độ mòn sẽ nhanh hơn — nhưng với điều kiện tập luyện bình thường, Kinis Nomad vẫn đảm bảo độ bền và bảo vệ cho bàn chân." },
    ],
  },
  {
    category: "Câu hỏi về giày đi bộ Kinis Lucy",
    faqs: [
      { q: "Kinis Lucy có phải là giày barefoot không?", a: "Không hẳn. Giày Kinis Lucy tuy vẫn đảm bảo một số thiết kế điển hình của một mẫu giày barefoot (đế phẳng, mũi giày rộng, không đệm giày ở gót), nhưng có tính ứng dụng cao và không cần thời gian thích nghi giống với các mẫu giày barefoot khác.\nNói cách khác, Kinis Lucy dành cho người mới chuyển tiếp từ việc đi giày truyền thống sang đi giày barefoot. Dù vậy, Kinis Lucy vẫn giúp:\n- Bàn chân chuyển động tự nhiên, tôn trọng cấu trúc nguyên bản của bàn chân\n- Gia tăng cảm nhận giữa bàn chân và môi trường xung quanh\n- Hỗ trợ thăng bằng và ổn định khi đi bộ\n- Không dùng hỗ trợ vòm nhân tạo để khuyến khích cơ bàn chân tự làm việc và mạnh lên theo thời gian\n- Giảm các nguy cơ chấn thương về chân do những nguyên nhân đến từ giày" },
      { q: "Giày Kinis Lucy có chứng nhận y tế hay chứng nhận về sức khỏe bàn chân không?", a: "Có. Giày Kinis Lucy đạt chứng nhận APMA Seal of Acceptance (chứng nhận có lợi cho sức khỏe bàn chân từ Hiệp Hội Y Khoa Chỉnh Hình Hoa Kỳ cấp (American Podiatric Medical Association).\nChứng nhận APMA là một bảo chứng khoa học, chứng minh về hiệu quả của giày Kinis Lucy đối với sức khỏe bàn chân, với các tiêu chí:\n- Thiết kế tôn trọng cấu trúc tự nhiên của bàn chân\n- Không ảnh hưởng đến dáng đi và tư thế\n- Hỗ trợ khả năng thăng bằng và ổn định khi đi bộ\n- Phù hợp để mang hằng ngày, lâu dài\n- Giảm nguy cơ các vấn đề thường gặp do giày mũi hẹp, đế cứng như biến dạng ngón chân cái." },
      { q: "Giày Kinis Lucy có phải là dành chuyên dụng để đi bộ?", a: "Đúng. Giày Kinis Lucy là giày chuyên dụng để đi bộ hàng ngày, đi bộ đường dài mà vẫn đảm bảo được \"sức khỏe bàn chân\", không gây đau nhức.\nBên cạnh đó, giày Kinis Lucy hoàn toàn phù hợp để sử dụng mang hàng ngày (đi học, đi làm), đặc biệt là những người thường xuyên làm việc/di chuyển ngoài trời cần một đôi giày nhẹ - thoáng khí." },
      { q: "Giày Kinis Lucy có cần thời gian làm quen và thích nghi không?", a: "Không. Bạn hoàn toàn sử dụng ngay mà không cần thời gian thích nghi. Bởi lẽ, giày Kinis Lucy là dòng giày dành cho người mới bắt đầu chuyển tiếp từ giày truyền thống sang giày barefoot." },
      { q: "Giày Kinis Lucy có hỗ trợ cải thiện chỉ số thăng bằng không?", a: "Có. Giày Kinis Lucy hỗ trợ cải thiện chỉ số thăng bằng của phần thân dưới và toàn bộ cơ thể, nhờ vào thiết kế 'zero-drop', mũi giày rộng và không có đệm mút nâng đỡ như giày truyền thống, điều này giúp bàn chân tăng cảm nhận mặt đất và kích hoạt cơ bàn chân tự nhiên hơn, từ đó cải thiện thăng bằng và kiểm soát chuyển động theo thời gian." },
      { q: "Giày Kinis Lucy phù hợp phong cách nào?", a: "Đây là mẫu giày có tính ứng dụng cao, bạn có thể sử dụng hàng ngày, mang đi làm, đi học đều được. Kinis Lucy đặc biệt thích hợp cho những người theo đuổi phong cách tối giản, năng động." },
      { q: "Giày Kinis Lucy có thể là giày sử dụng cả ngày không?", a: "Có. Kinis Lucy được thiết kế để đi cả ngày: đi làm – đi chơi – dạo phố cuối tuần, vẫn giữ sự thoải mái và tự nhiên cho bàn chân." },
    ],
  },
  {
    category: "Câu hỏi về cảm nhận và kỳ vọng",
    faqs: [
      { q: "Giày barefoot Kinis có thoải mái ngay từ lần đầu mang không?", a: "Điều này tùy thuộc vào tình trạng của mỗi người.\n- Nếu bạn đã làm quen với giày barefoot trước đó thì hoàn toàn cảm thấy thoải mái và linh hoạt ngay.\n- Còn nếu bạn chưa từng đi giày thiết kế barefoot trước đó, thì bạn cần thời gian để bàn chân thích nghi tối đa 6 tháng." },
      { q: "Giày Kinis có phù hợp cho vận động cường độ cao không?", a: "Hiện tại, Kinis Barefoot phân phối 2 dòng sản phẩm chính tại Hệ thống Bye Beo gồm: Kinis Nomad và Kinis Lucy.\n- Đối với dòng giày barefoot Kinis Nomad: Bạn có thể dùng tập gym, các bài tập huấn luyện chức năng hoặc tập yoga, pilates trong nhà.\n- Đối với dòng giày Kinis Lucy sẽ phù hợp đi bộ, sinh hoạt hằng ngày, đi làm, đi học, không khuyến khích sử dụng trong trường hợp vận động cao.\nNếu bạn muốn sử dụng giày barefoot Kinis chạy đường dài, tập luyện cường độ cao trong phòng gym thì bạn cần làm quen với giày barefoot ít nhất 6 tháng." },
      { q: "Giày barefoot Kinis có giúp giảm đau lưng hoặc đau gối không?", a: "Trong nhiều trường hợp, giày barefoot Kinis có thể hỗ trợ cải thiện tư thế và phân bổ lực tự nhiên, từ đó giúp giảm áp lực lên lưng và gối. Tuy nhiên, nếu cơn đau do chấn thương, bệnh lý hoặc sai lệch cấu trúc nghiêm trọng thì bạn nên kết hợp với tư vấn y tế hoặc giải pháp chuyên sâu hơn, bởi vì giày barefoot Kinis không phải là giày chuyên dụng trong y tế." },
      { q: "Tôi có thể mang giày barefoot Kinis cả ngày không?", a: "Hoàn toàn được nếu bạn đã thích nghi và hoàn toàn cảm thấy thoải mái khi mang giày barefoot Kinis.\nCòn nếu bạn là người mới tập mang giày barefoot, Kinis khuyến nghị dùng xen kẽ với giày khác trong giai đoạn đầu, sau đó tăng dần thời gian sử dụng để tránh quá tải cơ bàn chân." },
      { q: "Người lớn tuổi có phù hợp đi giày barefoot Kinis không?", a: "Hoàn toàn phù hợp. Giày barefoot Kinis có nhiều lợi ích phù hợp với người lớn tuổi:\n- Cải thiện thăng bằng: Giày barefoot Kinis cho phép ngón chân xòe rộng, tạo nền tảng vững chắc, giúp phân bổ trọng lượng tốt hơn, tăng cường sức mạnh cơ gấp ngón chân, rất quan trọng để duy trì thăng bằng, đặc biệt ở người trên 60 tuổi.\n- Tăng cường sức mạnh bàn chân & mắt cá chân: Giày barefoot Kinis cho phép chuyển động tự nhiên, giúp các cơ, gân và dây chằng hoạt động nhiều hơn.\n- Cải thiện tư thế: Giúp dáng đi tự nhiên hơn, giảm căng thẳng lên các chi dưới.\n- Tăng cảm nhận môi trường xung quanh, kích hoạt cảm giác từ chân truyền lên não bộ.\nTuy nhiên, tùy vào thể trạng của mỗi người để có thời gian làm quen và thích ứng với giày barefoot Kinis phù hợp." },
      { q: "Tôi bị bàn chân bẹt có thể mang giày barefoot Kinis được không?", a: "Có, bàn chân bẹt có thể mang giày barefoot Kinis, bởi vì giày barefoot không có đệm nâng đỡ, mũi giày rộng và thiết kế vừa vặn tự nhiên giúp hỗ trợ quá trình điều trị những vấn đề liên quan đến bàn chân như bàn chân bẹt, giảm tình trạng đau nhức, mất thăng bằng khi vận động.\nTUY NHIÊN, bạn cần lưu ý:\n- Giày barefoot Kinis không phải là giày chuyên dụng trong y tế.\n- Giày barefoot Kinis đóng vai trò là sản phẩm hỗ trợ, không phải là sản phẩm thay thế cho phương pháp điều trị về bệnh lý bàn chân bẹt nhẹ.\n- Đối với người có tình trạng bàn chân bẹt nặng và liên quan đến các bệnh lý khác, cần tham khảo ý kiến bác sĩ." },
      { q: "Tôi thường xuyên bị đau nhức chân thì dùng giày barefoot Kinis có đỡ hơn không?", a: "Trước tiên phải xác định nguyên nhân đau nhức đến từ đâu.\nNếu nguyên nhân đến từ giày truyền thống/giày cao gót quá chật gây đau/nhức, thì bạn hoàn toàn có thể cân nhắc chuyển sang giày barefoot Kinis để bàn chân có thể chuyển động tự nhiên (natural movement) vốn có, giúp tăng cường cơ bàn chân và cải thiện dáng đi tự nhiên, nhưng cần chuyển đổi dần dần.\nCòn nếu nguyên nhân đau nhức từ các bệnh lý khác, bạn cần thăm khám bác sĩ chuyên môn để có phác đồ chuyên sâu." },
    ],
  },
  {
    category: "Mua sắm và quyền lợi",
    faqs: [
      { q: "Tôi có thể đặt mua giày Kinis ở đâu?", a: "Hiện tại Bye Beo là Nhà phân phối ĐỘC QUYỀN giày barefoot Kinis duy nhất tại Việt Nam. Bạn có thể mua trực tiếp giày Kinis tại Hệ sinh thái Bye Beo." },
      { q: "Có ưu đãi gì khi mua giày barefoot Kinis không?", a: "Có. Khi mua sắm giày Kinis tại hệ sinh thái phân phối Bye Béo, bạn còn nhận được nhiều quyền lợi chăm sóc sức khỏe vận động toàn diện đến từ Kinis, bao gồm:\n- Miễn phí tạo tài khoản và thực hiện kiểm tra chỉ số thăng bằng Kinis BalancePro tích hợp AI tiên phong tại Việt Nam\n- Miễn phí bài tập luyện cải thiện thăng bằng được cá nhân hóa, dựa trên nghiên cứu khoa học và đội ngũ chuyên môn đến từ Hoa Kỳ\n- Hỗ trợ kiểm tra và tư vấn trực tiếp lộ trình chăm sóc sức khỏe vận động tại Hệ thống Balance Center Buôn Mê Thuột." },
    ],
  },
  {
    category: "Chăm sóc và vệ sinh",
    faqs: [
      { q: "Khi nào nên thay một đôi giày barefoot Kinis?", a: "Thời gian sử dụng phụ thuộc tần suất và bề mặt dùng giày. Nếu giày barefoot Kinis của bạn có những dấu hiệu này thì nên thay:\n- Đế mòn đáng kể làm giảm độ bám\n- Cảm giác bảo vệ giảm đáng kể\n- Dấu hiệu mất form dáng, rách." },
      { q: "Vệ sinh giày Kinis như thế nào?", a: "Các mẫu giày Kinis gồm giày barefoot Kinis Nomad và giày Kinis Lucy hoàn toàn có thể giặt tay hoặc giặt máy ở chế độ nhẹ, sau đó phơi khô tự nhiên. Không sử dụng máy sấy nhiệt độ cao để làm khô giày." },
      { q: "Làm sao hạn chế mùi khi mang giày barefoot Kinis?", a: "Giày barefoot Kinis được làm từ chất liệu vải chuyên biệt, có khả năng kháng khuẩn, hạn chế mùi. Tuy nhiên, để giày luôn thơm tho và sạch sẽ, bạn nên:\n- Phơi giày nơi thoáng khí sau khi sử dụng\n- Có thể dùng tất mỏng hoặc xịt khử mùi tự nhiên\n- Tránh mang liên tục nhiều giờ trong môi trường ẩm kín" },
    ],
  },
  {
    category: "Giày cho bàn chân bẹt",
    faqs: [
      { q: "Bàn chân bẹt là gì?", a: "Bàn chân bẹt là tình trạng vòm bàn chân thấp hoặc xẹp xuống, khiến toàn bộ lòng bàn chân gần như tiếp xúc với mặt đất khi đứng. Điều này có thể ảnh hưởng đến: khả năng thăng bằng, dáng đi, áp lực lên gối, hông và cột sống." },
      { q: "Người bàn chân bẹt nên chọn giày như thế nào?", a: "Một đôi giày phù hợp cho bàn chân bẹt nên chọn giày có thiết kế phù hợp:\n- Có mũi giày rộng\n- Đế phẳng, không ép dáng đi\n- Không bó ngón, không gò vòm\n- Cho phép bàn chân tự điều chỉnh khi tiếp đất\n👉 Đây cũng chính là triết lý thiết kế của giày barefoot Kinis để phù hợp cho người bàn chân bẹt muốn bàn chân được hoạt động về đúng cấu trúc tự nhiên, từ đó cải thiện sức mạnh của bàn chân và dáng đi tổng thể." },
      { q: "Vì sao Kinis là giày cho bàn chân bẹt theo hướng tự nhiên?", a: "Kinis là giày cho bàn chân bẹt được thiết kế để không nâng vòm cứng, không làm bàn chân phụ thuộc, mà giúp cơ bàn chân hoạt động và thích nghi tốt hơn theo thời gian. Giày hỗ trợ thăng bằng, dáng đi và cảm nhận mặt đất cho người bàn chân bẹt trong sinh hoạt hằng ngày." },
      { q: "Vì sao người bàn chân bẹt nên cân nhắc giày Kinis?", a: "Vì Kinis không \"sửa\" bàn chân bằng đệm nhân tạo mà tôn trọng cấu trúc tự nhiên, giúp bàn chân hoạt động đúng chức năng. Bên cạnh đó, giày Kinis còn hỗ trợ cải thiện cảm giác thăng bằng và giảm nguy cơ lệch trục vận động do giày không phù hợp." },
      { q: "Kinis Nomad hay Kinis Lucy phù hợp hơn cho người bàn chân bẹt?", a: "Tùy mục đích sử dụng & mức độ thích nghi để bạn lựa chọn mẫu giày Kinis phù hợp:\n- Kinis Lucy phù hợp người mới bắt đầu, sử dụng đi bộ, sinh hoạt hằng ngày và không cần thời gian làm quen\n- Kinis Nomad phù hợp người đã quen barefoot (chân trần), tập gym, yoga, vận động nhẹ. Mẫu giày này cần lộ trình thích nghi." },
      { q: "Mang giày Kinis có giúp cải thiện thăng bằng cho người bàn chân bẹt không?", a: "Có thể. Với người bàn chân bẹt, giày Kinis sẽ giúp đôi chân hoạt động về đúng cấu trúc tự nhiên và cơ chế sinh học của bàn chân. Đặc biệt thiết kế zero-drop + mũi rộng sẽ giúp tăng cảm nhận mặt đất, kích hoạt cơ bàn chân & cổ chân và cải thiện khả năng kiểm soát trọng tâm khi vận động." },
    ],
  },
];

const toSlug = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const FAQ = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const slugs = faqCategories.map((cat) => toSlug(cat.category));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );
    slugs.forEach((slug) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <PageHero title="Câu hỏi thường gặp" subtitle="Những thắc mắc phổ biến về giày barefoot và sản phẩm Kinis." />

      {/* Mobile horizontal nav */}
      <div className="lg:hidden sticky top-16 z-20 bg-muted/80 backdrop-blur-lg border-b border-border/50">
        <nav className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4 py-3 min-w-max">
            {faqCategories.map((cat, catIdx) => {
              const slug = toSlug(cat.category);
              const isActive = activeSection === slug;
              return (
                <a
                  key={catIdx}
                  href={`#${slug}`}
                  data-mobile-nav={slug}
                  className={`shrink-0 px-4 py-2 text-sm font-body font-medium rounded-full transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-foreground text-background"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.category}
                </a>
              );
            })}
          </div>
        </nav>
      </div>

      <section className="section-padding bg-muted/60">
        <div className="max-w-5xl mx-auto flex gap-10">
          {/* Desktop sidebar navigation */}
          <nav className="hidden lg:block w-56 shrink-0 sticky top-28 self-start">
            <ul className="space-y-1">
              {faqCategories.map((cat, catIdx) => {
                const slug = toSlug(cat.category);
                const isActive = activeSection === slug;
                return (
                  <li key={catIdx}>
                    <a
                      href={`#${slug}`}
                      className={`block px-4 py-2.5 text-sm font-body font-medium rounded-lg transition-colors border-l-2 ${
                        isActive
                          ? "border-secondary text-foreground bg-background"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:bg-background"
                      }`}
                    >
                      {cat.category}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* FAQ content */}
          <div className="flex-1 min-w-0 space-y-12">
            {faqCategories.map((cat, catIdx) => (
              <div key={catIdx} id={toSlug(cat.category)} className="scroll-mt-28">
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
                      <AccordionTrigger className="font-body text-left text-base font-medium text-card-foreground hover:text-secondary hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 text-[15px] leading-relaxed pb-5 whitespace-pre-line">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
