// import { makeUseVisualState } from "framer-motion";
// import { logo,hero2, makeup1, makeup2, makeup3, makeup4, makeup5, makeup6 } from "../assets";

// const ImageGallery = () => {
//     const images = [
//     makeup1,makeup2,makeup3,makeup4,makeup5,makeup6
//     ];
  
//     return (
//       <div className="relative w-screen h-screen bg-white">
//         {/* Gallery Grid */}
//         <div className="grid grid-cols-6 gap-0 w-full h-full">
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Gallery image ${index + 1}`}
//               className="w-0 h-0 min-w-[98%] min-h-[73%] object-cover cursor-pointer filter grayscale-[80%] hover:filter-none hover:w-[calc(80vh/1)] hover:h-[calc(80vw/6)] transition-all duration-300"
//             />
//           ))}
//         </div>
  
//         {/* Text Overlay */}
//         <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//           <p className="text-4xl font-[cursive] mb-2"></p>
//           <p className="text-8xl font-[cursive]"></p>
//         </div>
//       </div>
//     );
//   };
  
//   export default ImageGallery;
// import { makeUseVisualState } from "framer-motion";
// import { logo, hero2, makeup11, makeup2, makeup3, makeup4, makeup5, makeup6, makeup8 ,makeup9,makeup7} from "../assets";

// const ImageGallery = () => {
//   const images = [makeup11, makeup7,makeup9, makeup4,makeup8, makeup6];

//   return (
//     <div className="relative w-screen h-screen bg-white">
//       {/* Gallery Grid */}
//       <div className="grid grid-cols-6 gap-0 w-full h-full">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Gallery image ${index + 1}`}
//             className="w-full h-full object-cover cursor-pointer filter grayscale-[80%] hover:filter-none hover:scale-103 transition-all duration-300"
//           />
//         ))}
//       </div>

//       {/* Text Overlay */}
//       <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//         <p className="text-2xl font-[cursive] mb-1">#Crafting Magic</p>
//         <p className="text-2xl font-[cursive]">#Unveiling Joy</p>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
import { motion } from "framer-motion"; // Corrected import (makeUseVisualState is not needed)
import { logo, hero2, makeup11, makeup2, makeup3, makeup4, makeup5, makeup6, makeup8, makeup9, makeup7 } from "../assets";

const ImageGallery = () => {
  const images = [makeup11, makeup7, makeup9, makeup4, makeup8, makeup6];

  return (
    <div className="relative w-screen h-screen bg-white">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 w-full h-full">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer filter grayscale-[80%] hover:filter-none hover:scale-[1.03] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[cursive] mb-1 drop-shadow-md">
          #Crafting Magic
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[cursive] drop-shadow-md">
          #Unveiling Joy
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;