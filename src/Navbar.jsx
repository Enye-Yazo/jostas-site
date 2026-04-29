import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // hide/show menu based on scroll direction
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl px-10 py-5 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-full flex justify-between items-center transition-all duration-500 ease-in-out ${
      isVisible ? 'top-6 opacity-100' : '-top-32 opacity-0'
    }`}>
      
      {/* Brand Name with stacked layout */}
      <Link to="/" className="flex flex-col leading-tight cursor-pointer">
        <span className="font-bold text-2xl text-white tracking-tighter">Jostas</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white font-semibold">Master Painters</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-10 font-medium text-white font-playfair">
        <li>
          <Link to="/" className="hover:text-black transition-colors duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black transition-colors duration-300">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-black transition-colors duration-300">Services</Link>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white text-2xl p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link to="/" className="block py-2 hover:text-black transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 hover:text-black transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 hover:text-black transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 hover:text-black transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

