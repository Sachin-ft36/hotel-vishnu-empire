import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const GALLERY_IMAGES = [
  // Teaser Images (First 4 for Home Page - Strictly Unique)
  { id: 1, src: "/vishnuempire/Fecade/1.avif", category: "Exterior" },
  { id: 2, src: "/vishnuempire/room/room1.webp", category: "Rooms" },
  { id: 3, src: "/vishnuempire/restaurant/1.avif", category: "Dining" },
  { id: 4, src: '/vishnuempire/banquet/1.avif', category: 'Banquets' },

  // Remaining Unique Images
  { id: 5, src: '/vishnuempire/banquet/2.webp', category: 'Banquets' },
  { id: 6, src: '/vishnuempire/banquet/3.avif', category: 'Banquets' },
  { id: 7, src: '/vishnuempire/common_area/1.webp', category: 'Interior' },
  { id: 8, src: '/vishnuempire/common_area/2.jpg', category: 'Interior' },
  { id: 9, src: '/vishnuempire/common_area/3.avif', category: 'Interior' },
  { id: 10, src: '/vishnuempire/common_area/4.jpg', category: 'Interior' },
  { id: 11, src: '/vishnuempire/common_area/5.jpg', category: 'Interior' },
  { id: 12, src: '/vishnuempire/common_area/6.jpg', category: 'Interior' },
  { id: 13, src: '/vishnuempire/common_area/7.webp', category: 'Interior' },
  { id: 14, src: '/vishnuempire/common_area/8.webp', category: 'Interior' },
  { id: 15, src: '/vishnuempire/common_area/9.webp', category: 'Interior' },
  { id: 16, src: '/vishnuempire/confress_area/1.avif', category: 'Banquets' },
  { id: 17, src: '/vishnuempire/Entrance/a.avif', category: 'Exterior' },
  { id: 18, src: '/vishnuempire/Entrance/b.webp', category: 'Exterior' },
  { id: 19, src: '/vishnuempire/Entrance/c.webp', category: 'Exterior' },
  { id: 20, src: '/vishnuempire/Entrance/d.webp', category: 'Exterior' },
  { id: 21, src: '/vishnuempire/Entrance/e.avif', category: 'Exterior' },
  { id: 22, src: '/vishnuempire/parking/1.avif', category: 'Exterior' },
  { id: 23, src: '/vishnuempire/reception/1.avif', category: 'Interior' },
  { id: 24, src: '/vishnuempire/reception/2.avif', category: 'Interior' },
  { id: 25, src: '/vishnuempire/reception/3.avif', category: 'Interior' },
  { id: 26, src: '/vishnuempire/reception/4.avif', category: 'Interior' },
  { id: 27, src: '/vishnuempire/restaurant/2.webp', category: 'Dining' },
  { id: 28, src: '/vishnuempire/room/room10.jpg', category: 'Rooms' },
  { id: 29, src: '/vishnuempire/room/room11.avif', category: 'Rooms' },
  { id: 30, src: '/vishnuempire/room/room12.avif', category: 'Rooms' },
  { id: 31, src: '/vishnuempire/room/room13.avif', category: 'Rooms' },
  { id: 32, src: '/vishnuempire/room/room14.jpg', category: 'Rooms' },
  { id: 33, src: '/vishnuempire/room/room15.avif', category: 'Rooms' },
  { id: 34, src: '/vishnuempire/room/room16.avif', category: 'Rooms' },
  { id: 35, src: '/vishnuempire/room/room17.avif', category: 'Rooms' },
  { id: 36, src: '/vishnuempire/room/room18.avif', category: 'Rooms' },
  { id: 37, src: '/vishnuempire/room/room19.jpg', category: 'Rooms' },
  { id: 38, src: '/vishnuempire/room/room2.avif', category: 'Rooms' },
  { id: 39, src: '/vishnuempire/room/room20.avif', category: 'Rooms' },
  { id: 40, src: '/vishnuempire/room/room21.jpg', category: 'Rooms' },
  { id: 41, src: '/vishnuempire/room/room22.avif', category: 'Rooms' },
  { id: 42, src: '/vishnuempire/room/room23.jpg', category: 'Rooms' },
  { id: 43, src: '/vishnuempire/room/room24.avif', category: 'Rooms' },
  { id: 44, src: '/vishnuempire/room/room25.avif', category: 'Rooms' },
  { id: 45, src: '/vishnuempire/room/room26.webp', category: 'Rooms' },
  { id: 46, src: '/vishnuempire/room/room27.webp', category: 'Rooms' },
  { id: 47, src: '/vishnuempire/room/room28.avif', category: 'Rooms' },
  { id: 48, src: '/vishnuempire/room/room29.webp', category: 'Rooms' },
  { id: 49, src: '/vishnuempire/room/room3.avif', category: 'Rooms' },
  { id: 50, src: '/vishnuempire/room/room30.webp', category: 'Rooms' },
  { id: 51, src: '/vishnuempire/room/room31.webp', category: 'Rooms' },
  { id: 52, src: '/vishnuempire/room/room32.jpg', category: 'Rooms' },
  { id: 53, src: '/vishnuempire/room/room33.jpg', category: 'Rooms' },
  { id: 54, src: '/vishnuempire/room/room34.jpg', category: 'Rooms' },
  { id: 55, src: '/vishnuempire/room/room35.jpg', category: 'Rooms' },
  { id: 56, src: '/vishnuempire/room/room36.jpg', category: 'Rooms' },
  { id: 57, src: '/vishnuempire/room/room37.jpg', category: 'Rooms' },
  { id: 58, src: '/vishnuempire/room/room38.jpg', category: 'Rooms' },
  { id: 59, src: '/vishnuempire/room/room39.jpg', category: 'Rooms' },
  { id: 60, src: '/vishnuempire/room/room4.avif', category: 'Rooms' },
  { id: 61, src: '/vishnuempire/room/room40.jpg', category: 'Rooms' },
  { id: 62, src: '/vishnuempire/room/room41.jpg', category: 'Rooms' },
  { id: 63, src: '/vishnuempire/room/room42.jpg', category: 'Rooms' },
  { id: 64, src: '/vishnuempire/room/room43.jfif', category: 'Rooms' },
  { id: 65, src: '/vishnuempire/room/room44.jpg', category: 'Rooms' },
  { id: 66, src: '/vishnuempire/room/room45.jpg', category: 'Rooms' },
  { id: 67, src: '/vishnuempire/room/room46.jpg', category: 'Rooms' },
  { id: 68, src: '/vishnuempire/room/room47.jpg', category: 'Rooms' },
  { id: 69, src: '/vishnuempire/room/room48.jpg', category: 'Rooms' },
  { id: 70, src: '/vishnuempire/room/room49.jpg', category: 'Rooms' },
  { id: 71, src: '/vishnuempire/room/room5.avif', category: 'Rooms' },
  { id: 72, src: '/vishnuempire/room/room50.jpg', category: 'Rooms' },
  { id: 73, src: '/vishnuempire/room/room51.jpg', category: 'Rooms' },
  { id: 74, src: '/vishnuempire/room/room52.jpg', category: 'Rooms' },
  { id: 75, src: '/vishnuempire/room/room53.jpg', category: 'Rooms' },
  { id: 76, src: '/vishnuempire/room/room54.jpg', category: 'Rooms' },
  { id: 77, src: '/vishnuempire/room/room55.jpg', category: 'Rooms' },
  { id: 78, src: '/vishnuempire/room/room56.jpg', category: 'Rooms' },
  { id: 79, src: '/vishnuempire/room/room57.jpg', category: 'Rooms' },
  { id: 80, src: '/vishnuempire/room/room58.jpg', category: 'Rooms' },
  { id: 81, src: '/vishnuempire/room/room59.jpg', category: 'Rooms' },
  { id: 82, src: '/vishnuempire/room/room6.avif', category: 'Rooms' },
  { id: 83, src: '/vishnuempire/room/room60.jpg', category: 'Rooms' },
  { id: 84, src: '/vishnuempire/room/room61.jpg', category: 'Rooms' },
  { id: 85, src: '/vishnuempire/room/room62.jpg', category: 'Rooms' },
  { id: 86, src: '/vishnuempire/room/room7.webp', category: 'Rooms' },
  { id: 87, src: '/vishnuempire/room/room71.jpg', category: 'Rooms' },
  { id: 88, src: '/vishnuempire/room/room72.jpg', category: 'Rooms' },
  { id: 89, src: '/vishnuempire/room/room73.jpg', category: 'Rooms' },
  { id: 90, src: '/vishnuempire/room/room74.jpg', category: 'Rooms' },
  { id: 91, src: '/vishnuempire/room/room75.jpg', category: 'Rooms' },
  { id: 92, src: '/vishnuempire/room/room76.webp', category: 'Rooms' },
  { id: 93, src: '/vishnuempire/room/room77.webp', category: 'Rooms' },
  { id: 94, src: '/vishnuempire/room/room78.jpg', category: 'Rooms' },
  { id: 95, src: '/vishnuempire/room/room8.avif', category: 'Rooms' },
  { id: 96, src: '/vishnuempire/room/room80.jpg', category: 'Rooms' },
  { id: 97, src: '/vishnuempire/room/room81.jpg', category: 'Rooms' },
  { id: 98, src: '/vishnuempire/room/room82.jpg', category: 'Rooms' },
  { id: 99, src: '/vishnuempire/room/room9.avif', category: 'Rooms' },
  { id: 100, src: '/vishnuempire/washroom/1.avif', category: 'Interior' },
  { id: 101, src: '/vishnuempire/washroom/2.avif', category: 'Interior' },
  { id: 102, src: '/vishnuempire/washroom/3.avif', category: 'Interior' },
  { id: 103, src: '/vishnuempire/washroom/4.avif', category: 'Interior' },
  { id: 104, src: '/vishnuempire/washroom/5.avif', category: 'Interior' },
];

