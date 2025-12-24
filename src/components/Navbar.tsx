'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          Ateeb<span className="text-[#c9f31c]">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block px-6 py-3 bg-[#c9f31c] text-black font-semibold rounded-full hover:bg-[#d4f73d] transition-all duration-300 text-sm"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[400px] bg-[#0a0a0a]/95 backdrop-blur-xl' : 'max-h-0'
      }`}>
        <div className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-400 hover:text-white transition-colors text-base py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-[#c9f31c] text-black font-semibold rounded-full text-sm mt-2"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
