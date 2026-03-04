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
    title: "Bridal Elegance",
    description: "Complete bridal makeup transformation",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fbd50714122a34609a21b77a8cd173c12?alt=media&token=671f95a5-4119-40a1-a524-0f4f588923a7&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 2,
    title: "Party Glam",
    description: "Bold and vibrant evening makeup look",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F9b1ccdd8a5d046da918cc8731cf30082?alt=media&token=5741c996-4be7-43eb-8798-e6276282b2c5&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 3,
    title: "Everyday Elegance",
    description: "Natural everyday makeup tutorial",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F3e9a7e27a97e4636bd01fc2480c59b7a?alt=media&token=656b2f12-24f3-42fc-99a6-df434ea43087&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 4,
    title: "Riya's Makeover",
    description: "Beautiful transformation makeup look",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F7ac92690dfeb44c9a920447afd32bc83?alt=media&token=7d652419-c531-4869-baf5-47000231b140&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 5,
    title: "Creative Special FX",
    description: "Artistic and creative makeup styling",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2Feb654abf447f46889fbf64d6284bb721?alt=media&token=b4f125ec-1cad-475a-b814-f575f654345d&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 6,
    title: "Flawless Finish",
    description: "Professional makeup application",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2F97eb93cdb56e46418885512c93f11e35?alt=media&token=1917814b-3252-4502-a650-6a9b196462b2&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
  {
    id: 7,
    title: "Radiant Glow",
    description: "Stunning makeup transformation",
    url: "https://cdn.builder.io/o/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fe55ed8c3a4ee4969a71e006ea8e5ffc8?alt=media&token=5067e2ba-f021-438c-9f59-49f825161a4a&apiKey=37ad2b39330a492489c1a509e5a35af1",
  },
];

const VideoGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingVideos, setLoadingVideos] = useState(new Set());
  const [failedVideos, setFailedVideos] = useState(new Set());
  const swiperRef = useRef(null);

  const handleVideoLoadStart = (videoId) => {
    setLoadingVideos((prev) => new Set(prev).add(videoId));
  };

  const handleVideoLoadComplete = (videoId) => {
    setLoadingVideos((prev) => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  };

  const handleVideoError = (videoId, error) => {
    console.error(`Video ${videoId} failed to load:`, error);
    setFailedVideos((prev) => new Set(prev).add(videoId));
    handleVideoLoadComplete(videoId);
  };

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
                <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{
                  aspectRatio: "9/16",
                  width: "clamp(260px, 85vw, 380px)",
                  maxWidth: "calc(100vh * 9 / 16)",
                  maxHeight: "100vh"
                }}>
                  {/* Loading indicator */}
                  {loadingVideos.has(video.id) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                      <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Video element */}
                  {!failedVideos.has(video.id) ? (
                    <video
                      src={video.url}
                      alt={video.title}
                      className="w-full h-full object-cover bg-black transition-opacity duration-300"
                      controls
                      controlsList="nodownload"
                      playsInline
                      preload="auto"
                      muted={false}
                      onLoadStart={() => handleVideoLoadStart(video.id)}
                      onCanPlay={() => handleVideoLoadComplete(video.id)}
                      onError={(e) => handleVideoError(video.id, e)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-lg font-semibold mb-2">Video Unavailable</p>
                        <p className="text-sm text-white/60">Please contact support to view this video</p>
                      </div>
                    </div>
                  )}

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
