import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="font-display text-2xl font-bold text-[hsl(var(--nav-foreground))] tracking-tight">
            KINIS
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[hsl(var(--nav-foreground))]/70 hover:text-secondary transition-colors">
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl overflow-hidden shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-[hsl(var(--nav-foreground))]/80 hover:text-secondary hover:bg-[hsl(0_0%_100%/0.06)] transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-secondary"
                      : "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[hsl(var(--nav-foreground))] p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-card overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[hsl(var(--nav-foreground))]/70"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-[hsl(var(--nav-foreground))]/50 hover:text-secondary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm font-medium ${
                      isActive(item.href) ? "text-secondary" : "text-[hsl(var(--nav-foreground))]/70 hover:text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
