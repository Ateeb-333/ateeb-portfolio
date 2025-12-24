'use client';
import { motion } from 'framer-motion';
import { FaBriefcase, FaEnvelope, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      year: "2023",
      title: "Software Engineer – Web Applications & Automation",
      company: "EHM-IT Services",
      location: "Faisalabad, Pakistan",
      period: "July 2023 - Present",
      icon: <FaBriefcase />,
      description: "Developed automated web scraping solutions, built scalable frameworks for dynamic websites, and automated data processing workflows.",
      current: true
    },
    {
      year: "2022",
      title: "Email Marketing Manager",
      company: "EHM-IT Services",
      location: "Faisalabad, Pakistan",
      period: "February 2022 - Present",
      icon: <FaEnvelope />,
      description: "Extracted targeted leads, designed email campaigns, and optimized for better deliverability and conversions.",
      current: true
    },
    {
      year: "2022",
      title: "BS Artificial Intelligence",
      company: "FAST-NUCES",
      location: "Faisalabad, Pakistan",
      period: "September 2022 - Present",
      icon: <FaGraduationCap />,
      description: "Pursuing degree with focus on AI/ML, Data Science, and Full-stack Development.",
      current: true
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-[#0f0f0f] relative overflow-hidden">
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
          <span className="text-gray-500 text-sm uppercase tracking-wider">...Work - Experience...</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Journey
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl">
            ...Career Journey...
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9f31c] via-gray-700 to-gray-800"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className={`absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#141414] rounded-full border-2 border-[#c9f31c] flex items-center justify-center z-10 ${exp.current ? 'ring-2 sm:ring-4 ring-[#c9f31c]/20' : ''}`}>
                  <span className="text-[#c9f31c] font-bold text-xs sm:text-sm md:text-lg">{exp.year}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-60px)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-16 sm:pl-20 md:pl-0`}>
                  <div className="group p-4 sm:p-5 md:p-6 bg-[#141414] rounded-xl sm:rounded-2xl border border-gray-800 hover:border-[#c9f31c]/30 transition-all duration-300">
                    <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1a1a1a] rounded-lg sm:rounded-xl flex items-center justify-center text-[#c9f31c] text-sm sm:text-base">
                        {exp.icon}
                      </div>
                      {exp.current && (
                        <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-[#c9f31c]/10 text-[#c9f31c] rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#c9f31c] transition-colors mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[#c9f31c] font-medium text-xs sm:text-sm mb-1">{exp.company}</p>
                    <p className="text-gray-600 text-[10px] sm:text-sm mb-2 sm:mb-3">{exp.period}</p>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[calc(50%-60px)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
