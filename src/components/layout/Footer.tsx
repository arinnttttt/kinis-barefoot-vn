import logoBlack from "@/assets/logo-kinis-black.png";
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
            <svg viewBox="0 0 1024 1024" className="w-5 h-5 fill-current">
              <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zM364.8 636.3c-11.1 0-62.8-1.6-96.2-43.5-19.6-24.6-29.1-57.3-29.1-100.1 0-125.7 109.1-271.4 295.1-271.4 117.4 0 214.7 75.3 214.7 186.1 0 129.5-112.3 232.3-225.6 232.3-29 0-50-6.6-60.6-11.5l-17.3 55c-5.2 15.6-19.4 15.6-28.1 1.7L364.8 636.3zM793 625.4c-48.9 72.5-132 131.8-233.2 150.8l-43.7 7.7h-34.4c-12.4 0-92.3-3.3-153.4-45.2-29-19.9-53.1-45.8-71.5-77 0 0 14.1-12.5 44.9-43.5 5.1-5.1 12.9-5.4 18.3 0 24.3 23.3 42.7 37.4 71.6 57.1 5.7 3.9 9.7 4.1 12.9-5.1 2.5-7.5 14.4-43.5 19-57.4 41.3 22.3 93.1 33.7 140.3 33.7 147.9 0 287.3-113 287.3-285.9 0-21.7-3-42.6-8.4-62.5 7.2 1 14.3 2.3 21.3 3.7 53.2 44 72.2 99.3 72.2 140.7 0 74.6-29 148.8-62.5 183.4l-80.4-.5z" />
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
