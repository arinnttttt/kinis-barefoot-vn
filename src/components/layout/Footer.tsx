import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold tracking-tight mb-4">KINIS</h3>
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Lót giày công nghệ cao — nâng niu mỗi bước chân của bạn.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-secondary-foreground/40">Sản phẩm</h4>
          <ul className="space-y-2.5">
            <li><Link to="/san-pham/lucy" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Kinis Lucy</Link></li>
            <li><Link to="/san-pham/nomad" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Kinis Nomad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-secondary-foreground/40">Đối tượng</h4>
          <ul className="space-y-2.5">
            <li><Link to="/doi-tuong/gym-fitness" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Gym / Fitness</Link></li>
            <li><Link to="/doi-tuong/chay-bo" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Chạy bộ</Link></li>
            <li><Link to="/doi-tuong/ban-chan-bet" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Bàn chân bẹt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-secondary-foreground/40">Tìm hiểu</h4>
          <ul className="space-y-2.5">
            <li><Link to="/cau-chuyen" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Câu chuyện</Link></li>
            <li><Link to="/khoa-hoc" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Khoa học</Link></li>
            <li><Link to="/faq" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
        <p className="text-xs text-secondary-foreground/40">© 2026 Kinis. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
