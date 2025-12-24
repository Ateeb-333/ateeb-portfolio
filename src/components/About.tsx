'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa';

const About = () => {
  const achievements = [
    { icon: <FaAward />, title: 'Best Employee of Month', org: 'EHM-IT Services' },
    { icon: <FaTrophy />, title: 'Battle of Code', org: 'Winner' },
    { icon: <FaAward />, title: 'Ambassador', org: 'Wateen Telecom Limited' },
  ];

  const skills = [
    'JavaScript', 'Python', 'C/C++', 'C#', 'SQL', 'React', 'Next.js', 'Node.js',
    'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Selenium', 'OpenCV'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative pb-8 sm:pb-0">
              <div className="aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-[#141414] rounded-2xl sm:rounded-3xl border border-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9f31c]/10 to-transparent" />
                <div className="h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/p1.jpeg" 
                    alt="Ateeb Chaudary"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Education floating card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-bottom-6 sm:-right-6 bg-[#141414] border border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-2xl w-[90%] sm:w-auto sm:max-w-xs">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c9f31c]/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-[#c9f31c] text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-xs sm:text-sm truncate">BS Artificial Intelligence</p>
                    <p className="text-gray-500 text-[10px] sm:text-xs">FAST-NUCES • 2022 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#c9f31c] text-xs sm:text-sm font-medium uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4 sm:mb-6">
              Passionate Software
              <br />
              <span className="text-gray-400">Engineer</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              I'm a Software Engineer with expertise in developing modern web applications and AI/ML solutions. I specialize in building automation tools, web scraping systems, and scalable backend services.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Currently pursuing BS in Artificial Intelligence at FAST-NUCES, combining academic knowledge with hands-on industry experience at EHM-IT Services.
            </p>

            {/* Skills */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-white font-semibold mb-3 sm:mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm text-gray-300 hover:border-[#c9f31c] hover:text-[#c9f31c] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4">Achievements</h4>
              <div className="space-y-2 sm:space-y-3">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-gray-400 flex-wrap sm:flex-nowrap">
                    <span className="text-[#c9f31c]">{item.icon}</span>
                    <span className="text-sm sm:text-base">{item.title}</span>
                    <span className="text-gray-600 hidden sm:inline">•</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{item.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
