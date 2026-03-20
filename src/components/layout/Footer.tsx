import logoBlack from "@/assets/logo-kinis-black.png";
import { Phone, Mail } from "lucide-react";

const contactItems = [
  {
    label: "Zalo OA",
    href: "https://zalo.me/kinis",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169 0-.337.017-.504.042a5.98 5.98 0 0 0-3.065-2.78 5.94 5.94 0 0 0-4.07-.22C8.476 5.67 7.31 6.67 6.61 7.98a5.94 5.94 0 0 0-.47 3.97 5.97 5.97 0 0 0 2.16 3.46c-.12.37-.39 1.21-.45 1.39-.08.22-.16.22-.29.13-.89-.6-1.44-1.03-2.16-1.72a.31.31 0 0 0-.43 0c-.78.78-1.29 1.25-1.29 1.25s-.13.12 0 .3c.13.18 1.2 1.48 2.88 2.35 1.68.87 3.07.87 3.07.87h.56c2.56-.1 4.84-1.35 6.24-3.43a7.08 7.08 0 0 0 1.1-5.15 3.42 3.42 0 0 0-.93-2.24z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@kinis.com",
    detail: "hello@kinis.com",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    label: "Hotline",
    href: "tel:+84708803573",
    detail: "(+84) 708 803 573",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    label: "Facebook Kinis AI Vietnam",
    href: "https://www.facebook.com/KinisAi.VN",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="bg-[hsl(var(--nav))] text-[hsl(var(--nav-foreground))]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      {/* Contact row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-[hsl(var(--nav-foreground))]/10 hover:border-secondary/40 hover:bg-[hsl(var(--nav-foreground))]/5 transition-colors"
          >
            <span className="text-[hsl(var(--nav-foreground))]/60 group-hover:text-secondary transition-colors">
              {item.icon}
            </span>
            <span className="font-body text-sm font-semibold">{item.label}</span>
            {item.detail && (
              <span className="text-xs text-[hsl(var(--nav-foreground))]/50">{item.detail}</span>
            )}
          </a>
        ))}
      </div>

      {/* Logo + tagline */}
      <div className="flex flex-col items-center text-center gap-4 pt-8 border-t border-[hsl(var(--nav-foreground))]/10">
        <a href="/">
          <img src={logoBlack} alt="Kinis" className="h-8 brightness-0 invert" />
        </a>
        <p className="text-sm text-[hsl(var(--nav-foreground))]/50 max-w-lg leading-relaxed">
          Kinis — Hơn cả một đôi giày, đó là sức khỏe vận động, giúp bàn chân tự chữa lành thông qua vận động tự nhiên.
        </p>
        <p className="text-xs text-[hsl(var(--nav-foreground))]/30 mt-4">
          © {new Date().getFullYear()} Kinis. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
