import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoBlack from "@/assets/logo-kinis-black.png";

const navigation = [
  { name: "Trang chủ", href: "/#/" },
  { name: "Câu chuyện", href: "/#/cau-chuyen" },
  {
    name: "Sản phẩm",
    children: [
      { name: "Kinis Lucy", href: "/#/san-pham/lucy" },
      { name: "Kinis Nomad", href: "/#/san-pham/nomad" },
    ],
  },
  { name: "Khoa học", href: "/#/khoa-hoc" },
  {
    name: "Đối tượng phù hợp",
    children: [
      { name: "Người luyện tập (Gym/Fitness)", href: "/#/doi-tuong/gym-fitness" },
      { name: "Người chạy bộ", href: "/#/doi-tuong/chay-bo" },
      { name: "Người bàn chân bẹt", href: "/#/doi-tuong/ban-chan-bet" },
    ],
  },
  { name: "FAQ", href: "/#/faq" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light">("dark");

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

  const currentHash = typeof window !== "undefined" ? window.location.hash : "#/";
  const isActive = (href: string) => {
    const hashPart = href.startsWith("/#") ? href.slice(1) : href;
    return currentHash === hashPart || (hashPart === "#/" && (currentHash === "" || currentHash === "#"));
  };
  const isParentActive = (children?: { href: string }[]) =>
    Boolean(children?.some((child) => isActive(child.href)));

  const isDark = headerTheme === "dark";

  // When mobile menu is open, force light bar style (white bg, dark text)
  const barIsDark = mobileOpen ? false : isDark;

  return (
    <>
      {/* Header bar - no backdrop-filter issues */}
      <header
        className="fixed top-0 left-0 right-0 z-[9999]"
        style={{
          backgroundColor: mobileOpen
            ? "#000000"
            : scrolled
              ? barIsDark
                ? "rgba(0,0,0,0.75)"
                : "rgba(255,255,255,0.85)"
              : "transparent",
          backdropFilter: !mobileOpen && scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: !mobileOpen && scrolled ? "blur(16px)" : "none",
          transition: "background-color 0.5s, backdrop-filter 0.5s",
        }}
        data-component="header"
        data-header-theme={headerTheme}
        data-header-scrolled={scrolled ? "true" : "false"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/#/" className="flex items-center">
              <img
                src={logoBlack}
                alt="Kinis"
                className="h-6 lg:h-7"
                style={{
                  filter: (mobileOpen ? true : barIsDark) ? "brightness(0) invert(1)" : "none",
                  transition: "filter 0.5s",
                }}
              />
            </a>

            {/* Desktop nav */}
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
                      className={`header-nav-link header-submenu-trigger flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-medium`}
                      style={{ color: isParentActive(item.children) ? "hsl(27,100%,52%)" : barIsDark ? "#ffffff" : "#1a1a1a", transition: "color 0.5s" }}
                      aria-haspopup="true"
                      data-dropdown-button
                    >
                      {item.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>

                    <div
                      className="header-dropdown-panel pointer-events-none invisible absolute left-0 top-full mt-2 w-64 translate-y-2 overflow-hidden rounded-xl opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                      data-dropdown-menu
                      role="menu"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="header-dropdown-link block px-4 py-3 text-sm lg:text-base"
                          data-active={isActive(child.href) ? "true" : "false"}
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
                    className="header-nav-link px-4 py-2 text-sm lg:text-base font-medium"
                    style={{ color: isActive(item.href) ? "hsl(27,100%,52%)" : barIsDark ? "#ffffff" : "#1a1a1a", transition: "color 0.5s" }}
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 -mr-2"
              style={{
                color: (mobileOpen ? true : barIsDark) ? "#ffffff" : "#1a1a1a",
                transition: "color 0.5s",
              }}
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - OUTSIDE header to avoid backdrop-filter containing block */}
      <div
        className="lg:hidden fixed inset-0 z-[9998]"
        style={{
          top: "64px",
          backgroundColor: "#000000",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <div className="h-full overflow-y-auto px-4 sm:px-6 py-6 space-y-1">
          {navigation.map((item) =>
            item.children ? (
              <details key={item.name} className="group">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl [&::-webkit-details-marker]:hidden"
                  style={{ color: isParentActive(item.children) ? "hsl(27,100%,52%)" : "rgba(255,255,255,0.7)" }}
                >
                  {item.name}
                  <ChevronDown className="w-5 h-5 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="pl-4 pb-2 space-y-0.5">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      onClick={closeMobile}
                      className="block px-4 py-3 text-base rounded-xl"
                      style={{
                        color: isActive(child.href) ? "hsl(27,100%,52%)" : "rgba(255,255,255,0.5)",
                        transition: "color 0.2s",
                      }}
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
                className="block px-4 py-3.5 text-base font-medium rounded-xl"
                style={{
                  color: isActive(item.href) ? "hsl(27,100%,52%)" : "rgba(255,255,255,0.7)",
                  transition: "color 0.2s",
                }}
              >
                {item.name}
              </a>
            )
          )}

          <div className="pt-6 mt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <a
              href="tel:+84708803573"
              className="block px-4 py-3 text-base"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              (+84) 708 803 573
            </a>
            <a
              href="mailto:hello@kinis.com"
              className="block px-4 py-3 text-base"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              hello@kinis.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
