'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import emailjs from '@emailjs/browser';

// Toast notification component
const Toast = ({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl border ${
        type === 'success' 
          ? 'bg-[#141414] border-[#c9f31c] text-white' 
          : 'bg-[#141414] border-red-500 text-white'
      }`}
    >
      {type === 'success' ? (
        <FaCheckCircle className="text-[#c9f31c] text-xl" />
      ) : (
        <FaExclamationCircle className="text-red-500 text-xl" />
      )}
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white transition-colors">
        ✕
      </button>
    </motion.div>
  );
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS Configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || 'YOUR_AUTOREPLY_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Ateeb',
      };

      // Send email to Ateeb
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Send confirmation email to the user
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        from_name: 'Ateeb Chaudary',
      };
      
      await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
      
      showToast('Message sent successfully! Check your email for confirmation.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9f31c]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9f31c]/5 rounded-full blur-3xl"></div>

      {/* Decorative dots */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
        <span className="w-2 h-2 rounded-full bg-[#c9f31c]"></span>
        <span className="w-2 h-2 rounded-full bg-white/20"></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:text-left"
        >
          <span className="inline-block px-4 py-2 bg-[#c9f31c]/10 rounded-full text-[#c9f31c] text-sm font-medium uppercase tracking-wider">
            Get In Touch
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Big Typography */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
              Let's work{' '}
              <span className="text-[#c9f31c]">together</span> and create something{' '}
              <span className="text-gray-500">amazing.</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              I'm currently available for freelance work and full-time positions. If you have a project that needs coding or you need a developer, let's connect!
            </p>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              <motion.a 
                href="mailto:ateebxasd333@gmail.com" 
                className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-2xl bg-[#141414]/50 border border-gray-800/50 hover:border-[#c9f31c]/50 transition-all duration-300 justify-center lg:justify-start"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#c9f31c]/20 to-[#c9f31c]/5 border border-[#c9f31c]/30 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-[#c9f31c] text-lg sm:text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs sm:text-sm">Email</p>
                  <p className="text-white group-hover:text-[#c9f31c] transition-colors text-sm sm:text-base">ateebasad333@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="tel:+923126629395" 
                className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-4 rounded-2xl bg-[#141414]/50 border border-gray-800/50 hover:border-[#c9f31c]/50 transition-all duration-300 justify-center lg:justify-start"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#c9f31c]/20 to-[#c9f31c]/5 border border-[#c9f31c]/30 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone className="text-[#c9f31c] text-lg sm:text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs sm:text-sm">Phone</p>
                  <p className="text-white group-hover:text-[#c9f31c] transition-colors text-sm sm:text-base">+92 312-6629395</p>
                </div>
              </motion.a>
              
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[#141414]/50 border border-gray-800/50 justify-center lg:justify-start"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#c9f31c]/20 to-[#c9f31c]/5 border border-[#c9f31c]/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#c9f31c] text-lg sm:text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-xs sm:text-sm">Location</p>
                  <p className="text-white text-sm sm:text-base">Faisalabad, Pakistan</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              {[
                { icon: FaGithub, href: 'https://github.com/Ateeb-333', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ateeb-chaudary-a6a0a0263/', label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com/ateeb_chaudary', label: 'Instagram' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-[#141414] border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:border-[#c9f31c] hover:text-[#c9f31c] hover:bg-[#c9f31c]/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg sm:text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#141414] to-[#0f0f0f] rounded-3xl border border-gray-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Form decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9f31c]/5 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 bg-[#c9f31c]/20 rounded-xl flex items-center justify-center">
                    <FaPaperPlane className="text-[#c9f31c]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h3>
                </div>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="text-gray-400 text-xs sm:text-sm mb-2 block font-medium">
                        Your Name <span className="text-[#c9f31c]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="your name"
                          className={`w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border-2 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                            errors.name 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'name'
                                ? 'border-[#c9f31c]'
                                : 'border-gray-800 hover:border-gray-700'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-xs mt-1 flex items-center gap-1"
                            >
                              <FaExclamationCircle className="text-xs" />
                              {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="text-gray-400 text-xs sm:text-sm mb-2 block font-medium">
                        Your Email <span className="text-[#c9f31c]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="abc@example.com"
                          className={`w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border-2 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                            errors.email 
                              ? 'border-red-500 focus:border-red-500' 
                              : focusedField === 'email'
                                ? 'border-[#c9f31c]'
                                : 'border-gray-800 hover:border-gray-700'
                          }`}
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-xs mt-1 flex items-center gap-1"
                            >
                              <FaExclamationCircle className="text-xs" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="text-gray-400 text-xs sm:text-sm mb-2 block font-medium">
                      Subject <span className="text-[#c9f31c]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Project Inquiry"
                        className={`w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border-2 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
                          errors.subject 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'subject'
                              ? 'border-[#c9f31c]'
                              : 'border-gray-800 hover:border-gray-700'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-xs mt-1 flex items-center gap-1"
                          >
                            <FaExclamationCircle className="text-xs" />
                            {errors.subject}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="text-gray-400 text-xs sm:text-sm mb-2 block font-medium">
                      Message <span className="text-[#c9f31c]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={4}
                        placeholder="Tell me about your project..."
                        className={`w-full px-4 py-3 sm:py-4 bg-[#1a1a1a] border-2 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base ${
                          errors.message 
                            ? 'border-red-500 focus:border-red-500' 
                            : focusedField === 'message'
                              ? 'border-[#c9f31c]'
                              : 'border-gray-800 hover:border-gray-700'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-xs mt-1 flex items-center gap-1"
                          >
                            <FaExclamationCircle className="text-xs" />
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#c9f31c] text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isLoading 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-[#d4f73d] hover:shadow-lg hover:shadow-[#c9f31c]/20'
                    }`}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <ImSpinner8 className="animate-spin text-lg" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </motion.button>

                  {/* Form Note */}
                  <p className="text-gray-600 text-xs text-center">
                    I typically respond within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
