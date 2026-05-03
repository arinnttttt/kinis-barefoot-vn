import Layout from "@/components/layout/Layout";
import { Zap, Compass, Radio, Shield, Feather, Wind, SprayCan, Check, AlertTriangle } from "lucide-react";
import lucyImage from "@/assets/lucy-showcase-v3.png";
import audienceGymImg from "@/assets/audience-gym-weightlifting.jpg";
import audiencePostureImg from "@/assets/audience-posture.jpg";
import audienceYogaImg from "@/assets/audience-yoga.jpg";
import audienceFlatfeetImg from "@/assets/audience-flatfeet-strength.jpg";
import audienceFunctionalImg from "@/assets/audience-functional.jpg";
import audienceTrailRunnerImg from "@/assets/audience-trail-runner.jpg";
import apmabadge from "@/assets/apma-badge.png";
import nomadKolBanner from "@/assets/nomad-kol-banner.png";
import TestimonialSection from "@/components/TestimonialSection";

const ACCENT = "hsl(27,100%,52%)";

const benefits = [
  {
    icon: Zap,
    title: "Hỗ trợ vòm chân 3 điểm",
    description: "Công nghệ hỗ trợ vòm chân 3 điểm phân bổ áp lực đều, giảm đau và mỏi khi đứng lâu hoặc di chuyển nhiều.",
  },
  {
    icon: Compass,
    title: "Cải thiện dáng đi tự nhiên",
    description: "Thiết kế ergonomic giúp cơ thể căn chỉnh tư thế đứng và di chuyển đúng sinh cơ học.",
  },
  {
    icon: Radio,
    title: "Giảm chấn động hiệu quả",
    description: "Lớp đệm EVA cao cấp hấp thụ lực chấn động, bảo vệ khớp gối và cột sống khi vận động.",
  },
];

