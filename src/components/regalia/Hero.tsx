import React from "react";
import { GoldDivider } from "./GoldDivider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const phoneVideo = "/heropage/phonehome.mp4";
const hotelVideo = "/heropage/hotel.mp4";

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Loop back to start if we exceed 108 seconds
      if (video.currentTime >= 108) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block h-full w-full object-cover scale-105 slow-zoom"
        >
          <source src={`${hotelVideo}#t=0,108`} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="md:hidden h-full w-full object-cover scale-105 slow-zoom"
        >
          <source src="/video/spa.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/90" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex flex-col justify-start md:pt-24 lg:pt-32 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <GoldDivider width="40px" />
                <span className="eyebrow uppercase tracking-[0.4em] text-gold/90 font-medium">Hotel Vishnu Empire</span>
              </div>
              <h1 className="font-serif-display text-soft font-light leading-[1.1] tracking-[0.02em] text-[clamp(1.6rem,4.5vw,5rem)] uppercase max-w-lg">
                Rewa's Premier <br />
                <span className="text-gold italic normal-case tracking-normal">Luxury Destination</span>
              </h1>
            </motion.div>
          </div>

          <div className="flex flex-col items-center text-center lg:pt-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-soft-dim/90 text-base md:text-lg leading-relaxed font-light tracking-wide max-w-lg mb-12 italic"
            >
              "Enter a sanctuary where the golden era of Rewa lives on.
              From the storied halls to our sun-drenched gardens,
              discover an escape curated for those who seek the extraordinary."
            </motion.p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/book" className="btn-gold">
                <span>Book a Stay</span>
              </Link>
              <Link to="/celebrations" className="btn-ghost-gold">
                <span>Book Banquet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="small-caps text-soft/60 text-[0.65rem]">Scroll</span>
        <span className="relative block w-px h-14 bg-soft/15 scroll-cue" />
      </div>
    </section>
  );
}
