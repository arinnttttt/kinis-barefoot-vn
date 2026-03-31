import zaloIcon from "@/assets/zalo-icon.svg";
import { Phone, Mail } from "lucide-react";

const logoWhite = "https://kinis.vn/wp-content/uploads/2026/03/logo-kinis-white.png";

const sitemapLinks = [
  { label: "Trang chủ", href: "/#/" },
  { label: "Câu chuyện", href: "/#/cau-chuyen" },
  { label: "Kinis Lucy", href: "/#/san-pham/lucy" },
  { label: "Kinis Nomad", href: "/#/san-pham/nomad" },
  { label: "Khoa học", href: "/#/khoa-hoc" },
  { label: "Người luyện tập", href: "/#/doi-tuong/gym-fitness" },
  { label: "Người chạy bộ", href: "/#/doi-tuong/chay-bo" },
  { label: "Người bàn chân bẹt", href: "/#/doi-tuong/ban-chan-bet" },
  { label: "FAQ", href: "/#/faq" },
];

const Footer = () => (
  <>
    {/* Angled transition — in-flow SVG block, not absolute positioned.
        Hardcoded fill #000 instead of CSS variable for WPConvert compatibility. */}
    <div className="w-full leading-none -mb-px" style={{ background: "transparent" }}>
      <svg
        className="block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "clamp(40px, 5vw, 80px)" }}
      >
        <polygon points="1440,0 1440,80 0,80" fill="#000000" />
      </svg>
    </div>

    <footer style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">
        {/* Top row: Logo + tagline | Social icons */}
        <div className="flex flex-col gap-5 pb-8 sm:pb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="/#/">
                  <img src={logoWhite} alt="Kinis" className="h-9 sm:h-12" />
                </a>
                <span className="hidden sm:block text-xl" style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
                <p className="hidden sm:block text-lg md:text-xl font-display" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Hệ sinh thái chăm sóc sức khỏe vận động
                </p>
              </div>
              {/* Mobile tagline */}
              <p className="sm:hidden text-sm font-display" style={{ color: "rgba(255,255,255,0.5)" }}>
                Hệ sinh thái chăm sóc sức khỏe vận động
              </p>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Hơn cả một đôi giày, đó là sức khỏe vận động, giúp bàn chân tự chữa lành thông qua vận động tự nhiên.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://zalo.me/kinis"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social transition-all"
                style={{ color: "rgba(255,255,255,0.5)" }}
                aria-label="Zalo"
              >
                <img src={zaloIcon} alt="Zalo" className="w-6 h-6 transition-all" />
              </a>
              <a
                href="https://www.facebook.com/KinisAi.VN"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social transition-all"
                style={{ color: "rgba(255,255,255,0.5)" }}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-8 sm:py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Sitemap col 1 */}
          <div>
            <h4 className="font-body font-semibold text-sm mb-4 sm:mb-5" style={{ color: "#ffffff" }}>Khám phá</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {sitemapLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm footer-link transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap col 2 */}
          <div>
            <h4 className="font-body font-semibold text-sm mb-4 sm:mb-5 md:invisible" style={{ color: "#ffffff" }}>‎</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {sitemapLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm footer-link transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    › {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm mb-4 sm:mb-5" style={{ color: "#ffffff" }}>Liên hệ</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:+84708803573" className="flex items-center gap-3 text-sm footer-link transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Phone className="w-4 h-4 shrink-0" />
                  (+84) 708 803 573
                </a>
              </li>
              <li>
                <a href="mailto:hello@kinis.com" className="flex items-center gap-3 text-sm footer-link transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@kinis.com
                </a>
              </li>
            </ul>
          </div>

          {/* Đặt mua */}
          <div>
            <h4 className="font-body font-semibold text-sm mb-4 sm:mb-5" style={{ color: "#ffffff" }}>Đặt mua tại</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                › Hệ thống phân phối Bye Béo
              </li>
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                › Kinis Balance Hub Buôn Mê Thuột
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Kinis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;