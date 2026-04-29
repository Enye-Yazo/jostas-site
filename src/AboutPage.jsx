import { useState, useEffect } from 'react';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg';
import imgJosta from './assets/Josta.jpg';
import imgBrushes from './assets/Brushes.jpg';

export default function AboutPage() {
  const steps = [
    { title: "Select Service", desc: "Select desired service and fill in your details." },
    { title: "Estimate", desc: "Get an estimate quotation." },
    { title: "Final Quote", desc: "Site inspection and final quote." },
    { title: "Transform", desc: "Our Master painters bring colour to your world." }
  ];

  return (
    <div className="relative min-h-screen font-playfair text-white overflow-hidden">
      
      {/* 1. Backdrop & Gradient Effect */}
      <div className="fixed inset-0 z-0">
        <img 
          src={imgBlackBackdrop} 
          className="w-full h-full object-cover blur-md scale-105 opacity-80" 
          alt="Backdrop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-40 pb-32 space-y-40">
        
        {/* 2. Section: Our Origins */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">Our Origins</h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-200">
              <p>
                Josta’s Master Painters began with a single vision in the heart of Durban: to transform 
                the standard of residential and commercial finishes from functional to artisanal. 
              </p>
              <p>
                Founded on the principles of precision and local heritage, we have spent decades 
                perfecting the science of pigment and the soul of application.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={imgJosta} 
              className="w-full max-w-md aspect-[3/4] object-cover rounded-[60px] border-4 border-white/20 shadow-2xl" 
              alt="Josta at work" 
            />
          </div>
        </section>

        {/* 3. Section: Our Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 tracking-tight">Our Philosophy</h2>
            <div className="space-y-6 text-xl leading-relaxed text-gray-200">
              <p>
                We believe in **high-quality bespoke paint finishes** that do more than cover a surface. 
                Our approach integrates **premium interior and exterior painting** techniques.
              </p>
              <p>
                As **master painters**, our philosophy is centered on the "bespoke" experience, ensuring 
                a tailored finish that enhances property value and improves the daily experience of the space.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={imgBrushes} 
              className="w-full max-w-md aspect-[3/4] object-cover rounded-[60px] border-4 border-white/20 shadow-2xl" 
              alt="Painting brushes" 
            />
          </div>
        </section>

        {/* 4. Section: Easy as One Two Three (Updated Stepper) */}
        <section className="pb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 tracking-tight text-left">Easy as One Two Three... Four</h2>
          <p className="font-playfair"></p>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-8">
            {/* The Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/20 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center space-y-6 flex-1">
                {/* Numeric Circle */}
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Text Content */}
                <div className="space-y-2">
                  <h4 className="font-bold text-lg uppercase tracking-widest text-white">{step.title}</h4>
                  <p className="text-sm text-gray-300 leading-snug px-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}