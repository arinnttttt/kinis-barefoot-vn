import Layout from "@/components/layout/Layout";
import { Zap, Compass, Radio, Shield, Feather, Wind, SprayCan, Check, AlertTriangle } from "lucide-react";
const nomadImage = "https://kinis.vn/wp-content/uploads/2026/04/kinis-nomad-transparent.png";
import audienceGymImg from "@/assets/audience-gym-weightlifting.jpg";
import audiencePostureImg from "@/assets/audience-posture.jpg";
import audienceYogaImg from "@/assets/audience-yoga.jpg";
import audienceFlatfeetImg from "@/assets/audience-flatfeet-strength.jpg";
import audienceFunctionalImg from "@/assets/audience-functional.jpg";
import audienceTrailRunnerImg from "@/assets/audience-trail-runner.jpg";
import iconNoRunning from "@/assets/icon-no-running.png";
import iconNoWet from "@/assets/icon-no-wet.png";
import iconNoConstruction from "@/assets/icon-no-construction.png";
import iconNoInjury from "@/assets/icon-no-injury.png";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: Zap,
    title: "Kích hoạt sức mạnh bàn chân",
    description:
      "Thiết kế zero-drop hay đế phẳng, giúp cơ bàn chân hoạt động tự nhiên, tăng cường sức mạnh nội tại của cơ chân theo thời gian.",
  },
  {
    icon: Compass,
    title: "Hiệu chỉnh dáng đi và tư thế",
    description:
      "Đế phẳng giúp cơ thể tự căn chỉnh tư thế đứng và di chuyển đúng sinh cơ học.",
  },
  {
    icon: Radio,
    title: "Tăng cường cảm nhận mặt đất",
    description:
      "Đế mỏng truyền tải tín hiệu từ mặt đất, nâng cao khả năng thăng bằng và phản xạ.",
  },
];

