import { useEffect, useRef } from "react";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6"
      style={{ backgroundColor: "hsl(0,0%,6%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Sporty frame */}
        <div className="relative p-[3px] sm:p-1 rounded-2xl" style={{
          background: "linear-gradient(135deg, hsl(27,100%,52%), hsl(27,100%,40%), hsl(0,0%,20%), hsl(27,100%,40%), hsl(27,100%,52%))",
        }}>
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8" style={{
            borderTop: "3px solid hsl(27,100%,52%)",
            borderLeft: "3px solid hsl(27,100%,52%)",
            borderTopLeftRadius: "16px",
          }} />
          <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8" style={{
            borderTop: "3px solid hsl(27,100%,52%)",
            borderRight: "3px solid hsl(27,100%,52%)",
            borderTopRightRadius: "16px",
          }} />
          <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8" style={{
            borderBottom: "3px solid hsl(27,100%,52%)",
            borderLeft: "3px solid hsl(27,100%,52%)",
            borderBottomLeftRadius: "16px",
          }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8" style={{
            borderBottom: "3px solid hsl(27,100%,52%)",
            borderRight: "3px solid hsl(27,100%,52%)",
            borderBottomRightRadius: "16px",
          }} />

          {/* Tick marks - top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-8 sm:w-12 h-[3px]" style={{ backgroundColor: "hsl(27,100%,52%)" }} />
          </div>

          {/* Inner container */}
          <div className="relative rounded-xl overflow-hidden" style={{
            backgroundColor: "hsl(0,0%,8%)",
            boxShadow: "inset 0 2px 20px rgba(0,0,0,0.5), 0 0 40px rgba(249,115,22,0.08)",
          }}>
            {/* Subtle inner glow lines */}
            <div className="absolute inset-0 pointer-events-none rounded-xl" style={{
              border: "1px solid rgba(249,115,22,0.15)",
            }} />
            
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/kinis-showcase.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Small dot accents */}
          <div className="absolute top-1/2 right-1 sm:right-1.5 -translate-y-1/2 flex flex-col gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(27,100%,52%)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(27,100%,52%)", opacity: 0.5 }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(27,100%,52%)", opacity: 0.3 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
