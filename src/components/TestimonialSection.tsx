import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Shella D.",
    badge: "Excellent",
    text: "Đây là đôi giày barefoot tốt nhất mà tôi từng thử! Thiết kế tối giản nhưng vẫn rất phong cách. Tôi rất thích cảm giác của đôi giày trên chân. Ban đầu tôi đặt nhầm size, nhưng đội ngũ chăm sóc khách hàng đã hỗ trợ rất nhanh và phản hồi chỉ trong vài ngày.",
  },
  {
    name: "Gregory P.",
    badge: "Fantastic",
    text: 'Tôi mua đôi Lucy cho RJ. Theo lời anh ấy: "Đôi giày này đã thay đổi cách tôi bước đi theo hướng tốt hơn. Tôi không muốn quay lại mang giày thông thường nữa."',
  },
  {
    name: "Brian K.",
    badge: "Great",
    text: "Tôi vừa trải qua phẫu thuật bàn chân và đôi giày Kinis thực sự rất phù hợp với đôi chân của tôi thời điểm phục hồi này. Rất thoải mái nhưng vẫn có độ hỗ trợ cần thiết.",
  },
  {
    name: "Jennifer B.",
    badge: "Excellent",
    text: "Tôi rất thích cảm giác vừa vặn của đôi giày! Giày rất nhẹ và ôm chân hoàn hảo từ ngón chân đến gót chân. Tôi mang khi tập luyện và cả trong sinh hoạt hàng ngày, và nhận được nhiều lời khen.",
  },
  {
    name: "Casey B.",
    badge: "Excellent",
    text: "Ban đầu tôi hơi do dự khi mua, nhưng giờ rất vui vì đã chọn chúng cho hành trình làm quen với barefoot. Tôi bắt đầu cảm nhận rõ các nhóm cơ bàn chân khi đi bộ. Giày cực kỳ thoải mái.",
  },
  {
    name: "Matthew O.",
    badge: "Excellent",
    text: "Đôi giày hoàn hảo với tôi. Tôi không thích mang giày và có cổ chân yếu, nhưng đôi giày này giải quyết được cả hai. Thoải mái như một đôi tất nhưng vẫn có độ bảo vệ của giày.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "hsl(27,100%,52%)" }} />
    ))}
  </div>
);

const TestimonialCard = ({
  item,
  index,
}: {
  item: (typeof testimonials)[number];
  index: number;
}) => (
  <div
    className="relative flex flex-col p-5 sm:p-5 md:p-6 rounded-2xl animate-fade-up"
    style={{
      animationDelay: `${index * 80}ms`,
      backgroundColor: "hsl(0,0%,100%)",
      border: "1px solid hsl(0,0%,90%)",
      boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06)",
    }}
  >
    {/* Badge */}
    <div className="flex items-center justify-between mb-3">
      <StarRating />
      <span
        className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
        style={{
          backgroundColor: "rgba(249,115,22,0.1)",
          color: "hsl(27,100%,45%)",
        }}
      >
        {item.badge}
      </span>
    </div>

    {/* Quote */}
    <p
      className="text-sm sm:text-sm md:text-base leading-relaxed flex-1 mb-4"
      style={{ color: "hsl(0,0%,35%)" }}
    >
      "{item.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid hsl(0,0%,93%)" }}>
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
        style={{
          backgroundColor: "hsl(0,0%,10%)",
          color: "#ffffff",
        }}
      >
        {item.name.charAt(0)}
      </div>
      <span className="font-body font-semibold text-sm" style={{ color: "hsl(0,0%,15%)" }}>
        {item.name}
      </span>
    </div>
  </div>
);

const TestimonialSection = () => (
  <section
    className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,96%)", isolation: "isolate" }}
    aria-labelledby="testimonial-heading"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="testimonial-heading"
        className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight text-center mb-3 sm:mb-4"
        style={{ color: "hsl(0,0%,10%)" }}
      >
        Phản hồi chân thực từ{" "}
        <span style={{ color: "hsl(27,100%,52%)" }}>khách hàng</span>
      </h2>
      <p
        className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        Những chia sẻ thật từ người dùng Kinis tại Hoa Kỳ
      </p>

      {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {testimonials.map((item, i) => (
          <TestimonialCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
