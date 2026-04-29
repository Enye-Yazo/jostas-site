import { useState, useEffect } from 'react';
import imgResidential from './assets/residential.jpg';
import imgCommercial from './assets/Commercial.jpg';
import imgInterior from './assets/Interior.jpg';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg';

export default function AboutSection() {
  const images = [imgResidential, imgCommercial, imgInterior];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative py-32 px-8 md:px-16 w-full flex justify-center overflow-hidden font-playfair text-white">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgBlackBackdrop} 
          alt="Dark Textured Background" 
          className="w-full h-full object-cover blur-md scale-105 opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full"> {/* Increased from max-w-6xl to 7xl to give the longer text more breathing room */}
        
        <h1 className="text-5xl md:text-6xl font-bold mb-16 tracking-wide">
          About Josta's
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
        
          <div className="md:col-span-2 space-y-8 text-lg text-gray-300 leading-relaxed font-light font-display">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Expert Interior & Exterior Painters Dedicated to Quality</h2>
              <p className="mb-4">
                At Josta’s Painting, we believe a fresh coat of paint is more than just a renovation—it’s a transformation. As a premier professional painting company, we specialize in bringing vibrant life and lasting value to the spaces where you live, work, and grow.
              </p>
              <p>
                Our mission is built on a single, simple promise: to add color to your world.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Why Choose Josta’s Painting?</h3>
              <p className="mb-6">
                We don’t just paint walls; we elevate the way you experience your environment. Whether it’s a modern office refresh or a complete residential exterior overhaul, our team approaches every project with a designer’s eye and a craftsman’s precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-white mr-4 mt-1 opacity-70">●</span>
                  <span><strong className="text-white font-medium">Residential Expertise:</strong> From cozy bedrooms to grand living areas, our interior painting services use premium finishes to reflect your personal style.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-4 mt-1 opacity-70">●</span>
                  <span><strong className="text-white font-medium">Commercial Reliability:</strong> We provide durable, high-quality exterior painting and commercial solutions that help businesses make a powerful first impression.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-4 mt-1 opacity-70">●</span>
                  <span><strong className="text-white font-medium">Intentional Craftsmanship:</strong> Every brushstroke is intentional. We prioritize meticulous surface preparation and clean, sharp lines to ensure a flawless finish every time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-4 mt-1 opacity-70">●</span>
                  <span><strong className="text-white font-medium">End-to-End Care:</strong> From the initial color consultation to the final walkthrough, we treat your property with the respect it deserves.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Elevating Your Space, One Stroke at a Time</h3>
              <p className="mb-6">
                Based on years of industry experience, Josta’s Painting has earned a reputation for reliability, transparency, and artistic excellence. We understand that your home or business is your greatest investment. That’s why we use only high-grade, eco-friendly materials designed to withstand the test of time.
              </p>
              <p className="text-xl text-white font-medium">
                Ready to transform your property? Let Josta’s Painting bring your vision to life with professional expertise you can trust.
              </p>
            </div>
            
            {/* Learn More Button */}
            <div className="pt-4">
              <a href="/about" className="inline-block px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white border-b-2 border-transparent hover:border-white transition-all duration-300 cursor-pointer">
                Learn more
              </a>
            </div>
          </div>

          {/*  Carousel */}
          <div className="md:col-span-1 relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden border-4 border-white/20 shadow-2xl cursor-pointer group" onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Josta's Painting Work"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium drop-shadow-md tracking-widest uppercase">
                Next
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}