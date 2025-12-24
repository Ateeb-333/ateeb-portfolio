'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-10 left-10 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-1 lg:order-1"
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-gray-700 bg-[#141414] mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9f31c] animate-pulse"></span>
              <span className="text-gray-300 text-xs sm:text-sm">Available for work</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-4 sm:mb-6">
              Software
              <br />
              <span className="text-gray-500">Engineer</span>
            </h1>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
              Software Engineer with experience in developing modern web applications and AI/ML solutions. 
              Skilled in building automation and web scraping solutions, designing backend services, 
              and integrating databases to support scalable business workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="/Ateeb_Chaudary_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#c9f31c] text-black font-semibold rounded-full hover:bg-[#d4f73d] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <FaDownload />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-gray-700 text-white font-medium rounded-full hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Follow me</span>
              <div className="flex gap-4">
                <a href="https://github.com/Ateeb-333" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/ateeb-chaudary-a6a0a0263/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://www.instagram.com/ateeb_chaudary" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-2"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f0f]">
                {/* Wave decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/p2.jpeg" 
                  alt="Ateeb Chaudary"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6"
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border border-gray-800">
                    <p className="text-lg sm:text-2xl font-bold text-[#c9f31c]">3+</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Years Exp</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border border-gray-800">
                    <p className="text-lg sm:text-2xl font-bold text-[#c9f31c]">20+</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Projects</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 text-center border border-gray-800">
                    <p className="text-lg sm:text-2xl font-bold text-[#c9f31c]">10+</p>
                    <p className="text-[10px] sm:text-xs text-gray-400">Technologies</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
              <span className="w-2 h-2 rounded-full bg-white/20"></span>
              <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="hidden sm:flex justify-center mt-8 sm:mt-16"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#c9f31c] transition-colors">
            <span className="text-sm">Scroll</span>
            <HiArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#c9f31c] py-3 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-black font-semibold mx-8">★ FULL STACK DEVELOPER</span>
            <span className="text-black font-semibold mx-8">★ AI/ML ENGINEER</span>
            <span className="text-black font-semibold mx-8">★ WEB AUTOMATION</span>
            <span className="text-black font-semibold mx-8">★ DATA SCRAPING</span>
            <span className="text-black font-semibold mx-8">★ FULL STACK DEVELOPER</span>
            <span className="text-black font-semibold mx-8">★ AI/ML ENGINEER</span>
            <span className="text-black font-semibold mx-8">★ WEB AUTOMATION</span>
            <span className="text-black font-semibold mx-8">★ DATA SCRAPING</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
