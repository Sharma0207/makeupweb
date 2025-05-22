// import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import Footer from "./components/Footer";
// import ImageGallery from "./components/ImageGallery";
// import Photoalbum from "./components/Photoalbum";
// import FloatingWhatsAppButton from "./components/FloatingWhatsApp"; 

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-slate-100 overflow-x-hidden'>
        
    
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//             <div className="fixed top-0 left-0 w-full bg-orange-100 text-center py-2 z-50">
//       <p className="text-orange-800 text-sm">
//       HURRY UP!!! 30% DISCOUNT ON ALL BOOKING THIS SEASON
//       </p>
//     </div>
//          <Navbar />
        
//           <Hero />
//           <ImageGallery/>
//         </div>
//         <About />
//          <Experience />
//          {/* <Works /> */}
//          <Photoalbum/>
    
//         <Tech />
        
        
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />

//           <StarsCanvas />
//           <Footer/>
//         </div>
//         <FloatingWhatsAppButton />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import Photoalbum from "./components/Photoalbum";
import FloatingWhatsAppButton from "./components/FloatingWhatsApp"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-100 overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className="fixed top-0 left-0 w-full bg-orange-100 text-center py-2 z-50">
            <p className="text-orange-800 text-sm">
              HURRY UP!!! 30% DISCOUNT ON ALL BOOKING THIS SEASON
            </p>
          </div>
          <Navbar />
          <Hero />
          <ImageGallery />
        </div>
        <div className="mt-8 sm:mt-40 md:mt-16">
          <About />
        </div>
        <Experience />
        {/* <Works /> */}
        <Photoalbum />
        <Tech />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
        <FloatingWhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
