import { motion } from "framer-motion";
import { FiInstagram, FiPlay } from "react-icons/fi";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop",
    caption: "Bridal Elegance",
    type: "image",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599494653162-411aa46bbd59?w=500&h=500&fit=crop",
    caption: "Everyday Glam",
    type: "image",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512207736139-c97394bf8c1e?w=500&h=500&fit=crop",
    caption: "Party Ready",
    type: "reel",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
    caption: "Artistic Vision",
    type: "image",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    caption: "Natural Beauty",
    type: "reel",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1470252649378-9c29740ff023?w=500&h=500&fit=crop",
    caption: "Bold & Beautiful",
    type: "image",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    caption: "Flawless Finish",
    type: "image",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
    caption: "Makeup Magic",
    type: "reel",
    postUrl: "https://www.instagram.com/makeupbyanchla",
  },
];

const InstagramFeedSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <FiInstagram className="text-primary text-2xl" />
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase font-body text-secondary">
              Instagram Gallery
            </p>
          </motion.div>

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
            className="text-secondary font-body text-sm md:text-base mt-6 max-w-2xl mx-auto"
          >
            Explore my latest makeup transformations, beauty tutorials, and artistic creations. 
            Each post tells a story of creativity and precision.
          </motion.p>
        </div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="relative overflow-hidden aspect-square group cursor-pointer bg-black/5 rounded-lg"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Type Badge */}
              {post.type === "reel" && (
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full p-2 z-10">
                  <FiPlay className="text-white text-lg" />
                </div>
              )}

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                {/* Caption and Link */}
                <div className="w-full text-white text-right">
                  <p className="font-display text-sm md:text-base tracking-wide uppercase line-clamp-2 mb-3">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest font-body">
                    <span>View Post</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Border on Hover */}
              <div className="absolute inset-0 border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-secondary font-body text-sm mb-6">
            See more of my work on Instagram
          </p>
          <a
            href="https://www.instagram.com/makeupbyanchla/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-3 font-body text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 rounded-lg group"
          >
            <FiInstagram className="text-lg" />
            <span>Follow @makeupbyanchla</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
