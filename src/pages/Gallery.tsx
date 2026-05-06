import { Navbar } from "@/components/regalia/Navbar";
import { Footer } from "@/components/regalia/Footer";
import { LuxuryGallery } from "@/components/regalia/LuxuryGallery";
import { motion } from "framer-motion";
import { CustomCursor } from "@/components/regalia/CustomCursor";
import { BookingBar } from "@/components/regalia/BookingBar";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-ink text-soft">
      <CustomCursor />
      <Navbar />

      <main>
        {/* Gallery Hero */}
        <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="/src/assets/palace_bg.png"
              className="w-full h-full object-cover opacity-50 scale-105"
              alt="Gallery Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow text-gold mb-6 block"
            >
              Vishnu Empire
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif-display text-[clamp(1.8rem,4.5vw,3rem)] uppercase tracking-widest leading-[0.9]"
            >
              Visual <br /><span className="italic font-light text-gold normal-case">Archives</span>
            </motion.h1>
          </div>
        </section>

        {/* Gallery Grid */}
        <LuxuryGallery showTitle={false} showExploreButton={false} />

        {/* Instagram/Social Call to Action */}
        <section className="pt-32 pb-2 border-t border-gold/10 bg-ink-deep/30">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="font-serif-display text-3xl md:text-4xl text-soft mb-8">Share Your Moments</h3>
            <p className="text-soft/60 font-light mb-12 max-w-xl mx-auto">
              Follow our journey and share your own experiences at Vishnu Empire using #vishnuempireRewa
            </p>
            <div className="flex justify-center gap-8">
              <a href="https://www.instagram.com/hotelvishnuempire/" target="_blank" rel="noopener noreferrer">
                <button className="small-caps text-gold hover:text-soft transition-colors tracking-[0.3em] text-xs">Instagram</button>
              </a>
              <button className="small-caps text-gold hover:text-soft transition-colors tracking-[0.3em] text-xs">Facebook</button>
              <button className="small-caps text-gold hover:text-soft transition-colors tracking-[0.3em] text-xs">Pinterest</button>
            </div>
          </div>
        </section>
      </main>

      <BookingBar />
      <Footer />
    </div>
  );
};

export default GalleryPage;
