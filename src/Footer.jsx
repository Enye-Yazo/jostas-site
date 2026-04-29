import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  
  // 1. Dynamic Color State
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    'text-white',      // Default
    'text-blue-400',   // Blue
    'text-rose-400',   // Red/Pink
    'text-emerald-400',// Green
    'text-amber-400'   // Orange/Yellow
  ];

  // Logic for the color changing word (every 5 seconds)
  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev === colors.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(colorTimer);
  }, [colors.length]);

  // Logic for the scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // 2. Reduced padding (py-10) to make the footer smaller and tighter
    <footer ref={footerRef} className="relative py-10 px-8 md:px-16 w-full font-playfair overflow-hidden text-white z-20">
      
      {/* 3. Darker Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgBlackBackdrop} 
          alt="Dark Textured Background" 
          className="w-full h-full object-cover blur-md scale-105 opacity-50" 
        />
        {/* Extremely dark overlay to push it to the background */}
        <div className="absolute inset-0 bg-black/95"></div>
      </div>

      {/* Reduced grid gap for a more compact layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center md:items-start text-center md:text-left">
        
        {/* Column 1: Call to Action */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-playfair text-2xl font-bold mb-5 tracking-wide drop-shadow-md">
            Ready to add <span className={`transition-colors duration-1000 ${colors[colorIndex]}`}>colour</span> to your world?
          </h3>
          
          {/* 4. Swapped <button> for <Link> to route to Services */}
          <Link 
            to="/services"
            className={`inline-block px-6 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-md rounded-full shadow-lg cursor-pointer transition-all duration-1000 ease-out border-2 ${
              isVisible 
                ? 'border-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-105' 
                : 'border-white/20 drop-shadow-none scale-100'
            }`}
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Column 2: Contact Us */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold tracking-widest text-gray-400 uppercase mb-1">Contact Us</h3>
          
          {/* Phone Icon & Text */}
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group">
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="text-base font-medium font-playfair">035 550 JOSTAS</span>
          </div>

          {/* Email Icon & Text */}
          <a href="mailto:sales@jostaspaint.co.za" className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group w-fit mx-auto md:mx-0">
            <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="text-base font-medium">sales@jostaspaint.co.za</span>
          </a>
        </div>

        {/* Column 3: Find Us */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold tracking-widest text-gray-400 uppercase mb-1">Find Us</h3>
          
          {/* Map Pin Icon & Text */}
          <a href="#" className="flex items-start justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer group w-fit mx-auto md:mx-0 text-left">
            <svg className="w-6 h-6 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-base font-medium leading-relaxed font-playfair">
              22 Kenneth Kaunda Rd,<br />Athlone, Durban North
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}