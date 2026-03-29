import richmondMag from "@/assets/press/richmond-magazine.png";
import richmondBiz from "@/assets/press/richmond-bizsense.png";
import williamMary from "@/assets/press/william-mary.png";
import elevationOutdoors from "@/assets/press/elevation-outdoors.png";
import foodTravelist from "@/assets/press/food-travelist.png";
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
    className="group flex items-center justify-center p-5 sm:p-6 lg:p-8 transition-all duration-300 ease-out"
    style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", borderRight: "1px solid rgba(0,0,0,0.06)" }}
    title={item.name}
  >
    <img
      src={item.logo}
      alt={item.name}
      loading="lazy"
      width={640}
      height={512}
      className="h-10 sm:h-12 lg:h-14 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
    />
  </a>
);

const TrustedPress = () => (
  <section
    className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,100%)", isolation: "isolate" }}
    aria-labelledby="trusted-heading"
  >
    <div className="max-w-5xl mx-auto">
      {/* Desktop: 3x3 grid with center cell = text */}
      <div
        className="hidden lg:grid rounded-2xl overflow-hidden"
        style={{
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Row 1: logos 0, 1, 2 */}
        <LogoCell item={pressLogos[0]} />
        <LogoCell item={pressLogos[1]} />
        <LogoCell item={pressLogos[2]} />

        {/* Row 2: logo 3, CENTER TEXT, logo 4 */}
        <LogoCell item={pressLogos[3]} />
        <div
          className="flex flex-col items-center justify-center p-6 text-center"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
          <h2
            id="trusted-heading"
            className="font-display text-2xl font-bold leading-tight uppercase tracking-tight mb-2"
            style={{ color: "hsl(0,0%,10%)" }}
          >
            Được tin tưởng{" "}
            <span style={{ color: "hsl(27,100%,52%)" }}>tại Mỹ</span>
          </h2>
          <p className="text-sm" style={{ color: "hsl(0,0%,50%)" }}>
            Kinis đã được nhiều tờ báo uy tín tại Hoa Kỳ đưa tin
          </p>
        </div>
        <LogoCell item={pressLogos[4]} />

        {/* Row 3: logo 5, empty, empty */}
        <LogoCell item={pressLogos[5]} />
        <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", borderRight: "1px solid rgba(0,0,0,0.06)" }} />
        <div style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }} />
      </div>

      {/* Tablet & Mobile: heading on top, grid below */}
      <div className="lg:hidden">
        <h2
          className="font-display text-2xl sm:text-3xl font-bold leading-tight uppercase tracking-tight text-center mb-2 sm:mb-3"
          style={{ color: "hsl(0,0%,10%)" }}
          aria-hidden="true"
        >
          Được tin tưởng{" "}
          <span style={{ color: "hsl(27,100%,52%)" }}>tại Mỹ</span>
        </h2>
        <p
          className="text-center text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto"
          style={{ color: "hsl(0,0%,50%)" }}
        >
          Kinis đã được nhiều tờ báo uy tín tại Hoa Kỳ đưa tin
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(0,0,0,0.06)" }}
        >
          {pressLogos.map((item) => (
            <LogoCell key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedPress;
