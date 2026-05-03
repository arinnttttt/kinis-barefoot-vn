import Layout from "@/components/layout/Layout";
import { Zap, Compass, Activity, Shield, Feather, Wind, Check, AlertTriangle, PersonStanding, Footprints, Dumbbell, ArrowRightLeft } from "lucide-react";
import lucyImage from "@/assets/lucy-showcase-v3.png";
import apmaSeal from "@/assets/apma-seal.png";

const heroLucy = "https://kinis.vn/wp-content/uploads/2026/05/hero-lucy-1-scaled.png";
const lucyLifestyleBannerUrl = "https://kinis.vn/wp-content/uploads/2026/05/lucy-lifestyle.png";
import audienceGymImg from "@/assets/audience-gym-weightlifting.jpg";
import audiencePostureImg from "@/assets/audience-posture.jpg";
import audienceYogaImg from "@/assets/audience-yoga.jpg";
import audienceFlatfeetImg from "@/assets/audience-flatfeet-strength.jpg";
import audienceFunctionalImg from "@/assets/audience-functional.jpg";
import audienceTrailRunnerImg from "@/assets/audience-trail-runner.jpg";
import apmabadge from "@/assets/apma-badge.png";
import iconNoRunning from "@/assets/icon-no-running.png";
import iconNoWet from "@/assets/icon-no-wet.png";
import iconNoConstruction from "@/assets/icon-no-construction.png";
import iconNoInjury from "@/assets/icon-no-injury.png";

import TestimonialSection from "@/components/TestimonialSection";
import LucyColorCarousel from "@/components/LucyColorCarousel";

const ACCENT = "hsl(27,100%,52%)";

const benefits = [
  {
    icon: Zap,
    title: "Tăng sức mạnh cơ bàn chân đến 57,4%",
    description: "Trung bình sau 6 tháng sử dụng giày tối giản theo nghiên cứu trên Scientific Reports (Nature, 2021).",
  },
  {
    icon: Activity,
    title: "Cải thiện khả năng thăng bằng",
    description: "Đế mỏng truyền tải tín hiệu mặt đất, giúp hệ thần kinh phản xạ tốt hơn.",
  },
  {
    icon: Compass,
    title: "Hỗ trợ dáng đi tự nhiên",
    description: "Thiết kế zero-drop (đế phẳng) giúp cơ thể tự căn chỉnh tư thế khi di chuyển.",
  },
  {
    icon: PersonStanding,
    title: "Giảm nguy cơ té ngã",
    description: "Tăng cường cảm nhận mặt đất và phản xạ thăng bằng, hạn chế chấn thương.",
  },
];

