import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  generateBuilderSrcSet,
  getResponsiveSizes,
} from "../utils/imageOptimization";
import Footer from "../components/common/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const services = [
  "Bridal Makeup",
  "Party & Events Makeup",
  "Editorial & Fashion",
  "Portrait & Shoots",
  "Creative & Special FX",
  "Bollywood & Cultural",
];

const clients = [
  "Lakme",
  "Ad Works",
  "Colors Up",
  "Fashion Editorials",
  "Bridal Studios",
  "Event Productions",
  "Photography Studios",
  "Media Houses",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          About Anchala Sharma | Professional Makeup Artist in Patna, Bihar
        </title>
        <meta
          name="description"
          content="Meet Anchala Sharma, Patna's leading professional makeup artist specializing in bridal makeup, party makeup, and special occasions. Trained expert with years of experience in Bihar."
        />
        <meta
          name="keywords"
          content="about anchala sharma, makeup artist patna, professional makeup artist bihar, anchala sharma story, makeup artist background patna"
        />
        <link rel="canonical" href="https://www.makeupbyanchala.in/about" />
        <meta
          property="og:title"
          content="About Anchala Sharma | Professional Makeup Artist in Patna"
        />
        <meta
          property="og:description"
          content="Meet Anchala Sharma, Patna's leading professional makeup artist specializing in bridal makeup and special occasions."
        />
        <meta
          property="og:url"
          content="https://www.makeupbyanchala.in/about"
        />
      </Helmet>

      <main className="pt-20">
        {/* SEO: Visually hidden H1 for search engine ranking */}
        <h1 className="sr-only">About Anchala Sharma – Best Professional Makeup Artist in Patna, Bihar</h1>

        {/* Hero intro section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-16">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main intro text */}
            <div className="relative z-10">
              <motion.p
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-12"
              >
                Makeup Artist
              </motion.p>

              <div className="relative">
                <motion.h2
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="font-display text-foreground leading-[1.1]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                >
                  Anchala
                </motion.h2>

                <motion.h3
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="font-display italic text-foreground leading-none mt-2"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                >
                  Sharma
                </motion.h3>

                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="font-body text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mt-8"
                >
                  Transforming beauty through precision, artistry, and passion.
                  Creating looks that celebrate individuality and enhance
                  natural radiance.
                </motion.p>
              </div>
            </div>

            {/* Portrait image - right column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center justify-center"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd555ff5d715946eea839700686a8452e%2F8e682a29c35e4ae39103d1f8e17e9f1a?format=webp&width=800&height=1200"
                  alt="Anchala Sharma professional makeup artist in Patna Bihar"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "3/4" }}
                  loading="lazy"
                  srcSet={generateBuilderSrcSet(
                    "https://cdn.builder.io/api/v1/image/assets%2Fd555ff5d715946eea839700686a8452e%2F8e682a29c35e4ae39103d1f8e17e9f1a",
                    [400, 600, 800, 1000],
                  )}
                  sizes={getResponsiveSizes({
                    mobile: "100vw",
                    tablet: "50vw",
                    desktop: "45vw",
                  })}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Heading statement */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-foreground leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              A makeup artist dedicated to bringing out the best in every person
              through creative expression and technical excellence.
            </motion.h2>
          </div>
        </section>

        {/* About Me */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <h2 className="font-display text-foreground tracking-[0.15em] text-lg md:text-xl uppercase">
                  About Me
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-8 space-y-6"
              >
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                  With a passion for makeup artistry that began years ago, I
                  have dedicated myself to mastering the craft of beauty
                  enhancement. My journey in professional makeup has been shaped
                  by continuous learning and an unwavering commitment to
                  excellence.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                  I believe that makeup is not about creating a mask, but rather
                  about celebrating and enhancing each individual's unique
                  features. Every face tells a story, and my role is to help
                  express that story through artistry and technique.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                  From bridal transformations to editorial fashion looks, from
                  creative special effects to everyday glamour, I approach each
                  project with meticulous attention to detail and a deep
                  understanding of color, texture, and form.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                  My ultimate goal is to make every client feel confident,
                  beautiful, and authentically themselves—whether they're
                  walking down the aisle, stepping onto a photo shoot, or
                  preparing for a special event.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <h2 className="font-display text-foreground tracking-[0.15em] text-lg md:text-xl uppercase">
                  Services
                </h2>
              </motion.div>

              <div className="lg:col-span-8">
                <ul className="space-y-3">
                  {services.map((service, i) => (
                    <motion.li
                      key={service}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={fadeUp}
                      className="font-body text-foreground text-sm md:text-base flex items-center gap-3"
                    >
                      <span className="text-primary text-xs">·</span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Clients & Collaborators */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <h2 className="font-display text-foreground tracking-[0.15em] text-lg md:text-xl uppercase">
                  Clients & Collaborators
                </h2>
              </motion.div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {clients.map((client, i) => (
                    <motion.span
                      key={client}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={fadeUp}
                      className="font-body text-muted-foreground text-sm md:text-base"
                    >
                      {client}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default About;
