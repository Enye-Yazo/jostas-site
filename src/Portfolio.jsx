import { useState, useMemo, useCallback } from 'react';
import imgComm from './assets/CommTile.jpg';
import imgResi from './assets/ResiTile.jpg';
import imgInt from './assets/IntTile.jpg';
import imgExt from './assets/ExtTile.jpg';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg';

// Import images from category folders
import commercial1 from './assets/Commercial/clay-banks-fybrevHYvWc-unsplash.jpg';
import commercial2 from './assets/Commercial/don-mckee-3Uxy8ZO1ivA-unsplash.jpg';
import commercial3 from './assets/Commercial/jozsef-hocza-YpDNOHH8yTo-unsplash.jpg';
import commercial4 from './assets/Commercial/juliana-uribbe-EY61OWUyl54-unsplash.jpg';
import commercial5 from './assets/Commercial/point3d-commercial-imaging-ltd-rvec2vVxouc-unsplash.jpg';
import commercial6 from './assets/Commercial/red-ribbon-recovery-blake-Q0hno1eWQww-unsplash.jpg';
import commercial7 from './assets/Commercial/the-yardcoworking-K-Cj2udYd4g-unsplash.jpg';

import exterior1 from './assets/Exterior/Ext (1).jpg';
import exterior2 from './assets/Exterior/Ext (2).jpg';
import exterior3 from './assets/Exterior/Ext (3).jpg';
import exterior4 from './assets/Exterior/Ext (4).jpg';
import exterior5 from './assets/Exterior/Ext (5).jpg';
import exterior6 from './assets/Exterior/Ext (6).jpg';
import exterior7 from './assets/Exterior/Ext (7).jpg';
import exterior8 from './assets/Exterior/Ext (8).jpg';
import exterior9 from './assets/Exterior/Ext (9).jpg';
import exterior10 from './assets/Exterior/Ext (10).jpg';
import exterior11 from './assets/Exterior/Ext (11).jpg';
import exterior12 from './assets/Exterior/Ext (12).jpg';

import interior1 from './assets/Interior/23555986-building-8714884_1920.jpg';
import interior2 from './assets/Interior/23555986-real-estate-9053405_1920.jpg';
import interior3 from './assets/Interior/DarkOrangeWhite.jpg';
import interior4 from './assets/Interior/OrangeWhite.jpg';
import interior5 from './assets/Interior/StudioOrange.jpg';
import interior6 from './assets/Interior/WhiteWall.jpg';

import residential1 from './assets/Residential/Resi (1).jpg';
import residential2 from './assets/Residential/Resi (1).png';
import residential3 from './assets/Residential/Resi (2).jpg';
import residential4 from './assets/Residential/Resi (3).jpg';
import residential5 from './assets/Residential/Resi (4).jpg';
import residential6 from './assets/Residential/Resi (5).jpg';
import residential7 from './assets/Residential/Resi (6).jpg';
import residential8 from './assets/Residential/Resi (7).jpg';
import residential9 from './assets/Residential/Resi (8).jpg';
import residential10 from './assets/Residential/Resi (9).jpg';
import residential11 from './assets/Residential/Resi (10).jpg';

export default function PortfolioSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  // Category data with their specific images
  const categories = useMemo(() => [
    { 
      title: 'Commercial', 
      text: 'Scaling beauty for modern business fronts.', 
      image: imgComm,
      images: [commercial1, commercial2, commercial3, commercial4, commercial5, commercial6, commercial7]
    },
    { 
      title: 'Residential', 
      text: 'Making every house feel like a forever home.', 
      image: imgResi,
      images: [residential1, residential2, residential3, residential4, residential5, residential6, residential7, residential8, residential9, residential10, residential11]
    },
    { 
      title: 'Interior', 
      text: 'Setting the perfect mood for your indoor spaces.', 
      image: imgInt,
      images: [interior1, interior2, interior3, interior4, interior5, interior6]
    },
    { 
      title: 'Exterior', 
      text: 'Protecting and styling your architectural facade.', 
      image: imgExt,
      images: [exterior1, exterior2, exterior3, exterior4, exterior5, exterior6, exterior7, exterior8, exterior9, exterior10, exterior11, exterior12]
    }
  ], []);

  // Get current category images
  const currentImages = categories[activeCategory]?.images || [];

  // Memoize handlers
  const openGallery = useCallback((index) => {
    setActiveCategory(index);
    setCurrentIndex(0);
    setIsGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => setIsGalleryOpen(false), []);
  
  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  }, [currentImages.length]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  }, [currentImages.length]);

  const switchCategory = useCallback((e, index) => {
    e.stopPropagation();
    setActiveCategory(index);
    setCurrentIndex(0);
  }, []);

  return (
    
    <section className="relative py-32 px-8 md:px-16 w-full flex flex-col items-center font-playfair overflow-hidden text-white">
      
      {/*  Backgrounddrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgBlackBackdrop} 
          alt="Dark Textured Background" 
          className="w-full h-full object-cover blur-md scale-105 opacity-80" 
        />
        {/* 4. The Continuing Gradient: Starts where the About section left off */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-sm">Gallery</h2>
        <p className="text-xl text-gray-300 font-medium drop-shadow-sm">Welcome to Josta's Art Gallery. Explore some of our best work.</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {categories.map((category, index) => (
          <div 
            key={category.title} 
            onClick={() => openGallery(index)}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-[40px] p-4 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-500 flex flex-col"
          >
            <div className="w-full h-56 rounded-3xl overflow-hidden mb-6 relative">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
                {category.title}
              </h3>
              <p className="text-gray-300 italic text-lg leading-relaxed">{category.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/*  Gallery  */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex justify-center items-center" onClick={closeGallery}>
          <button onClick={closeGallery} className="absolute top-8 right-8 text-white text-5xl hover:text-gray-400 transition-colors cursor-pointer z-50">
            &times;
          </button>
          
          <button onClick={prevImage} className="absolute left-4 md:left-12 text-white text-6xl hover:text-gray-400 transition-colors cursor-pointer z-50 p-4">
            &#8249;
          </button>

          <img 
            src={currentImages[currentIndex]} 
            alt="Gallery view" 
            className="max-w-[90%] max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />

          <button onClick={nextImage} className="absolute right-4 md:right-12 text-white text-6xl hover:text-gray-400 transition-colors cursor-pointer z-50 p-4">
            &#8250;
          </button>
          
          {/* Category Tabs */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 z-50">
            {categories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={(e) => switchCategory(e, idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === idx 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
          
          <div className="absolute bottom-8 text-white text-xl tracking-widest">
            {currentIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </section>
  );
}