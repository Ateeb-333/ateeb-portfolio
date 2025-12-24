'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-[#0a0a0a] border-t border-gray-800/50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-6 sm:top-10 left-4 sm:left-10 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c9f31c]"></span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c9f31c]"></span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c9f31c]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-2 sm:mb-4">
            Thank you
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600">
            for watching.
          </p>
        </motion.div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 pt-8 sm:pt-10 border-t border-gray-800/50">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <a href="#" className="text-2xl sm:text-3xl font-bold text-white">
              Ateeb<span className="text-[#c9f31c]">.</span>
            </a>
            <p className="text-gray-500 mt-1 sm:mt-2 max-w-xs text-sm sm:text-base">
              Full-stack Developer & AI/ML Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          >
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-[#c9f31c] transition-colors text-sm sm:text-base"
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Social & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            <a
              href="https://github.com/Ateeb-333"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#141414] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all"
            >
              <FaGithub size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ateeb-chaudary-a6a0a0263/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#141414] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all"
            >
              <FaLinkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/ateeb_chaudary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#141414] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all"
            >
              <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#c9f31c] rounded-lg flex items-center justify-center text-black hover:bg-[#d4f73d] transition-all"
            >
              <FaArrowUp size={14} className="sm:w-4 sm:h-4" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Ateeb Chaudary. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-1">
            Designed & Built with <FaHeart className="text-[#c9f31c]" /> in Pakistan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
