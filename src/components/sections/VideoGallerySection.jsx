import { useRef, useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Parallax } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/parallax";
import reel1 from "../../assets/videoportfolio/reel1.mp4";
import reel2 from "../../assets/videoportfolio/reel2.mp4";
import reel3 from "../../assets/videoportfolio/reel3.mp4";
import reel4 from "../../assets/videoportfolio/reel4.mp4";
import reel8 from "../../assets/videoportfolio/reel8.mp4";
import reel6 from "../../assets/videoportfolio/reel6.mp4";
import reel7 from "../../assets/videoportfolio/reel7.mp4";

const videos = [
  {
    id: 1,
    title: "Bridal Elegance",
    description: "Complete bridal makeup transformation",
    url: reel1,
  },
  {
    id: 2,
    title: "Party Glam",
    description: "Bold and vibrant evening makeup look",
    url: reel2,
  },
  {
    id: 3,
    title: "Everyday Elegance",
    description: "Natural everyday makeup tutorial",
    url: reel3,
  },
  {
    id: 4,
    title: "Riya's Makeover",
    description: "Beautiful transformation makeup look",
    url: reel4,
  },
  {
    id: 5,
    title: "Creative Special FX",
    description: "Artistic and creative makeup styling",
    url: reel6,
  },
  {
    id: 6,
    title: "Flawless Finish",
    description: "Professional makeup application",
    url: reel7,
  },
  {
    id: 7,
    title: "Radiant Glow",
    description: "Stunning makeup transformation",
    url: reel8,
  },
];

const VideoGallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingVideos, setLoadingVideos] = useState(new Set());
  const [failedVideos, setFailedVideos] = useState(new Set());
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});
  const swiperRef = useRef(null);
  const videoRefs = useRef({});

  // Pause previous video when changing slides
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, videoEl]) => {
      if (videoEl) {
        const videoId = parseInt(id);
        if (videoId !== videos[activeIndex]?.id) {
          videoEl.pause();
          videoEl.currentTime = 0;
          setIsPlaying((prev) => ({ ...prev, [videoId]: false }));
        }
      }
    });
  }, [activeIndex]);

  const handleVideoRef = (id) => (el) => {
    if (el) {
      videoRefs.current[id] = el;
    }
  };

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

  const togglePlayPause = () => {
    const activeVideo = videos[activeIndex];
    const videoEl = videoRefs.current[activeVideo.id];
    if (videoEl) {
      if (videoEl.paused) {
        videoEl.play();
        setIsPlaying((prev) => ({ ...prev, [activeVideo.id]: true }));
      } else {
        videoEl.pause();
        setIsPlaying((prev) => ({ ...prev, [activeVideo.id]: false }));
      }
    }
  };

  const toggleMute = () => {
    const activeVideo = videos[activeIndex];
    const videoEl = videoRefs.current[activeVideo.id];
    if (videoEl) {
      videoEl.muted = !videoEl.muted;
      setIsMuted((prev) => ({ ...prev, [activeVideo.id]: videoEl.muted }));
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />

      {/* Main video gallery container */}
      <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-8 pt-24 md:pt-0">
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
                <div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    aspectRatio: "9/16",
                    width: "clamp(260px, 85vw, 380px)",
                    maxWidth: "calc(100vh * 9 / 16)",
                    maxHeight: "100vh",
                  }}
                >
                  {/* Loading indicator */}
                  {loadingVideos.has(video.id) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                      <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Video element */}
                  {!failedVideos.has(video.id) ? (
                    <video
                      ref={handleVideoRef(video.id)}
                      src={video.url}
                      alt={video.title}
                      className="w-full h-full object-cover bg-black transition-opacity duration-300"
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
                        <p className="text-lg font-semibold mb-2">
                          Video Unavailable
                        </p>
                        <p className="text-sm text-white/60">
                          Please contact support to view this video
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Play/Pause and Mute button overlay - center of video */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button
                      onClick={togglePlayPause}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                      aria-label={isPlaying[video.id] ? "Pause" : "Play"}
                    >
                      {isPlaying[video.id] ? (
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Mute button - bottom right corner */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <button
                      onClick={toggleMute}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                      aria-label="Mute/Unmute"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {isMuted[video.id] ? (
                          <path d="M16.6915026,12.4744748 L17.1272231,8.47 C17.1272231,8.47 17.1272231,7.429 16.1562889,7.429 C15.1853547,7.429 15.1853547,8.47 15.1853547,8.47 L14.748035,12.4744748 L15.1853547,16.5258506 C15.1853547,16.5258506 15.1853547,17.5668 16.1562889,17.5668 C17.1272231,17.5668 17.1272231,16.5258506 17.1272231,16.5258506 L17.6915026,12.4744748 Z M11.5815828,3.70919189 C11.5815828,3.70919189 11.5815828,2.667 10.6106485,2.667 C9.70508275,2.667 9.70508275,3.70919189 9.70508275,3.70919189 L1.50742679,12.4744748 L9.70508275,21.2910027 C9.70508275,21.2910027 9.70508275,22.3321808 10.6106485,22.3321808 C11.5815828,22.3321808 11.5815828,21.2910027 11.5815828,21.2910027 L19.7792388,12.4744748 L11.5815828,3.70919189 Z" />
                        ) : (
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        )}
                      </svg>
                    </button>
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

      {/* Overlay UI - Top (Desktop) */}
      <div className="hidden md:block absolute top-0 left-0 right-0 z-20 px-6 md:px-16 pt-8 md:pt-12">
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
            <span className="text-lg md:text-xl font-semibold">
              {activeIndex + 1}
            </span>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/50">{videos.length}</span>
          </div>
        </div>
      </div>

      {/* Mobile Heading - Above video */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-20 px-4 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl text-white tracking-wide">
            PORTFOLIO VIDEOS
          </h2>
          <p className="font-body text-sm text-white/60 mt-1">
            Watch our latest makeup transformations in action
          </p>
        </motion.div>
      </div>

      {/* Overlay UI - Bottom (Desktop only) */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 pb-8 md:pb-12">
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

      {/* Mobile Navigation - Below video */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 pointer-events-none">
        <div className="flex items-center justify-between pointer-events-auto">
            <button
              onClick={goPrev}
              className="group relative px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50"
            >
              <span className="relative z-10">← Prev</span>
            </button>

            {/* Mobile Pagination dots */}
            <div className="flex gap-2">
              {videos.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "bg-white w-6 h-2"
                      : "bg-white/40 hover:bg-white/60 w-2 h-2"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="group relative px-4 py-3 bg-white hover:bg-white/90 text-black rounded-full font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 font-semibold"
            >
              <span className="relative z-10">Next →</span>
            </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default VideoGallerySection;
