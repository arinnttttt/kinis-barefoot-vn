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

const TrustedPress = () => (
  <section
    className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{ backgroundColor: "hsl(0,0%,100%)", isolation: "isolate" }}
    aria-labelledby="trusted-heading"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="trusted-heading"
        className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight uppercase tracking-tight text-center mb-3 sm:mb-4"
        style={{ color: "hsl(0,0%,10%)" }}
      >
        Được tin tưởng{" "}
        <span style={{ color: "hsl(27,100%,52%)" }}>tại Mỹ</span>
      </h2>
      <p
        className="text-center text-sm sm:text-base mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto"
        style={{ color: "hsl(0,0%,50%)" }}
      >
        Kinis đã được nhiều tờ báo và tổ chức uy tín tại Hoa Kỳ đưa tin
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-5 items-center">
        {pressLogos.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-4 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 ease-out"
            style={{
              backgroundColor: "hsl(0,0%,98%)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
            title={item.name}
          >
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              width={640}
              height={512}
              className="h-8 sm:h-10 lg:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedPress;
