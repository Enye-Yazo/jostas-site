import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import imgBlackBackdrop from './assets/BlackPaintBackdrop.jpg';
import { FaHouse, FaBuilding, FaCouch, FaTrowelBricks, FaScroll, FaPalette } from "react-icons/fa6";

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  
  
  const [turnstileToken, setTurnstileToken] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  // array tile
 const services = [
    { title: "Residential", icon: <FaHouse className="w-7 h-7" />, short: "Premium home painting services.", long: "Our residential services include full interior and exterior painting, decorative finishes, and meticulous surface preparation." },
    { title: "Commercial", icon: <FaBuilding className="w-7 h-7" />, short: "Professional solutions for business.", long: "We provide scalable painting solutions for offices, retail spaces, and industrial buildings." },
    { title: "Interior", icon: <FaCouch className="w-7 h-7" />, short: "Detailed indoor transformations.", long: "From accent walls to ceiling restoration, our interior master painters use high-quality, low-VOC paints." },
    { title: "Exterior", icon: <FaTrowelBricks className="w-7 h-7" />, short: "Weather-resistant finishes.", long: "We specialize in protecting your property's facade using advanced weather-resistant coatings." },
    { title: "Wallpaper", icon: <FaScroll className="w-7 h-7" />, short: "Bespoke wall coverings.", long: "Beyond paint, we offer professional installation of designer wallpapers and custom wall coverings." },
    { title: "Color Consultation", icon: <FaPalette className="w-7 h-7" />, short: "Expert palette design.", long: "Our experts help you select the perfect palette based on color psychology, lighting, and your personal style." }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Gather all form data securely
    const formData = new FormData(e.target);
    formData.append("access_key", "0b088ced-bd24-4ca3-b350-6c429db79654");
    
    // Web3Forms native Turnstile integration
    formData.append("cf-turnstile-response", turnstileToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        e.target.reset(); // Clear the form
        setTurnstileToken(''); // Reset Turnstile
      } else {
        console.error('Web3Forms error:', result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen font-playfair text-white overflow-x-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img src={imgBlackBackdrop} className="w-full h-full object-cover blur-md scale-105 opacity-80" alt="Backdrop" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pt-40 pb-32">
        
        {/* Services Header & Grid */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              onClick={() => setActiveService(service)}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[40px] cursor-pointer hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center shadow-2xl"
            >
              
             
              <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 italic">{service.short}</p>
            </div>
          ))}
        </div>

        {/* --- NEW SECTION: Contact Form --- */}
        <section className="mt-40 max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 p-10 md:p-16 rounded-[60px] shadow-2xl">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-2">Like what you see?</h2>
          <p className="text-xl text-gray-400 italic mb-12">- reach out to us</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Service Dropdown */}
            <div>
              <select name="service" required className="w-full bg-black/40 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected>Select a Service</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Colour Consultation">Colour Consultation</option>
              </select>
            </div>

            {/* Request Details */}
            <div>
              <textarea name="message" required rows="4" placeholder="Please tell us more about your request" className="w-full bg-black/40 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <input type="text" name="name" required placeholder="Name" className="w-full bg-black/40 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              
              {/* Validated Email Input */}
              <div>
                <input type="email" name="email" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Please enter a valid email address." placeholder="Email" className="w-full bg-black/40 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>

              {/* Validated Phone Input */}
              <div>
                <input type="tel" name="phone" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number." placeholder="Phone (e.g. 0812345678)" className="w-full bg-black/40 border border-white/30 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>

            {/* Cloudflare Turnstile */}
            <div className="flex justify-center py-4">
              <Turnstile 
                siteKey= "0x4AAAAAADFROSruB_Fk0lw-"
                onSuccess={(token) => setTurnstileToken(token)}
                options={{ theme: 'dark' }}
              />
            </div>

            {/* Status Messages */}
            {formStatus === 'success' && <p className="text-green-400 text-center font-medium">Message sent successfully! We will be in touch.</p>}
            {formStatus === 'error' && <p className="text-red-400 text-center font-medium">Something went wrong. Please try again later.</p>}

            {/* Protected Submit Button */}
            <button 
              type="submit" 
              disabled={!turnstileToken || formStatus === 'submitting'}
              className="w-full px-8 py-5 text-xl font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-xl cursor-pointer"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send'}
            </button>

          </form>
        </section>

        {/* Modal Logic Remains Identical */}
        {activeService && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex justify-center items-center px-4" onClick={() => setActiveService(null)}>
            <div className="bg-white/10 border border-white/30 p-12 rounded-[60px] max-w-2xl w-full relative shadow-[0_0_50px_rgba(255,255,255,0.1)]" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveService(null)} className="absolute top-8 right-10 text-3xl text-gray-400 hover:text-white transition-colors cursor-pointer">&times;</button>
              <div className="w-20 h-20 border border-white/40 rounded-full flex items-center justify-center mb-8 mx-auto text-white">
                {activeService.icon}
              </div>
              <h2 className="text-4xl font-bold mb-6 text-center">{activeService.title}</h2>
              <p className="text-xl leading-relaxed text-gray-200 text-center italic">{activeService.long}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}