const ProductNomad = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
  <Layout>
    {/* Hero Section - White, 2 columns */}
    <section style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh] py-12 sm:py-16 lg:py-20">
          {/* Text column */}
          <div className="animate-fade-up">
            <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3 text-muted-foreground">
              Giày tập luyện chân trần chuyên nghiệp
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              Đánh thức
              <br />
              <span style={{ color: "hsl(27,100%,52%)" }}>sức mạnh</span> đôi chân
            </h1>
            <div className="mt-8 sm:mt-10">
              <a
                href="https://kinis.vn/san-pham/nomad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "hsl(27,100%,52%)" }}
              >
                Mua Trực Tiếp Tại Đại Lý
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="flex items-center justify-center animate-fade-up [animation-delay:150ms]">
            <img
              src={nomadImage}
              alt="Kinis Nomad"
              className="w-3/4 max-w-2xl lg:max-w-3xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Why Kinis Nomad Section */}
    <section id="why-nomad" className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Tại sao bạn cần <span style={{ color: "hsl(27,100%,52%)" }}>Kinis Nomad</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Được thiết kế dựa trên khoa học bàn chân, Kinis Nomad là giải pháp giúp đôi chân vận động đúng cơ chế tự nhiên.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 sm:p-8 bg-card border border-border animate-fade-up"
              style={{
                animationDelay: `${i * 100}ms`,
                boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                <b.icon className="w-6 h-6" style={{ color: "hsl(27,100%,52%)" }} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 text-foreground">
                {b.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(220 60% 95%), hsl(0 0% 100%), hsl(0 80% 95%))",
              border: "1px solid hsl(220 40% 85%)",
            }}
          >
            <span className="text-3xl">🇺🇸</span>
            <span className="text-sm font-body font-semibold uppercase tracking-wider" style={{ color: "hsl(220,50%,30%)" }}>
              Sản phẩm nhập khẩu chính hãng từ Hoa Kỳ
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* Technology Section - White & Clean */}
    <section ref={sectionRef} className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video 360° */}
          <div className="flex items-center justify-center animate-fade-up">
            <video
              ref={videoRef}
              className="w-full max-w-md object-contain"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
            >
              <source src="https://kinis.vn/wp-content/uploads/2026/04/nomad-180-rotate.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text content */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(27,100%,52%)" }}>
              Công nghệ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Công nghệ vật liệu
              <br />
              <span style={{ color: "hsl(27,100%,52%)" }}>đột phá</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Kinis Nomad sử dụng 100% sợi kỹ thuật Honeywell Spectra® – loại sợi siêu cường lực thường được sử dụng trong áo chống đạn và thiết bị bảo hộ cao cấp.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                { icon: Shield, text: "Vải siêu bền và chống mài mòn" },
                { icon: Feather, text: "Độ đàn hồi cao – ôm chân như 'làn da thứ hai'" },
                { icon: Wind, text: "Nhẹ và thoáng khí – mang lại cảm giác tự do" },
                { icon: SprayCan, text: "Kháng khuẩn – kiểm soát mùi khi tập luyện" },
              ].map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "hsl(27 100% 52% / 0.1)" }}>
                    <item.icon className="w-5 h-5" style={{ color: "hsl(27,100%,52%)" }} />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Adaptation Roadmap Section - Dark */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(27,100%,52%)" }}>
            Lộ trình thích nghi
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Giày Kinis Nomad giúp bàn chân mạnh hơn
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(0,0%,65%)" }}>
            Nhưng cần thời gian thích nghi. Hãy kiên nhẫn theo lộ trình 3–6 tháng mà Kinis gợi ý.
          </p>
        </div>

        {/* Steps Infographic */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
            {[
              {
                num: "1",
                time: "Tuần 1 – 2",
                subtitle: "Làm quen",
                tasks: ["Mang 1–2 giờ mỗi ngày", "Tránh tập nặng hoặc vận động cường độ cao"],
              },
              {
                num: "2",
                time: "Tuần 3 – 4",
                subtitle: "Cảm nhận",
                tasks: ["Bắt đầu các bài tập nhẹ", "Làm quen với cảm giác tiếp đất"],
              },
              {
                num: "3",
                time: "Sau 1 – 2 tháng",
                subtitle: "Bứt phá",
                tasks: ["Có thể sử dụng như giày tập chính", "Đôi chân thích nghi hoàn toàn"],
              },
            ].map((stage, i) => (
              <div
                key={stage.num}
                className="flex flex-col items-center animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Giant number with line cut + fade below */}
                <div className="relative select-none mb-5" style={{ height: "clamp(5rem, 10vw, 8rem)" }}>
                  <span
                    className="font-display font-bold leading-none block"
                    style={{
                      fontSize: "clamp(5rem, 10vw, 8rem)",
                      color: "hsl(27,100%,52%)",
                      maskImage: "linear-gradient(180deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 85%)",
                      WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 85%)",
                    }}
                  >
                    {stage.num}
                  </span>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-[120%] h-px"
                    style={{
                      top: "50%",
                      backgroundColor: "hsl(27,100%,52%)",
                      boxShadow: "0 0 8px hsla(27,100%,52%,0.4)",
                    }}
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  {stage.time}
                </h3>
                <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: "hsl(27,100%,60%)" }}>
                  {stage.subtitle}
                </p>
                <ul className="space-y-3 text-left">
                  {stage.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <Check className="w-4.5 h-4.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(27,100%,52%)" }} />
                      <span className="text-sm sm:text-base" style={{ color: "hsl(0,0%,70%)" }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Care note */}
        <p className="text-center text-base sm:text-lg mt-10 sm:mt-12 max-w-2xl mx-auto animate-fade-up" style={{ color: "hsl(0,0%,55%)" }}>
          ⚡ Có thể giặt máy (sử dụng túi giặt) và phơi khô tự nhiên để giữ độ bền của giày.
        </p>
      </div>
    </section>

    {/* Đối tượng Phù hợp Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Đối tượng <span style={{ color: "hsl(27,100%,52%)" }}>phù hợp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            { img: audienceGymImg, title: "Gym & Weightlifting", desc: "Tăng độ ổn định khi tập luyện và truyền lực tốt hơn khi nâng tạ." },
            { img: audiencePostureImg, title: "Cải thiện tư thế đứng & dáng đi", desc: "Hỗ trợ kích hoạt cơ bàn chân và cải thiện sự ổn định khi di chuyển." },
            { img: audienceYogaImg, title: "Yoga & Pilates", desc: "Ôm sát bàn chân, giúp giữ thăng bằng và kiểm soát chuyển động tốt hơn." },
            { img: audienceFlatfeetImg, title: "Tăng cường cơ bàn chân bẹt", desc: "Mũi giày rộng giúp ngón chân xòe tự nhiên và kích hoạt cơ bàn chân." },
            { img: audienceFunctionalImg, title: "Functional Training", desc: "Linh hoạt cho các bài tập đa hướng như squat, lunge." },
            { img: audienceTrailRunnerImg, title: "Runner chuyên nghiệp", desc: "Hỗ trợ tăng cường sức mạnh cơ bàn chân, đặc biệt hữu ích cho runner chạy trail." },
          ].map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl overflow-hidden bg-card border border-border animate-fade-up"
              style={{ animationDelay: `${i * 80}ms`, boxShadow: "0 4px 24px -4px rgba(0,0,0,0.06)" }}
            >
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
    <TestimonialSection page="nomad" title={<>Mọi người nghĩ gì về <span style={{ color: "hsl(27,100%,52%)" }}>Kinis Nomad</span></>} subtitle={null} />

    {/* Quote CTA Section - Dark */}
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="mb-3" style={{ color: "hsl(27,100%,52%)" }}>
          <svg className="w-10 h-10 mx-auto opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179z"/></svg>
        </div>
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white mb-3">
          Kinis Nomad không chỉ là một đôi giày tập luyện.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "hsl(0,0%,60%)" }}>
          Đó là công cụ giúp bạn kích hoạt sức mạnh tự nhiên của đôi chân và chăm sóc sức khỏe vận động bền vững.
        </p>
        <a
          href="https://kinis.vn/san-pham/nomad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 font-body font-semibold text-sm sm:text-base rounded-xl text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "hsl(27,100%,52%)" }}
        >
          Mua Trực Tiếp Tại Đại Lý
        </a>
      </div>
    </section>

    {/* Disclaimer / Warning Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10 animate-fade-up"
          style={{
            backgroundColor: "hsl(0 80% 97%)",
            border: "1px solid hsl(0 70% 90%)",
          }}
        >
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "hsl(0 70% 55%)", color: "#fff" }}
            >
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "hsl(0 70% 35%)" }}>
                Lưu ý – Khuyến nghị quan trọng
              </h2>
              <p className="text-sm sm:text-base mt-1" style={{ color: "hsl(0 40% 45%)" }}>
                Để đảm bảo an toàn và độ bền sản phẩm, Kinis Nomad không khuyến khích sử dụng trong các trường hợp sau:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { text: "Không sử dụng để chạy bộ đường dài", icon: iconNoRunning },
              { text: "Không sử dụng trong môi trường ướt hoặc trơn trượt", icon: iconNoWet },
              { text: "Không dùng tại công trường hoặc khu vực có vật sắc nhọn", icon: iconNoConstruction },
              { text: "Không dùng khi đang có chấn thương bàn chân cấp tính", icon: iconNoInjury },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ backgroundColor: "hsl(0 60% 94%)" }}
              >
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

export default ProductNomad;
