// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {

  
//   return (
//     <section className={`relative w-full h-screen mx-auto bg-[#ffffffec]`}>
//       <div
//         className={`absolute inset-0 top-[40px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
//       >
       

//         <div className="mt-28 md:mt-5 lg:5 relative">
//           <h1 className={`${styles.heroHeadText} text-white`}>
//              <span className='text-black font-light'>MAKEUP BY </span>
            
//           </h1>
       
//           <h2 className={`${styles.heroHeadText2} text-black`}>
//              <span className='text-black font-extralight '>ANCHALA</span>
             
            
//           </h2>
//           <div className=' absolute w-6 h-6 rounded-full bg-[#ffc75e] flex flex-col items-center justify-center' />
          
          
//           <p className={`${styles.heroSubText} text-center text-black italic font-mono font-light`}>
//            Makeup Artist
//           </p>
//         </div>
//       </div>

//       {/* <ComputersCanvas /> */}

      

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { brush, lipstic,hero3, hero2 } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-[#ffffffec]`}>
      <div
        className={`absolute inset-0 top-[40px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div className="mt-28 md:mt-5 lg:5 relative">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-black font-light">MAKEUP BY </span>
          </h1>

          <div className="relative inline-block">
            <h2 className={`${styles.heroHeadText2} text-black`}>
              <span className="text-black font-extralight">ANCHALA</span>
            </h2>
            <div className="absolute w-5 h-5 rounded-full bg-[#ffc75e] -right-6 top-3/4 transform -translate-y-1/2" />
          </div>

          {/* <p className={`${styles.heroSubText} text-center text-black italic font-mono font-light`}>
            Makeup Artist
          </p> */}
        </div>
        <div className="absolute w-full h-full pointer-events-none">
        <img
          src={hero3}
        
          className="absolute w-40 h-40 object-cover top-[15%] left-[6%] -rotate-6"
        />
        <img
          src={lipstic}
          
          className="absolute w-64 h-64 object-cover bottom-[3%] left-[4%] rotate-12"
        />
        <img
          src={brush}
          alt="Makeup Product 3"
          className="absolute w-60 h-60 object-cover top-[10%] right-[10%] -rotate-12"
        />
        <img
          src={hero2}
          alt="Makeup Product 4"
          className="absolute w-60 h-60 object-cover bottom-[2%] right-[20%] -rotate-12"
        />
      </div>

      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
