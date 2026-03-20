import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoBlack from "@/assets/logo-kinis-black.png";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Câu chuyện", href: "/cau-chuyen" },
  {
    name: "Sản phẩm",
    children: [
      { name: "Kinis Lucy", href: "/san-pham/lucy" },
      { name: "Kinis Nomad", href: "/san-pham/nomad" },
    ],
  },
  { name: "Khoa học", href: "/khoa-hoc" },
  {
    name: "Đối tượng phù hợp",
    children: [
      { name: "Người luyện tập (Gym/Fitness)", href: "/doi-tuong/gym-fitness" },
      { name: "Người chạy bộ", href: "/doi-tuong/chay-bo" },
      { name: "Người bàn chân bẹt", href: "/doi-tuong/ban-chan-bet" },
    ],
  },
  { name: "FAQ", href: "/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light">("dark");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const headerHeight = 80;
      const elements = document.elementsFromPoint(window.innerWidth / 2, headerHeight);
      const section = elements.find(
        (el) => el.tagName === "SECTION" || el.tagName === "FOOTER"
      );

      if (section) {
        const bg = window.getComputedStyle(section).backgroundColor;
        const match = bg.match(/\d+/g);

        if (match) {
          const [r, g, b] = match.map(Number);
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          setHeaderTheme(luminance < 0.5 ? "dark" : "light");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const isActive = (href: string) => currentPath === href;
  const isParentActive = (children?: { href: string }[]) =>
    Boolean(children?.some((child) => isActive(child.href)));

  const isDark = headerTheme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "glass"
            : "glass-header-light"
          : "bg-transparent"
      }`}
      data-component="header"
      data-header-theme={headerTheme}
      data-header-scrolled={scrolled ? "true" : "false"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center">
            <img
              src={logoBlack}
              alt="Kinis"
              className={`h-6 lg:h-7 transition-all duration-500 ${isDark ? "brightness-0 invert" : ""}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1" data-component="navigation">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="group relative z-50"
                  data-component="dropdown"
                  data-dropdown-trigger="hover"
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      isParentActive(item.children)
                        ? "text-secondary"
                        : isDark
                          ? "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                          : "text-foreground/70 hover:text-secondary"
                    }`}
                    aria-haspopup="true"
                    data-dropdown-button
                  >
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </button>

                  <div
                    className="pointer-events-none invisible absolute left-0 top-full mt-2 w-64 translate-y-2 overflow-hidden rounded-xl bg-[hsl(0_0%_10%)] opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    data-dropdown-menu
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          isActive(child.href)
                            ? "bg-[hsl(0_0%_100%/0.1)] text-secondary"
                            : "text-[hsl(0_0%_100%/0.8)] hover:bg-[hsl(0_0%_100%/0.1)] hover:text-secondary"
                        }`}
                        role="menuitem"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-secondary"
                      : isDark
                        ? "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                        : "text-foreground/70 hover:text-secondary"
                  }`}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 -mr-2 transition-colors duration-500 ${isDark ? "text-[hsl(var(--nav-foreground))]" : "text-foreground"}`}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[hsl(var(--nav))] transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
          {navigation.map((item) =>
            item.children ? (
              <details key={item.name} className="group">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium transition-colors rounded-xl active:bg-[hsl(0_0%_100%/0.05)] [&::-webkit-details-marker]:hidden ${
                    isParentActive(item.children)
                      ? "text-secondary"
                      : "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                  }`}
                >
                  {item.name}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>

                <div className="pl-4 pb-2 space-y-0.5">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className={`block px-4 py-3 text-base transition-colors rounded-xl active:bg-[hsl(0_0%_100%/0.05)] ${
                        isActive(child.href)
                          ? "text-secondary"
                          : "text-[hsl(var(--nav-foreground))]/50 hover:text-secondary"
                      }`}
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobile}
                className={`block px-4 py-3.5 text-base font-medium rounded-xl active:bg-[hsl(0_0%_100%/0.05)] ${
                  isActive(item.href)
                    ? "text-secondary"
                    : "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                }`}
              >
                {item.name}
              </a>
            )
          )}

          {/* Mobile social / contact */}
          <div className="pt-6 mt-6 border-t border-[hsl(var(--nav-foreground))]/10">
            <a
              href="tel:+84708803573"
              className="block px-4 py-3 text-base text-[hsl(var(--nav-foreground))]/50 hover:text-secondary transition-colors"
            >
              (+84) 708 803 573
            </a>
            <a
              href="mailto:hello@kinis.com"
              className="block px-4 py-3 text-base text-[hsl(var(--nav-foreground))]/50 hover:text-secondary transition-colors"
            >
              hello@kinis.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
