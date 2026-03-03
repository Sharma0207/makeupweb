import { motion } from "framer-motion";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    caption: "Bridal Elegance",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599494653162-411aa46bbd59?w=400&h=400&fit=crop",
    caption: "Everyday Glam",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512207736139-c97394bf8c1e?w=400&h=400&fit=crop",
    caption: "Party Ready",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
    caption: "Artistic Vision",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    caption: "Natural Beauty",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470252649378-9c29740ff023?w=400&h=400&fit=crop",
    caption: "Bold & Beautiful",
  },
];

const InstagramFeedSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-background py-32 lg:py-44 border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-secondary"
          >
            Latest Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Follow My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-secondary font-body text-sm md:text-base mt-6 max-w-xl mx-auto"
          >
            Check out my latest makeup transformations and beauty moments on Instagram. Get inspired and stay updated with new looks.
          </motion.p>
        </div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white">
                  <p className="font-display text-xl tracking-wide uppercase">
                    {post.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-body text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
