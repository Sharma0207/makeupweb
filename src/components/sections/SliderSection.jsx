import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fe80c961db7c84ec385e75f32294c73a3?format=webp&width=800&height=1200",
    name: "Golden Bride",
    category: "Bridal Makeup",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F40e21f4c79254d1a9ad29e02af942dd3?format=webp&width=800&height=1200",
    name: "Professional Finish",
    category: "Editorial & Shoot",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fce7379d7b22948ef847fa670e71769bc?format=webp&width=800&height=1200",
    name: "Elegant Evening",
    category: "Party & Occasion",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F6f9a4cda2b0946c789882fe84a0224bc?format=webp&width=800&height=1200",
    name: "Artistic Expression",
    category: "Creative Art",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F75a7d68bbbc3493f993fa3942769c6a0?format=webp&width=800&height=1200",
    name: "Royal Glamour",
    category: "Bridal Makeup",
  },
];

const SliderCard = ({ slide, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [index * 0.8, 0, -index * 0.5]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [index * 8, 0, -index * 4]);
  const imageX = useTransform(scrollYProgress, [0, 1], [-15 - index * 5, 5 + index * 3]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, clipPath: "inset(50%)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0%)" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex-shrink-0 relative overflow-hidden"
      style={{
        width: "min(80vw, 380px)",
        height: "450px",
        rotateZ,
        translateY,
      }}
    >
      <motion.img
        src={slide.image}
        alt={slide.name}
        loading="lazy"
        className="h-full w-full object-cover"
        style={{ x: imageX }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-white text-xs md:text-sm tracking-widest font-body uppercase mb-2">
          {slide.category}
        </p>
        <h3 className="text-white text-lg md:text-xl tracking-[0.08em] font-display">
          {slide.name}
        </h3>
      </div>
    </motion.div>
  );
};

const SliderSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-secondary text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4">
            Featured Work
          </p>
          <h2 className="text-primary text-3xl md:text-5xl font-display tracking-widest uppercase">
            My Portfolio
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto px-6 pb-4 lg:gap-8 lg:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((slide, i) => (
              <SliderCard key={slide.name} slide={slide} index={i} />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-12 w-12 items-center justify-center border border-primary/20 text-primary transition-colors hover:bg-primary/10 disabled:opacity-30"
              aria-label="Previous"
            >
              <MdChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-12 w-12 items-center justify-center border border-primary/20 text-primary transition-colors hover:bg-primary/10 disabled:opacity-30"
              aria-label="Next"
            >
              <MdChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-block border border-primary px-8 py-3 text-primary text-xs md:text-sm tracking-widest uppercase font-body hover:bg-primary/10 transition-colors"
          >
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SliderSection;
