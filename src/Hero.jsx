import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

// 1. Importing the exact filenames you uploaded
import imgResidential from './assets/residential.jpg';
import imgCommercial from './assets/BuildingPink.jpg';
import imgExterior from './assets/ExteriorBlue.jpg';
import imgInterior from './assets/Spiral.jpg'; 

export default function Hero() {
  // 2. Mapping your images to the slide text
  const slides = [
    { title: 'home spaces', image: imgResidential },
    { title: 'commercial spaces', image: imgCommercial },
    { title: 'outter world', image: imgExterior },
    { title: 'inner world', image: imgInterior }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. The auto-rotate effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Carousel */}
      {slides.map((slide, index) => (
        <img
          key={slide.title}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-60' : 'opacity-0'}`}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight drop-shadow-md">
          Adding colour to your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white transition-all duration-700">
            {slides[currentIndex].title}
          </span>
        </h1>
        
        {/* Liquid Glass Button */}
        <HashLink 
          smooth 
          to="/services#contact"
          className="inline-block px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-white/20 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg cursor-pointer"
        >
          Get a Free Quote
        </HashLink>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-6 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer shadow-sm ${currentIndex === index ? 'bg-white scale-150' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </section>
  );
}