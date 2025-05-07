import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold flex items-center">
            <Zap className="mr-2 text-purple-600" size={28} />
            Quorr-AI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#dashboard" className="text-gray-600 hover:text-purple-600 transition-colors">Dashboard</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Testimonials</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            Log in
          </a>
          <a href="#" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity shadow-sm">
            Get Started
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <a href="#features" 
              className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >Features</a>
            <a href="#dashboard" 
              className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >Dashboard</a>
            <a href="#pricing" 
              className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >Pricing</a>
            <a href="#testimonials" 
              className="px-4 py-2 text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >Testimonials</a>
            <a href="#" className="px-4 py-2 text-purple-600 font-medium">Log in</a>
            <a href="#" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md w-full text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;