import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  name: string;
  badge: string;
  text: string;
  pages?: string[]; // e.g. ["home", "nomad", "lucy"] — empty/undefined = home only
}

const testimonials: Testimonial[] = [
  {
    name: "Shella D.",
    badge: "Excellent",
    text: "Đây là đôi giày barefoot tốt nhất mà tôi từng thử! Thiết kế tối giản nhưng vẫn rất phong cách. Tôi rất thích cảm giác của đôi giày trên chân. Ban đầu tôi đặt nhầm size, nhưng đội ngũ chăm sóc khách hàng đã hỗ trợ rất nhanh.",
    pages: ["home", "nomad"],
  },
  {
    name: "Gregory P.",
    badge: "Fantastic",
    text: 'Tôi mua đôi Lucy cho RJ. Theo lời anh ấy: "Đôi giày này đã thay đổi cách tôi bước đi theo hướng tốt hơn. Tôi không muốn quay lại mang giày thông thường nữa."',
    pages: ["home"],
  },
  {
    name: "Brian K.",
    badge: "Great",
    text: "Tôi vừa trải qua phẫu thuật bàn chân và đôi giày Kinis thực sự rất phù hợp với đôi chân của tôi thời điểm phục hồi này. Rất thoải mái nhưng vẫn có độ hỗ trợ cần thiết.",
    pages: ["home", "nomad"],
  },
  {
    name: "Jennifer B.",
    badge: "Excellent",
    text: "Tôi rất thích cảm giác vừa vặn của đôi giày! Giày rất nhẹ và ôm chân hoàn hảo từ ngón chân đến gót chân. Tôi mang khi tập luyện và cả trong sinh hoạt hàng ngày.",
    pages: ["home", "nomad"],
  },
  {
    name: "Casey B.",
    badge: "Excellent",
    text: "Ban đầu tôi hơi do dự khi mua, nhưng giờ rất vui vì đã chọn chúng cho hành trình làm quen với barefoot. Tôi bắt đầu cảm nhận rõ các nhóm cơ bàn chân khi đi bộ.",
    pages: ["home"],
  },
  {
    name: "Matthew O.",
    badge: "Excellent",
    text: "Đôi giày hoàn hảo với tôi. Tôi không thích mang giày và có cổ chân yếu, nhưng đôi giày này giải quyết được cả hai. Thoải mái như một đôi tất nhưng vẫn có độ bảo vệ của giày.",
    pages: ["home", "nomad"],
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "hsl(27,100%,52%)" }} />
    ))}
  </div>
);

const TestimonialCard = ({ item }: { item: (typeof testimonials)[number] }) => (
  <div
    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] h-full flex flex-col p-5 md:p-6 rounded-2xl"
    style={{
      backgroundColor: "hsl(0,0%,100%)",
      border: "1px solid hsl(0,0%,90%)",
      boxShadow: "0 2px 12px -4px rgba(0,0,0,0.06)",
    }}
  >
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

    <p
      className="text-sm md:text-base leading-relaxed flex-1 mb-4"
      style={{ color: "hsl(0,0%,35%)" }}
    >
      "{item.text}"
    </p>

    <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid hsl(0,0%,93%)" }}>
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
        style={{ backgroundColor: "hsl(0,0%,10%)", color: "#ffffff" }}
      >
        {item.name.charAt(0)}
      </div>
      <span className="font-body font-semibold text-sm" style={{ color: "hsl(0,0%,15%)" }}>
        {item.name}
      </span>
    </div>
  </div>
);

interface TestimonialSectionProps {
  page?: string; // filter testimonials by page, e.g. "home", "nomad", "lucy"
}

const TestimonialSection = ({ page = "home" }: TestimonialSectionProps) => {
  const filtered = testimonials.filter((t) => !t.pages || t.pages.includes(page));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section
      className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "hsl(0,0%,96%)" }}
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8 lg:mb-10 gap-4">
          <div>
            <h2
              id="testimonial-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight mb-2 sm:mb-3"
              style={{ color: "hsl(0,0%,10%)" }}
            >
              Phản hồi chân thực từ{" "}
              <span style={{ color: "hsl(27,100%,52%)" }}>khách hàng</span>
            </h2>
            <p
              className="text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
              style={{ color: "hsl(0,0%,50%)" }}
            >
              Những chia sẻ thật từ người dùng Kinis tại Hoa Kỳ
            </p>
          </div>

          {/* Nav arrows - hidden on mobile, visible on sm+ */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
              style={{
                backgroundColor: canPrev ? "hsl(0,0%,10%)" : "hsl(0,0%,85%)",
                color: "#fff",
                opacity: canPrev ? 1 : 0.5,
              }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
              style={{
                backgroundColor: canNext ? "hsl(0,0%,10%)" : "hsl(0,0%,85%)",
                color: "#fff",
                opacity: canNext ? 1 : 0.5,
              }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {testimonials.map((item) => (
            <div key={item.name} className="flex" style={{ scrollSnapAlign: "start" }}>
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
