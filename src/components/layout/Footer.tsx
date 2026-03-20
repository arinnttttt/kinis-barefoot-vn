import logoBlack from "@/assets/logo-kinis-black.png";
import zaloIcon from "@/assets/zalo-icon.svg";
import { Phone, Mail } from "lucide-react";

const sitemapLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Câu chuyện", href: "/cau-chuyen" },
  { label: "Kinis Lucy", href: "/san-pham/lucy" },
  { label: "Kinis Nomad", href: "/san-pham/nomad" },
  { label: "Khoa học", href: "/khoa-hoc" },
  { label: "Người luyện tập", href: "/doi-tuong/gym-fitness" },
  { label: "Người chạy bộ", href: "/doi-tuong/chay-bo" },
  { label: "Người bàn chân bẹt", href: "/doi-tuong/ban-chan-bet" },
  { label: "FAQ", href: "/faq" },
];

const Footer = () => (
  <footer className="relative bg-[hsl(var(--nav))] text-[hsl(var(--nav-foreground))]">
    {/* Angled top edge */}
    <div className="absolute -top-16 left-0 right-0 h-16 bg-[hsl(var(--nav))] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
      {/* Top row: Logo + tagline | Social icons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src={logoBlack} alt="Kinis" className="h-8 brightness-0 invert" />
          </a>
          <span className="hidden sm:block text-[hsl(var(--nav-foreground))]/30">/</span>
          <p className="hidden sm:block text-base font-display text-[hsl(var(--nav-foreground))]/50">
            Hệ sinh thái chăm sóc sức khỏe vận động
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://zalo.me/kinis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Zalo"
          >
            <img src={zaloIcon} alt="Zalo" className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/KinisAi.VN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--nav-foreground))]/50 hover:text-secondary transition-colors"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main content: Sitemap | Contact | About */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10 border-t border-[hsl(var(--nav-foreground))]/10">
        {/* Sitemap col 1 */}
        <div>
          <h4 className="font-body font-semibold text-sm mb-5">Khám phá</h4>
          <ul className="space-y-2.5">
            {sitemapLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                  › {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sitemap col 2 */}
        <div>
          <h4 className="font-body font-semibold text-sm mb-5 invisible">‎</h4>
          <ul className="space-y-2.5">
            {sitemapLinks.slice(5).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                  › {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body font-semibold text-sm mb-5">Liên hệ</h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+84708803573" className="flex items-center gap-3 text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                (+84) 708 803 573
              </a>
            </li>
            <li>
              <a href="mailto:hello@kinis.com" className="flex items-center gap-3 text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                hello@kinis.com
              </a>
            </li>
          </ul>
        </div>

        {/* Tagline */}
        <div>
          <h4 className="font-body font-semibold text-sm mb-5">Về Kinis</h4>
          <p className="text-sm text-[hsl(var(--nav-foreground))]/50 leading-relaxed">
            Hơn cả một đôi giày, đó là sức khỏe vận động, giúp bàn chân tự chữa lành thông qua vận động tự nhiên.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-[hsl(var(--nav-foreground))]/10 text-center">
        <p className="text-xs text-[hsl(var(--nav-foreground))]/30">
          © {new Date().getFullYear()} Kinis. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
