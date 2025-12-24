'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaAward, FaTrophy, FaMedal } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "EHM Tech Website",
      description: "Designed and developed a production-ready technology website using modern web technologies, focusing on performance, responsiveness, and maintainable architecture.",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "🌐",
      liveUrl: "https://www.ehmtechservices.com",
      githubUrl: null
    },
    {
      title: "Speech Emotion Recognition",
      description: "Implemented Speech Emotion Recognition using RAVDESS dataset. Trained CNN models with Mel-spectrograms and Bi-LSTM models with MFCC features to classify emotional states.",
      tags: ["Python", "TensorFlow", "CNN", "Bi-LSTM"],
      image: "🎙️",
      liveUrl: null,
      githubUrl: "https://github.com/Ateeb-333/speech-emotion-recognition-ravdess"
    },
    {
      title: "MinerU with Explainable AI",
      description: "Built an intelligent document processing system that extracts structured data from PDFs and applies machine learning with explainability using LIME and SHAP.",
      tags: ["Python", "ML", "LIME", "SHAP"],
      image: "🧠",
      liveUrl: null,
      githubUrl: "https://github.com/Ateeb-333/MinerU_XAI"
    },
    {
      title: "Smart Energy Recommender",
      description: "Developed a Retrieval-Augmented Generation (RAG) based recommendation system using FAISS vector similarity search for scalable, context-aware energy recommendations.",
      tags: ["RAG", "FAISS", "NLP"],
      image: "⚡",
      liveUrl: null,
      githubUrl: "https://github.com/mariamffatima/Smart-Energy-Consumption-Recommender-using-FAISS"
    },
    {
      title: "Data Structures & Analysis",
      description: "GitHub contributions including version-control simulation, sentiment analysis scripts, and more data structure implementations.",
      tags: ["Python", "Data Structures", "Analysis"],
      image: "📊",
      liveUrl: null,
      githubUrl: "https://github.com/Ateeb-333/Web-Scraping-Data-Analysis-Project"
    },
    {
      title: "Email Marketing Campaign",
      description: "Executed a targeted email campaign for a Dubai-based real estate company, driving engagement with customized templates and optimized deliverability.",
      tags: ["Marketing", "Analytics", "Automation"],
      image: "📧",
      liveUrl: null,
      githubUrl: null
    }
  ];

  const recognitions = [
    {
      icon: <FaTrophy className="text-yellow-500 text-2xl" />,
      title: "Best Employee of Month",
      organization: "EHM-IT Services",
      year: "2024",
      description: "Recognized for outstanding performance and dedication"
    },
    {
      icon: <FaMedal className="text-blue-500 text-2xl" />,
      title: "Battle of Code",
      organization: "Winner",
      year: "2024",
      description: "1st place in competitive programming contest"
    },
    {
      icon: <FaAward className="text-purple-500 text-2xl" />,
      title: "Ambassador",
      organization: "Wateen Telecom Limited",
      year: "2023",
      description: "Selected as technology ambassador representing the company"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a] relative">
      {/* Decorative dots */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
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
          <span className="text-gray-500 text-sm uppercase tracking-wider">...Projects Showcase...</span>
        </motion.div>

        {/* Big Typography Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            User-centered <span className="text-[#c9f31c]">Development Approach</span> Enhances
            <br className="hidden sm:block" />
            <span className="text-gray-500"> Productivity and Drives Revenue Growth</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20 md:mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-4 sm:p-5 md:p-6 bg-[#141414] rounded-2xl sm:rounded-3xl border border-gray-800 hover:border-[#c9f31c]/30 transition-all duration-500">
                {/* Project Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#1a1a1a] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 md:mb-6 group-hover:bg-[#c9f31c]/10 transition-colors">
                  {project.image}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#c9f31c] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[#1a1a1a] text-gray-400 border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#c9f31c] transition-colors">
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#c9f31c] transition-colors">
                      <FaExternalLinkAlt className="text-lg" />
                    </a>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <span className="text-gray-600 text-sm">Private Project</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials & Recognitions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-gray-500 text-sm uppercase tracking-wider">...Testimonials and Recognitions...</span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12"
        >
          Recognition <span className="text-gray-500">& Awards</span>
        </motion.h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 sm:p-5 md:p-6 bg-[#141414] rounded-xl sm:rounded-2xl border border-gray-800 hover:border-[#c9f31c]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1a1a1a] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#c9f31c] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[#c9f31c] text-xs sm:text-sm">{item.organization}</p>
                </div>
                <span className="text-gray-600 text-xs sm:text-sm flex-shrink-0">{item.year}</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
