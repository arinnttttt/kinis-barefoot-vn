import { useEffect, useRef } from "react";
import videoFrame from "@/assets/video-frame.png";

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
      style={{ backgroundColor: "hsl(0,0%,98%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Frame overlay container */}
        <div className="relative">
          {/* Video inside frame */}
          <div className="relative" style={{ padding: "0" }}>
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover rounded-sm"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/kinis-showcase.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Frame image on top */}
          <img
            src={videoFrame}
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
