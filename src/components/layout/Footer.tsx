import logoBlack from "@/assets/logo-kinis-black.png";
import zaloLogo from "@/assets/zalo-logo.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-[hsl(var(--nav))] text-[hsl(var(--nav-foreground))]">
    {/* Angled top edge */}
    

    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
      {/* Top row: Logo + tagline | Social icons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src={logoBlack} alt="Kinis" className="h-8 brightness-0 invert" />
          </a>
          <span className="hidden sm:block text-[hsl(var(--nav-foreground))]/30">
            /
          </span>
          <p className="hidden sm:block text-sm text-[hsl(var(--nav-foreground))]/50">
            Hệ sinh thái chăm sóc sức khỏe vận động
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://zalo.me/kinis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--nav-foreground))]/50 hover:text-secondary transition-colors"
            aria-label="Zalo"
          >
            <svg viewBox="0 0 48 48" className="w-5 h-5 fill-current">
              <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm11.14 16.32c-.34 0-.674.034-1.008.084a11.96 11.96 0 0 0-6.13-5.56 11.88 11.88 0 0 0-8.14-.44c-2.86.936-5.19 2.936-6.59 5.556a11.88 11.88 0 0 0-.94 7.94 11.94 11.94 0 0 0 4.32 6.92c-.24.74-.78 2.42-.9 2.78-.16.44-.32.44-.58.26-1.78-1.2-2.88-2.06-4.32-3.44a.62.62 0 0 0-.86 0c-1.56 1.56-2.58 2.5-2.58 2.5s-.26.24 0 .6c.26.36 2.4 2.96 5.76 4.7 3.36 1.74 6.14 1.74 6.14 1.74h1.12c5.12-.2 9.68-2.7 12.48-6.86a14.16 14.16 0 0 0 2.2-10.3 6.84 6.84 0 0 0-1.86-4.48z" />
            </svg>
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

      {/* Main content: Quick Links | Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {/* Quick Links */}
        <div>
          <h4 className="font-body font-semibold text-sm mb-5">Liên kết nhanh</h4>
          <ul className="space-y-3">
            <li>
              <a href="/san-pham/lucy" className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                › Kinis Lucy
              </a>
            </li>
            <li>
              <a href="/san-pham/nomad" className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                › Kinis Nomad
              </a>
            </li>
            <li>
              <a href="/khoa-hoc" className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                › Khoa học
              </a>
            </li>
            <li>
              <a href="/faq" className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-secondary transition-colors">
                › FAQ
              </a>
            </li>
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
