// import React, { useRef, useEffect } from "react";
// import { Tilt } from "react-tilt";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";

// gsap.registerPlugin(ScrollTrigger);

// const useGsap = (elementRef, animation, delay = 0) => {
//   useEffect(() => {
//     if (elementRef.current) {
//       gsap.fromTo(
//         elementRef.current,
//         animation.from,
//         {
//           ...animation.to,
//           delay,
//           scrollTrigger: {
//             trigger: elementRef.current,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   }, [elementRef, animation, delay]);
// };

// const ServiceCard = ({ index, title, icon }) => {
//   const cardRef = useRef(null);
//   useGsap(cardRef, {
//     from: { opacity: 0, y: 100, scale: 0.8 },
//     to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
//   }, index * 0.2);

//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] ">
//         <div className="bg-[#d658c1b4] rounded-[20px] py-1 px-2 min-h-[280px] flex justify-evenly items-center flex-col">
//           <img src={icon}  className="w-52 h-52" />
//           <h3 className="text-white italic font-extralight text-[15px] underline  text-center">{title}</h3>
//         </div>
//       </div>
//     </Tilt>
//   );
// };

// const About = () => {
//   const headingRef = useRef(null);
//   const paragraphRef = useRef(null);

//   // Heading Animation
//   useGsap(headingRef, {
//     from: { opacity: 0, x: -50 },
//     to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
//   });

//   // Paragraph Animation
//   useGsap(paragraphRef, {
//     from: { opacity: 0, y: 50 },
//     to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
//   }, 0.3);

//   return (
//     <>
//       <div ref={headingRef}>
        
//         <h2 className={styles.sectionHeadText}>Introduction.</h2>
//         <p className={styles.sectionSubText}> Meet Anchala Sharma</p>
//         <p className="text-[#FFB22C] font-semi-bold">Makeup Artist | Educator | Beauty Enthusiast</p>
//       </div>

//       <p ref={paragraphRef} className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]">
//       I’m Anchala Sharma — a professional makeup artist and educator known as @makeupbyanchala. With a passion for enhancing natural beauty, I specialize in bridal, editorial, and special occasion makeup, along with personalized training programs for aspiring artists.
//       From flawless glam to expert education, my goal is to help you look and feel your absolute best.<br/>
// <span className="italic text-[#F564A9]">Let’s create beauty that inspires confidence.Here’s a glimpse of the magic in action!</span>


//       </p>

    

//       <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
     
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] ">
        <div className="bg-[#d658c1b4] rounded-[20px] py-1 px-2 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} className="w-52 h-52" />
          <h3 className="text-white italic font-extralight text-[13px] sm:text-[15px] underline text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
      <div ref={headingRef}>
        <h2 className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl`}>
          Introduction.
        </h2>
        <p className={`${styles.sectionSubText} text-lg sm:text-xl md:text-2xl`}>
          Meet Anchala Sharma
        </p>
        <p className="text-[#FFB22C] font-semibold text-sm sm:text-base md:text-lg">
          Makeup Artist | Educator | Beauty Enthusiast
        </p>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-black text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]"
      >
        I’m Anchala Sharma — a professional makeup artist and educator known as
        @makeupbyanchala. With a passion for enhancing natural beauty, I
        specialize in bridal, editorial, and special occasion makeup, along with
        personalized training programs for aspiring artists. From flawless glam
        to expert education, my goal is to help you look and feel your absolute
        best.
        <br />
        <span className="italic text-[#F564A9]">
          Let’s create beauty that inspires confidence. Here’s a glimpse of the
          magic in action!
        </span>
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
