import { useState } from 'react';
import {
  makeup4, makeup10, makeup9, makeup3, makeup1, 
  makeup21, makeup13, makeup7, makeup17, makeup16, 
  makeup23, makeup5, makeup19, makeup6, makeup11, 
  makeup8, makeup12, makeup24, makeup2, makeup22, 
  makeup14, makeup15, makeup25, makeup26, makeup18, 
  makeup20
  
} from '../assets';

const slides = [
  makeup4, makeup10, makeup9, makeup3, makeup20, makeup1, 
  makeup21, makeup13, makeup7, makeup17, makeup16, 
  makeup23, makeup5, makeup19, makeup6, makeup11, 
  makeup8, makeup12, makeup24, makeup2, makeup22, 
  makeup14, makeup15, makeup25, makeup26, makeup18
 
  
];


export default function Photoalbum() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length - visibleSlides + 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
        
      <div className="overflow-hidden bg-white rounded-lg ">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${(100 / visibleSlides) * currentSlide}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full sm:w-full lg:w-1/3 flex-shrink-0 px-2">
              <div className="flex justify-center items-center h-[400px] bg-white">
                <img
                  src={slide}
                  alt={`Slide ${idx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* Previous Button */}
<button
  onClick={prevSlide}
  disabled={currentSlide === 0}
  className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-2 shadow-md disabled:opacity-50 disabled:pointer-events-none transition"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18L9 12l6-6" />
  </svg>
</button>

{/* Next Button */}
<button
  onClick={nextSlide}
  disabled={currentSlide >= slides.length - visibleSlides}
  className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-2 shadow-md disabled:opacity-50 disabled:pointer-events-none transition"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
  </svg>
</button>


      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: slides.length - visibleSlides + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`size-3 border rounded-full cursor-pointer border-gray-400 dark:border-neutral-600 ${
              currentSlide === i
                ? 'bg-blue-700 border-blue-700 dark:bg-blue-500 dark:border-blue-500'
                : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