const ProductLucy = () => {
  return (
  <Layout>
    {/* Hero Section */}
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center min-h-[70vh] pt-24 pb-12 sm:py-14 lg:py-20">
          <div className="animate-fade-up">
            <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3 text-muted-foreground">
              Giày đi bộ barefoot
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              Cải thiện
              <br />
              <span style={{ color: ACCENT }}>sức mạnh</span> bàn chân
              <br />
              mỗi ngày
            </h1>
            <div className="mt-4 flex flex-col items-start gap-2">
              <span className="text-xs sm:text-sm font-body font-semibold uppercase tracking-widest text-muted-foreground">Chứng nhận bởi Hiệp hội Y khoa Bàn chân Hoa Kỳ</span>
              <img src={apmabadge} alt="APMA Seal of Acceptance" className="h-12 sm:h-14 w-auto" />
            </div>
            <div className="mt-6 sm:mt-8">
              <a
                href="https://byebeoshop.com/san-pham-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-3.5 font-body font-semibold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Mua Trực Tiếp Tại Đại Lý
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center animate-fade-up [animation-delay:150ms]">
            <img src={lucyImage} alt="Kinis Lucy" className="w-full md:w-[90%] max-w-2xl lg:max-w-3xl object-contain" />
          </div>
        </div>
      </div>
    </section>

    {/* Why Kinis Lucy Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tại sao bạn cần <span style={{ color: ACCENT }}>Kinis Lucy</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Được thiết kế dựa trên khoa học bàn chân, Kinis Lucy hỗ trợ vòm chân hoàn hảo, giúp bạn vận động thoải mái và giảm thiểu chấn thương.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {benefits.map((b, i) => (
            <div key={b.title} className="rounded-2xl p-6 sm:p-8 bg-card border border-border animate-fade-up" style={{ animationDelay: `${i * 100}ms`, boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                <b.icon className="w-6 h-6" style={{ color: ACCENT }} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: "linear-gradient(135deg, hsl(220 60% 95%), hsl(0 0% 100%), hsl(0 80% 95%))", border: "1px solid hsl(220 40% 85%)" }}>
            <svg className="w-8 h-6 flex-shrink-0" viewBox="0 0 60 30" aria-label="Cờ Hoa Kỳ">
              <rect width="60" height="30" fill="#B22234"/><rect y="2.3" width="60" height="2.3" fill="#fff"/><rect y="6.9" width="60" height="2.3" fill="#fff"/><rect y="11.5" width="60" height="2.3" fill="#fff"/><rect y="16.2" width="60" height="2.3" fill="#fff"/><rect y="20.8" width="60" height="2.3" fill="#fff"/><rect y="25.4" width="60" height="2.3" fill="#fff"/><rect width="24" height="16.15" fill="#3C3B6E"/>
              <g fill="#fff" fontSize="3"><text x="2" y="4">★ ★ ★ ★ ★</text><text x="4" y="7">★ ★ ★ ★</text><text x="2" y="10">★ ★ ★ ★ ★</text><text x="4" y="13">★ ★ ★ ★</text></g>
            </svg>
            <span className="text-sm font-body font-semibold uppercase tracking-wider" style={{ color: "hsl(220,50%,30%)" }}>Sản phẩm nhập khẩu chính hãng từ Hoa Kỳ</span>
          </div>
        </div>
      </div>
    </section>

    {/* Technology Section */}
    <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex items-center justify-center animate-fade-up">
            <img src={lucyImage} alt="Kinis Lucy Technology" className="w-full max-w-md object-contain" />
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Công nghệ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Chất liệu<br /><span style={{ color: ACCENT }}>cao cấp</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Kinis Lucy được chế tác từ chất liệu EVA cao cấp kết hợp TPU ổn định, mang đến sự hỗ trợ hoàn hảo cho vòm chân trong mọi hoạt động.
            </p>
            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                { icon: Shield, text: "EVA cao cấp – Đệm êm, hấp thụ chấn động" },
                { icon: Feather, text: "TPU ổn định – Hỗ trợ vòm chân chắc chắn" },
                { icon: Wind, text: "Thoáng khí – Công nghệ kháng khuẩn kiểm soát mùi" },
                { icon: SprayCan, text: "Thiết kế ergonomic – Ôm sát bàn chân tự nhiên" },
              ].map((item, i) => (
                <div key={item.text} className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: `${200 + i * 100}ms` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                    <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* KOL Banner */}
    <section className="w-full">
      <img src={nomadKolBanner} alt="Kinis Lucy KOL" className="w-full block" loading="lazy" />
    </section>

    {/* Adaptation Roadmap Section - Dark */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Lộ trình thích nghi</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Kinis Lucy giúp bàn chân khỏe hơn</h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(0,0%,65%)" }}>
            Hãy kiên nhẫn để bàn chân thích nghi. Lộ trình 2–4 tuần giúp bạn cảm nhận sự khác biệt rõ rệt.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
            {[
              { num: "1", time: "Tuần 1", subtitle: "Làm quen", tasks: ["Sử dụng 2–3 giờ mỗi ngày", "Để bàn chân quen với lớp hỗ trợ mới"] },
              { num: "2", time: "Tuần 2 – 3", subtitle: "Thích nghi", tasks: ["Tăng dần thời gian sử dụng", "Bắt đầu sử dụng khi tập luyện nhẹ"] },
              { num: "3", time: "Sau 1 tháng", subtitle: "Hoàn thiện", tasks: ["Sử dụng cả ngày thoải mái", "Cảm nhận sự cải thiện rõ rệt về dáng đi"] },
            ].map((stage, i) => (
              <div key={stage.num} className="flex flex-col items-center animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="relative select-none mb-5" style={{ height: "clamp(5rem, 10vw, 8rem)" }}>
                  <span className="font-display font-bold leading-none block" style={{ fontSize: "clamp(5rem, 10vw, 8rem)", color: ACCENT, maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 85%)", WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 85%)" }}>{stage.num}</span>
                  <div className="absolute left-1/2 -translate-x-1/2 w-[120%] h-px" style={{ top: "50%", backgroundColor: ACCENT, boxShadow: "0 0 8px hsla(27,100%,52%,0.4)" }} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">{stage.time}</h3>
                <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: "hsl(27,100%,60%)" }}>{stage.subtitle}</p>
                <ul className="space-y-3 text-left">
                  {stage.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <Check className="w-4.5 h-4.5 mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      <span className="text-sm sm:text-base" style={{ color: "hsl(0,0%,70%)" }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-base sm:text-lg mt-10 sm:mt-12 max-w-2xl mx-auto animate-fade-up" style={{ color: "hsl(0,0%,55%)" }}>
          ⚡ Có thể tháo rời và vệ sinh dễ dàng. Phơi khô tự nhiên để giữ độ bền của sản phẩm.
        </p>
      </div>
    </section>

    {/* Đối tượng Phù hợp Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Đối tượng <span style={{ color: ACCENT }}>phù hợp</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            { img: audiencePostureImg, title: "Đi bộ & Du lịch", desc: "Hỗ trợ vòm chân khi di chuyển nhiều, giảm mỏi và đau chân hiệu quả." },
            { img: audienceGymImg, title: "Gym & Fitness", desc: "Tăng sự ổn định khi tập luyện, giảm chấn động cho khớp gối và cột sống." },
            { img: audienceYogaImg, title: "Sử dụng hàng ngày", desc: "Phù hợp đi làm, đi học, hoạt động thường nhật với sự thoải mái tối đa." },
            { img: audienceFlatfeetImg, title: "Bàn chân bẹt", desc: "Hỗ trợ nâng vòm chân, cải thiện cấu trúc bàn chân bẹt theo thời gian." },
            { img: audienceFunctionalImg, title: "Cải thiện thăng bằng", desc: "Phân bổ áp lực đều giúp cải thiện khả năng giữ thăng bằng tự nhiên." },
            { img: audienceTrailRunnerImg, title: "Chạy bộ nhẹ", desc: "Hấp thụ chấn động khi chạy, bảo vệ khớp và nâng cao hiệu suất vận động." },
          ].map((item, i) => (
            <div key={item.title} className="rounded-2xl overflow-hidden bg-card border border-border animate-fade-up" style={{ animationDelay: `${i * 80}ms`, boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}>
              <img src={item.img} alt={item.title} loading="lazy" width={1824} height={512} className="w-full object-cover" style={{ aspectRatio: "32/9" }} />
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <TestimonialSection page="lucy" title={<>Mọi người nghĩ gì về <span style={{ color: ACCENT }}>Kinis Lucy</span></>} subtitle={null} />

    {/* Quote CTA Section - Dark */}
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="mb-3" style={{ color: ACCENT }}>
          <svg className="w-10 h-10 mx-auto opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179z"/></svg>
        </div>
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white mb-3">Kinis Lucy không chỉ là một miếng lót giày.</p>
        <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "hsl(0,0%,60%)" }}>Đó là giải pháp chăm sóc sức khỏe bàn chân được chứng nhận bởi Hiệp hội Y khoa Bàn chân Hoa Kỳ (APMA).</p>
        <a href="https://byebeoshop.com/san-pham-2/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl text-white transition-opacity hover:opacity-90" style={{ backgroundColor: ACCENT }}>
          Mua Trực Tiếp Tại Đại Lý
        </a>
      </div>
    </section>

    {/* Disclaimer Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl p-6 sm:p-8 lg:p-10 animate-fade-up" style={{ backgroundColor: "hsl(0 80% 97%)", border: "1px solid hsl(0 70% 90%)" }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(0 70% 55%)", color: "#fff" }}>
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "hsl(0 70% 35%)" }}>Lưu ý – Hướng dẫn sử dụng</h2>
              <p className="text-sm sm:text-base mt-1" style={{ color: "hsl(0 40% 45%)" }}>Để đạt hiệu quả tốt nhất khi sử dụng Kinis Lucy, vui lòng lưu ý:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { text: "Chọn đúng size giày để lót vừa khít, không bị xô lệch" },
              { text: "Tháo lót giày gốc trước khi sử dụng Kinis Lucy" },
              { text: "Vệ sinh định kỳ bằng khăn ẩm, phơi khô tự nhiên" },
              { text: "Thay mới sau 6–12 tháng sử dụng để đảm bảo hiệu quả" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: "hsl(0 60% 94%)" }}>
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT }} />
                <span className="text-sm sm:text-base font-medium" style={{ color: "hsl(0 50% 30%)" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default ProductLucy;