const ProductLucy = () => {
  return (
  <Layout>
    {/* Hero Section */}
    <section className="relative overflow-hidden -mt-16 lg:-mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[70vh]">
        {/* Text column */}
        <div className="flex items-center animate-fade-up px-4 sm:px-6 lg:px-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pt-28 sm:pt-32 lg:pt-48 pb-6 sm:pb-8 lg:pb-20">
          <div>
            <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3 text-muted-foreground">
              Giày đi bộ barefoot
            </p>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              Cải thiện{" "}
              <br className="sm:hidden" />
              <span style={{ color: ACCENT }}>sức mạnh</span> bàn chân{" "}
              <br className="sm:hidden" />
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-3.5 font-body font-semibold text-sm rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Mua Trực Tiếp Tại Đại Lý
              </a>
            </div>
          </div>
        </div>

        {/* Image column - flush right & bottom */}
        <div className="animate-fade-up [animation-delay:150ms] self-end">
          <img src={heroLucy} alt="Kinis Lucy" className="w-full h-auto block max-h-[60vh] object-contain lg:max-h-none" />
        </div>
      </div>
    </section>

    {/* Why Kinis Lucy Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Lý do bạn nên chọn <span style={{ color: ACCENT }}>Kinis Lucy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Lucy được thiết kế theo cấu trúc bàn chân tự nhiên, phù hợp cho những người muốn chuyển từ giày truyền thống sang giày tối giản.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
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
    <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div className="flex items-center justify-center animate-fade-up">
            <video
              className="w-full max-w-md object-contain"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="https://kinis.vn/wp-content/uploads/2026/05/Lucy-rotate.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Công nghệ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Chất liệu <span style={{ color: ACCENT }}>cao cấp</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Kinis Lucy được sản xuất với chất liệu vải Nylon cao cấp, mang lại sự thoải mái và độ bền cho các hoạt động đi bộ hằng ngày.
            </p>
            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                { icon: Wind, text: "Thoáng khí và nhanh khô" },
                { icon: Feather, text: "Nhẹ và linh hoạt" },
                { icon: Shield, text: "Độ bền cao và thân thiện với môi trường" },
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

    {/* Color Carousel */}
    <LucyColorCarousel />


    <section className="w-full">
      <img src={lucyLifestyleBannerUrl} alt="Kinis Lucy Lifestyle" className="w-full block" loading="lazy" />
    </section>

    {/* Guide Section - Dark */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Hướng dẫn</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Cách sử dụng</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Footprints, title: "Sử dụng hằng ngày", desc: "Thay thế giày thông thường khi đi bộ hoặc sinh hoạt hằng ngày." },
            { icon: Dumbbell, title: "Hỗ trợ tập luyện", desc: "Hoàn hảo cho các bài tập kích hoạt cơ bàn chân nhẹ." },
            { icon: ArrowRightLeft, title: "Bước đệm hoàn hảo", desc: "Giúp bạn chuyển từ giày truyền thống sang giày barefoot một cách an toàn." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 sm:p-8 text-center animate-fade-up"
              style={{
                animationDelay: `${i * 120}ms`,
                backgroundColor: "hsl(0,0%,10%)",
                border: "1px solid hsl(0,0%,16%)",
              }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "hsl(27 100% 52% / 0.12)" }}>
                <item.icon className="w-7 h-7" style={{ color: ACCENT }} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(0,0%,65%)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {[
            { img: audiencePostureImg, title: "Người yêu thích đi bộ", desc: "Lucy nhẹ và linh hoạt giúp bàn chân vận động tự nhiên và thoải mái khi đi lại hằng ngày." },
            { img: audienceGymImg, title: "Người muốn cải thiện sức khỏe bàn chân", desc: "Giúp tăng cường thăng bằng và cải thiện chức năng vận động của bàn chân." },
            { img: audienceTrailRunnerImg, title: "Runner cần phục hồi bàn chân", desc: "Hỗ trợ kích hoạt cơ bàn chân và cải thiện cảm nhận mặt đất sau thời gian sử dụng giày đệm dày." },
            { img: audienceFlatfeetImg, title: "Người có bàn chân bẹt", desc: "Thiết kế mũi giày rộng giúp ngón chân xòe tự nhiên, hỗ trợ kích hoạt cơ bàn chân." },
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

    {/* APMA Certification Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Chứng nhận</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Chứng nhận <span style={{ color: ACCENT }}>y khoa</span>
          </h2>
        </div>
        <div className="flex flex-col items-center text-center animate-fade-up [animation-delay:150ms]">
          <img src={apmaSeal} alt="APMA Seal of Acceptance" className="h-28 sm:h-36 w-auto mb-6" />
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mb-4">
            Giày Kinis Lucy đã được Hiệp hội American Podiatric Medical Association (APMA) chứng nhận là sản phẩm hỗ trợ sức khỏe bàn chân.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
            APMA là tổ chức y khoa hàng đầu tại Hoa Kỳ chuyên về sức khỏe bàn chân và mắt cá chân. Chứng nhận APMA Seal of Acceptance đảm bảo sản phẩm đáp ứng các tiêu chuẩn khoa học nghiêm ngặt trong việc hỗ trợ và bảo vệ sức khỏe bàn chân.
          </p>
        </div>
      </div>
    </section>

    {/* Quote CTA Section - Dark */}
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="mb-3" style={{ color: ACCENT }}>
          <svg className="w-10 h-10 mx-auto opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179z"/></svg>
        </div>
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white mb-3">Kinis Lucy không chỉ là một đôi giày đi bộ.</p>
        <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "hsl(0,0%,60%)" }}>Đó là bước khởi đầu giúp bạn chăm sóc sức khỏe bàn chân và chăm sóc sức khỏe vận động bền vững mỗi ngày.</p>
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
              <h2 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "hsl(0 70% 35%)" }}>Lưu ý – Khuyến nghị quan trọng</h2>
              <p className="text-sm sm:text-base mt-1" style={{ color: "hsl(0 40% 45%)" }}>Để đảm bảo an toàn và độ bền sản phẩm, Kinis Lucy không khuyến khích sử dụng trong các trường hợp sau:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { text: "Không sử dụng để chạy bộ đường dài", icon: iconNoRunning },
              { text: "Không sử dụng trong môi trường ướt hoặc trơn trượt", icon: iconNoWet },
              { text: "Không dùng tại công trường hoặc khu vực có vật sắc nhọn", icon: iconNoConstruction },
              { text: "Không dùng khi đang có chấn thương bàn chân cấp tính", icon: iconNoInjury },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: "hsl(0 60% 94%)" }}>
                <img src={item.icon} alt="" className="h-8 w-auto flex-shrink-0" />
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
