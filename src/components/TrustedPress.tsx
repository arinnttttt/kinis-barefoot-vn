import richmondMag from "@/assets/press/richmond-magazine.png";
import richmondBiz from "@/assets/press/richmond-bizsense.png";
import williamMary from "@/assets/press/william-mary.png";
import elevationOutdoors from "@/assets/press/elevation-outdoors.jpg";
import foodTravelist from "@/assets/press/food-travelist.jpg";
import vueNj from "@/assets/press/vue-nj.png";

const pressLogos = [
  {
    name: "Richmond Magazine",
    logo: richmondMag,
    href: "https://richmondmagazine.com/news/features/from-the-ground-up/",
  },
  {
    name: "Richmond BizSense",
    logo: richmondBiz,
    href: "https://richmondbizsense.com/2018/06/18/richmond-startup-launches-fresh-take-workout-socks/",
  },
  {
    name: "William & Mary Mason School",
    logo: williamMary,
    href: "https://mason.wm.edu/news/2019/treading-a-path-to-success-back-to-basics.php",
  },
  {
    name: "Elevation Outdoors",
    logo: elevationOutdoors,
    href: "https://www.elevationoutdoors.com/go-outside/the-ultimate-2020-outdoor-gift-guide/",
  },
  {
    name: "Food Travelist",
    logo: foodTravelist,
    href: "https://foodtravelist.com/ultimate-holiday-gifts-for-food-travel-lovers/",
  },
  {
    name: "VUE NJ",
    logo: vueNj,
    href: "https://vuenj.com/luxury-gift-guide-the-best-gifts-of-2020/",
  },
];

const LogoCell = ({ item }: { item: typeof pressLogos[number] }) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center aspect-square p-3 transition-all duration-300 ease-out"
    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    title={item.name}
  >
    <img
      src={item.logo}
      alt={item.name}
      loading="lazy"
      className="w-[80%] h-[80%] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 invert brightness-200"
    />
  </a>
);

const TextCell = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex flex-col items-center justify-center p-6 sm:p-8 text-center ${className}`}
    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
  >
    <h2
      id="trusted-heading"
      className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight uppercase tracking-tight mb-2"
      style={{ color: "#ffffff" }}
    >
      Được tin tưởng{" "}
      <span style={{ color: "hsl(27,100%,52%)" }}>tại Mỹ</span>
    </h2>
    <p className="text-xs sm:text-sm lg:text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
      Kinis đã được nhiều tờ báo uy tín tại Hoa Kỳ đưa tin
    </p>
  </div>
);

const TrustedPress = () => (
  <section
    className="overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,5%)", isolation: "isolate" }}
    aria-labelledby="trusted-heading"
  >
    <div className="max-w-6xl mx-auto">
      {/* Desktop: 4 cols — row1: 4 logos, row2: text(2col) + 2 logos */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        <LogoCell item={pressLogos[0]} />
        <LogoCell item={pressLogos[1]} />
        <LogoCell item={pressLogos[2]} />
        <LogoCell item={pressLogos[3]} />
        <div className="col-span-2">
          <TextCell className="h-full" />
        </div>
        <LogoCell item={pressLogos[4]} />
        <LogoCell item={pressLogos[5]} />
      </div>

      {/* Mobile & Tablet: row1: 3 logos, row2: text full, row3: 3 logos */}
      <div className="lg:hidden grid grid-cols-3">
        <LogoCell item={pressLogos[0]} />
        <LogoCell item={pressLogos[1]} />
        <LogoCell item={pressLogos[2]} />
        <div className="col-span-3">
          <TextCell />
        </div>
        <LogoCell item={pressLogos[3]} />
        <LogoCell item={pressLogos[4]} />
        <LogoCell item={pressLogos[5]} />
      </div>
    </div>
  </section>
);

export default TrustedPress;
