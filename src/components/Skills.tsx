'use client';
import { motion } from 'framer-motion';
import { SiJavascript, SiPython, SiCplusplus, SiSharp, SiMysql, SiPostgresql, SiHtml5, SiCss3, SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiWordpress, SiTableau, SiTailwindcss, SiBootstrap, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiOpencv, SiSelenium } from 'react-icons/si';
import { TbChartLine, TbWaveSine, TbRobot } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "C#", icon: <SiSharp /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
      ]
    },
    {
      title: "Frameworks",
      icon: "🚀",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "WordPress", icon: <SiWordpress /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Voiceflow", icon: <TbRobot /> },
      ]
    },
    {
      title: "Libraries & Tools",
      icon: "🛠️",
      skills: [
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <TbChartLine /> },
        { name: "Seaborn", icon: <TbChartLine /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "Librosa", icon: <TbWaveSine /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Selenium", icon: <SiSelenium /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-[#c9f31c] text-xs sm:text-sm font-medium uppercase tracking-wider">My Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white flex items-center gap-2">
                <span>{category.icon}</span> {category.title}
              </h3>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#141414] border border-gray-800 hover:border-[#c9f31c] transition-all duration-300 text-center cursor-pointer"
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-gray-400 group-hover:text-[#c9f31c] transition-colors flex justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