export const LuxuryGallery = ({
  showTitle = true,
  limit,
  showExploreButton = true,
  showFilters = true
}: {
  showTitle?: boolean;
  limit?: number;
  showExploreButton?: boolean;
  showFilters?: boolean;
}) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ["All", "Rooms", "Banquets", "Dining", "Exterior", "Interior"];

  const filteredImages = activeFilter === "All"
    ? (limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES)
    : (limit 
        ? GALLERY_IMAGES.filter((img) => img.category === activeFilter).slice(0, limit) 
        : GALLERY_IMAGES.filter((img) => img.category === activeFilter)
      );

  const selectedIdx = selectedImage !== null
    ? GALLERY_IMAGES.findIndex(img => img.id === selectedImage)
    : -1;

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedIdx === -1) return;
    let nextIdx = direction === 'next' ? selectedIdx + 1 : selectedIdx - 1;
    if (nextIdx < 0) nextIdx = GALLERY_IMAGES.length - 1;
    if (nextIdx >= GALLERY_IMAGES.length) nextIdx = 0;
    setSelectedImage(GALLERY_IMAGES[nextIdx].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") navigate('next');
      if (e.key === "ArrowLeft") navigate('prev');
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIdx]);

  return (
    <section className="pb-2 pt-0 bg-ink px-6 lg:px-12 overflow-hidden" id="gallery">
      <div className="max-w-[1700px] mx-auto">
        {showTitle && (
          <div className="flex flex-col items-center text-center mb-20 gap-10">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="eyebrow text-gold mb-6 block"
              >
                Visual Journey
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-serif-display text-soft mb-8 italic font-light tracking-wider"
              >
                Gallery
              </motion.h2>
            </div>
          </div>
        )}

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 border-b border-gold/10 pb-5 w-full max-w-3xl mx-auto mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`small-caps text-[0.65rem] tracking-[0.2em] transition-all relative px-2 ${activeFilter === cat ? "text-gold" : "text-soft/40 hover:text-soft"
                  }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="galleryFilter"
                    className="absolute -bottom-5 left-0 right-0 h-px bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 max-w-[1400px] mx-auto"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative overflow-hidden aspect-[3/4] bg-ink-deep cursor-pointer"
            >
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="small-caps text-[0.6rem] text-gold tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <p className="text-soft text-lg font-serif-display tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  Exclusive Moments
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showExploreButton && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex justify-center"
          >
            <Link to="/gallery">
              <button className="btn-gold group">
                <span>Explore Full Gallery</span>
              </button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink-deep/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-gold hover:rotate-90 transition-transform duration-500 z-[110]"
            >
              <X size={32} />
            </button>

            <button
              onClick={() => navigate('prev')}
              className="absolute left-8 text-gold/40 hover:text-gold transition-colors hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={() => navigate('next')}
              className="absolute right-8 text-gold/40 hover:text-gold transition-colors hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES.find(img => img.id === selectedImage)?.src}
                alt="Lightbox"
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
              <div className="absolute bottom-[-60px] left-0 right-0 text-center">
                <span className="small-caps text-gold tracking-[0.3em] text-xs">
                  {GALLERY_IMAGES.find(img => img.id === selectedImage)?.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
