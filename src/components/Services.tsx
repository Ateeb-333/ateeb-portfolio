'use client';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRobot, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Web Development',
      description: 'Building modern, responsive web applications using Next.js, React, and Node.js.',
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: 'AI/ML Solutions',
      description: 'Developing intelligent systems using machine learning and deep learning.',
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: 'Automation',
      description: 'Creating automated workflows, web scrapers, and data extraction tools.',
    },
    {
      icon: <FaDatabase className="text-2xl" />,
      title: 'Backend Development',
      description: 'Designing scalable backend systems with databases and APIs.',
    },
  ];

  const techStack = [
    'React', 'Next.js', 'Python', 'Node.js', 'TypeScript', 
    'TensorFlow', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
        <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-gray-500 text-sm uppercase tracking-wider">...Services...</span>
        </motion.div>

        {/* Big Typography Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl">
            Craft Unforgettable and Impactful{' '}
            <span className="text-gray-500">Websites, Web Applications,</span> and Mobile Apps
            <br className="hidden sm:block" />
            <span className="text-gray-500"> Awesome Digital Branding, Design, and Development</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Left - Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-[#141414] rounded-2xl border border-gray-800 hover:border-[#c9f31c]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-[#c9f31c] mb-4 group-hover:bg-[#c9f31c] group-hover:text-black transition-all">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#c9f31c] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right - Circular Tech Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border border-gray-800"></div>
              
              {/* Inner circle */}
              <div className="absolute inset-8 rounded-full border border-gray-800"></div>
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#141414] rounded-full border border-gray-700 flex items-center justify-center">
                  <span className="text-[#c9f31c] font-bold text-sm text-center">Tech<br/>Stack</span>
                </div>
              </div>

              {/* Tech items positioned around circle */}
              {techStack.map((tech, index) => {
                const angle = (index * 36) - 90; // 360/10 = 36 degrees
                const radius = 100; // Fixed radius that works on all screens
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#141414] rounded-full border border-gray-800 flex items-center justify-center hover:border-[#c9f31c] transition-colors cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-medium text-center px-1">{tech}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] rounded-2xl sm:rounded-3xl border border-gray-800 p-5 sm:p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Integration</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Working in a tight integration experience, I seamlessly connect various technologies 
                and platforms to deliver comprehensive solutions that meet your business needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-end">
              {['APIs', 'Cloud', 'Database', 'DevOps', 'CI/CD', 'Testing'].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1a1a1a] rounded-full text-gray-400 text-sm border border-gray-800 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-all cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
