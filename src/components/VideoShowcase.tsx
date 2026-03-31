import { useEffect, useRef, useState } from "react";
import videoFrame from "@/assets/video-frame.png";

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.volume = 0.1;

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

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(!video.muted ? true : false);
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6"
      style={{ backgroundColor: "hsl(0,0%,98%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="relative" style={{ padding: "0" }}>
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover rounded-sm"
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/kinis-showcase.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Frame overlay */}
          <img
            src={videoFrame}
            alt=""
            className="absolute inset-0 w-full h-full pointer-events-none"
            draggable={false}
          />

          {/* Mute/Unmute button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              color: "#ffffff",
            }}
            aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
