import Layout from "@/components/layout/Layout";
import { Zap, Compass, Activity, Shield, Feather, Wind, Check, AlertTriangle, Footprints, Dumbbell, ArrowRightLeft, PersonStanding, Weight, Trophy, Shirt } from "lucide-react";
import audienceGymImg from "@/assets/audience-gym-weightlifting.jpg";
import audiencePostureImg from "@/assets/audience-posture.jpg";
import audienceYogaImg from "@/assets/audience-yoga.jpg";
import audienceFlatfeetImg from "@/assets/audience-flatfeet-strength.jpg";
import audienceFunctionalImg from "@/assets/audience-functional.jpg";
import audienceTrailRunnerImg from "@/assets/audience-trail-runner.jpg";
const nomadKolBanner = "https://kinis.vn/wp-content/uploads/2026/05/nomad-kol-banner.png";
import TestimonialSection from "@/components/TestimonialSection";
import apmabadge from "@/assets/apma-badge.png";
import ApolloColorCarousel from "@/components/ApolloColorCarousel";

const apolloImage = "https://kinis.vn/wp-content/uploads/2026/04/kinis-apollo-1.png";
const heroApollo = "https://kinis.vn/wp-content/uploads/2026/05/apollo-hero-scaled.png";
const apolloLifestyleBannerUrl = ""; // placeholder - sẽ thêm sau
const ACCENT = "hsl(27,100%,52%)";

const benefits = [
  {
    icon: Zap,
    title: "Thiết kế dựa trên cơ sinh học",
    description: "Sự kết hợp hoàn mỹ giữa khoa học cơ sinh học (Biomechanics) và nghệ thuật chế tác tối giản (Minimalist), ôm vừa vặn đôi chân, linh hoạt trong từng chuyển động.",
  },
  {
    icon: Activity,
    title: "Cải thiện phản xạ thần kinh",
    description: "Đế mỏng truyền tải tín hiệu mặt đất, giúp hệ thần kinh phản xạ tốt hơn.",
  },
  {
    icon: Compass,
    title: "Hỗ trợ dáng đi tự nhiên",
    description: "Thiết kế zero-drop (đế phẳng) và mũi giày rộng (wide box toe) giúp cơ thể tự căn chỉnh tư thế khi di chuyển.",
  },
  {
    icon: PersonStanding,
    title: "Giảm nguy cơ té ngã trong luyện tập",
    description: "Tăng cường cảm nhận mặt đất và phản xạ thăng bằng, hạn chế chấn thương khi luyện tập các bài tập luyện chuyên biệt.",
  },
];

