import { useState } from 'react';
import imgComm from './assets/CommTile.jpg';
import imgResi from './assets/ResiTile.jpg';
import imgInt from './assets/IntTile.jpg';
import imgExt from './assets/ExtTile.jpg';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg'; // 1. Imported the black textured backdrop

export default function PortfolioSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tiles = [
    { title: 'Commercial', text: 'Scaling beauty for modern business fronts.', image: imgComm },
    { title: 'Residential', text: 'Making every house feel like a forever home.', image: imgResi },
    { title: 'Interior', text: 'Setting the perfect mood for your indoor spaces.', image: imgInt },
    { title: 'Exterior', text: 'Protecting and styling your architectural facade.', image: imgExt }
  ];

  const galleryImages = Array(5).fill([imgComm, imgResi, imgInt, imgExt]).flat();

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    // 2. Removed the heavy boundary shadow and set text-white
    <section className="relative py-32 px-8 md:px-16 w-full flex flex-col items-center font-playfair overflow-hidden text-white">
      
      {/* 3. The Seamless Background Layer */}
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
        {tiles.map((tile, index) => (
          <div 
            key={tile.title} 
            onClick={() => openGallery(index)}
            // 5. Updated to dark mode Liquid Glass (bg-white/10)
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-[40px] p-4 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-500 flex flex-col"
          >
            <div className="w-full h-56 rounded-3xl overflow-hidden mb-6 relative">
              <img src={tile.image} alt={tile.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                {/* Updated the little dot icon to white */}
                <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
                {tile.title}
              </h3>
              <p className="text-gray-300 italic text-lg leading-relaxed">{tile.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* The Gallery Modal (Remains identical as it was already dark and premium) */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex justify-center items-center" onClick={closeGallery}>
          <button onClick={closeGallery} className="absolute top-8 right-8 text-white text-5xl hover:text-gray-400 transition-colors cursor-pointer z-50">
            &times;
          </button>
          
          <button onClick={prevImage} className="absolute left-4 md:left-12 text-white text-6xl hover:text-gray-400 transition-colors cursor-pointer z-50 p-4">
            &#8249;
          </button>

          <img 
            src={galleryImages[currentIndex]} 
            alt="Gallery view" 
            className="max-w-[90%] max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />

          <button onClick={nextImage} className="absolute right-4 md:right-12 text-white text-6xl hover:text-gray-400 transition-colors cursor-pointer z-50 p-4">
            &#8250;
          </button>
          
          <div className="absolute bottom-8 text-white text-xl tracking-widest">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}