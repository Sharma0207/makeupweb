import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Parallax } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/parallax";

const videos = [
  {
    id: 1,
    title: "Bridal Beauty",
    description: "Complete bridal makeup transformation",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9e2f3b73587a4a668d1489b06ad332af?alt=media&token=963c741c-f70b-404c-9605-4bd1925c5926&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 2,
    title: "Party Glam",
    description: "Bold and vibrant evening makeup look",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9e2f3b73587a4a668d1489b06ad332af?alt=media&token=963c741c-f70b-404c-9605-4bd1925c5926&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 3,
    title: "Everyday Elegance",
    description: "Natural everyday makeup tutorial",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9e2f3b73587a4a668d1489b06ad332af?alt=media&token=963c741c-f70b-404c-9605-4bd1925c5926&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 4,
    title: "Editorial Look",
    description: "High fashion editorial makeup styling",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9e2f3b73587a4a668d1489b06ad332af?alt=media&token=963c741c-f70b-404c-9605-4bd1925c5926&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 5,
    title: "Creative Special FX",
    description: "Artistic and creative makeup transformation",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9e2f3b73587a4a668d1489b06ad332af?alt=media&token=963c741c-f70b-404c-9605-4bd1925c5926&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
];

const VideoGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();
  const goTo = (i) => swiperRef.current?.slideTo(i);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      {/* Main video gallery container */}
      <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-8">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={handleSlideChange}
          modules={[EffectCreative, Parallax]}
          effect="creative"
          creativeEffect={{
            limitProgress: 5,
            prev: {
              translate: [0, 0, -500],
              opacity: 0,
            },
            next: {
              translate: ["100%", 0, 0],
              opacity: 1,
            },
          }}
          parallax
          speed={800}
          grabCursor
          slidesPerView="auto"
          centeredSlides={true}
          className="h-full w-full flex items-center justify-center"
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-4 md:mx-6"
              >
                {/* Video container - 9:16 aspect ratio */}
                <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16", width: "clamp(280px, 80vw, 450px)" }}>
                  {/* Video element */}
                  <video
                    src={video.url}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    playsInline
                    loading="lazy"
                  />

                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Video info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                      {video.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-white/80">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Active indicator shadow */}
                <div
                  className="absolute -inset-2 rounded-xl border border-white/20 transition-all duration-300"
                  style={{ opacity: i === activeIndex ? 1 : 0 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay UI - Top */}
      <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-16 pt-8 md:pt-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white tracking-wide">
              PORTFOLIO VIDEOS
            </h2>
            <p className="font-body text-sm md:text-base text-white/60 mt-2">
              Watch our latest makeup transformations in action
            </p>
          </motion.div>

          {/* Counter */}
          <div className="text-white font-display text-sm md:text-base tracking-wide">
            <span className="text-lg md:text-xl font-semibold">{activeIndex + 1}</span>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/50">{videos.length}</span>
          </div>
        </div>
      </div>

      {/* Overlay UI - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 pb-8 md:pb-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button
              onClick={goPrev}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-body text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40"
            >
              <span className="relative z-10">← Prev</span>
            </button>

            <button
              onClick={goNext}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-white/90 text-black rounded-full font-body text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 font-semibold"
            >
              <span className="relative z-10">Next →</span>
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-3 md:gap-4">
            {videos.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "bg-white w-8 h-2.5"
                    : "bg-white/40 hover:bg-white/60 w-2.5 h-2.5"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default VideoGallerySection;