const ProductApollo = () => {
  return (
  <Layout>
    {/* Hero Section - cloned from Lucy */}
    <section className="relative overflow-hidden -mt-16 lg:-mt-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[70vh]">
        <div className="flex items-center animate-fade-up px-4 sm:px-6 lg:px-8 xl:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pt-32 sm:pt-40 lg:pt-52 pb-6 sm:pb-8 lg:pb-20">
          <div>
            <p className="text-sm sm:text-base font-body uppercase tracking-widest mb-3 text-muted-foreground">
              Kinis Apollo Pro
            </p>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              Giày tập luyện{" "}
              <br className="sm:hidden" />
              <span style={{ color: ACCENT }}>chuyên biệt</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-md">
              Tăng cường hiệu suất luyện tập tối đa
            </p>
            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start items-start gap-2 sm:gap-3 lg:gap-2">
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
        <div className="animate-fade-up [animation-delay:150ms] self-end">
          <img src={heroApollo} alt="Kinis Apollo Pro" className="w-full h-auto block max-h-[60vh] object-contain lg:max-h-none" />
        </div>
      </div>
    </section>

    {/* Why Kinis Apollo Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,98%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Lý do bạn nên chọn <span style={{ color: ACCENT }}>Kinis Apollo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Apollo giải phóng sức mạnh tự nhiên của bàn chân, tạo ra một bệ đỡ vững vàng giúp tối ưu hóa toàn bộ hệ thống cơ xương khớp từ dưới lên trên.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
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
              src="https://kinis.vn/wp-content/uploads/2026/05/apollo-rotate.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md rounded-xl"
            />
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Chất liệu</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Chất liệu <span style={{ color: ACCENT }}>cao cấp</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Kinis Apollo được chế tác từ những sợi kĩ thuật độc quyền với công nghệ dệt 360° Flex-knit. Bên trong là hệ thống lót đa tầng tự nhiên: da cao cấp kết hợp lõi bần (cork), mang đến trải nghiệm êm ái, kiểm soát nhiệt độ và tôn vinh từng bước chạm của bạn.
            </p>
            <div className="mt-8 sm:mt-10 space-y-4">
              {[
                { icon: Wind, text: "Thoáng khí và nhanh khô" },
                { icon: Feather, text: "Nhẹ và linh hoạt" },
                { icon: Shield, text: "Êm ái tuyệt đối" },
                { icon: Check, text: "Bền bỉ theo thời gian" },
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
    <ApolloColorCarousel />

    {/* Lifestyle Banner */}
    <section className="w-full">
      <img src="https://kinis.vn/wp-content/uploads/2026/05/apollo-lifestyle.png" alt="Kinis Apollo Pro Lifestyle" className="w-full block" loading="lazy" />
    </section>

    {/* Nghệ thuật trải nghiệm Section */}
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-up">
          <span className="inline-block text-xs sm:text-sm font-body font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Nghệ thuật trải nghiệm</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Sử dụng <span style={{ color: ACCENT }}>đa nhiệm</span></h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Weight, title: "Pro-Training", subtitle: "Lựa chọn số một cho các bài tập hạng nặng squat, deadlift trong phòng Gym." },
            { icon: Trophy, title: "Giày tập luyện", subtitle: "Dành cho vận động viên chuyên nghiệp với cường độ tập luyện dày đặc, hỗ trợ tăng cường sức mạnh cơ bắp trong thời gian chuẩn bị thi đấu." },
            { icon: Shirt, title: "Phong cách Lifestyle", subtitle: "Sử dụng hàng ngày với phom dáng và thiết kế hiện đại, phù hợp mang đi làm, đi chơi hay đi dạo hàng ngày." },
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
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "hsl(0,0%,65%)" }}>{item.subtitle}</p>
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
            { img: audienceGymImg, title: "Vận động viên chuyên nghiệp", desc: "Chất liệu bền và thoáng khí, thiết kế mang tinh thần \"barefoot\" bám đất ưu việt. Là lựa chọn hoàn hảo cho vận động viên chuyên nghiệp." },
            { img: audiencePostureImg, title: "Người tập Gym/Fitness", desc: "Sử dụng như đôi giày luyện tập cho các bài tập hạng nặng như squat, deadlift, weightlifting, HIT." },
            { img: audienceTrailRunnerImg, title: "Runner luyện tập trước giải chạy", desc: "Thay thế giày tập luyện tăng cường sức mạnh và sức bền cơ bắp trước các giải chạy." },
            { img: audienceFlatfeetImg, title: "Người cần cải thiện sức khỏe bàn chân", desc: "Giúp tăng cường thăng bằng và cải thiện chức năng vận động của bàn chân, đặc biệt người có bàn chân bẹt." },
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
    <TestimonialSection page="apollo" title={<>Mọi người nghĩ gì về <span style={{ color: ACCENT }}>Kinis Apollo Pro</span></>} subtitle={null} />

    {/* Quote CTA Section - Dark */}
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="mb-3" style={{ color: ACCENT }}>
          <svg className="w-10 h-10 mx-auto opacity-40" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.172 0-2.324-.566-2.917-1.179z"/></svg>
        </div>
        <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold leading-snug text-white mb-3">Kinis Apollo, hơn cả một đôi giày luyện tập</p>
        <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ color: "hsl(0,0%,60%)" }}>Apollo dẫn đầu xu hướng hiện đại, thiết kế đỉnh lưu, định hình phong cách cá nhân.</p>
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
              <p className="text-sm sm:text-base mt-1" style={{ color: "hsl(0 40% 45%)" }}>Để đảm bảo an toàn và hiệu quả tập luyện, vui lòng lưu ý:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { text: "Không sử dụng để chạy bộ đường dài" },
              { text: "Cần thời gian thích nghi với đế Pro zero-drop" },
              { text: "Không dùng khi đang có chấn thương bàn chân cấp tính" },
              { text: "Tham khảo ý kiến chuyên gia nếu có vấn đề về khớp" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ backgroundColor: "hsl(0 60% 94%)" }}>
                <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(0 70% 55%)" }} />
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

export default ProductApollo;
