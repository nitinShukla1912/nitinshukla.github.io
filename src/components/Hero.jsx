import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiResearchgate, SiOrcid } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-bio-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent-500 via-primary-500 to-bio-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold gradient-text">
                NS
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Nitin <span className="gradient-text">Shukla</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6 gradient-text"
          >
            AI-Driven Computational Biologist
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8"
          >
            Bridging genomics and artificial intelligence to unlock insights in disease biology, 
            drug discovery, and precision medicine.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-gray-400"
          >
            <a href="mailto:nitinshukla1912@gmail.com" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <FaEnvelope /> nitinshukla1912@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <FaPhone /> +91-7984243353
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Gandhinagar, Gujarat
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/nitinshukla1912"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent-400 transition-colors transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent-400 transition-colors transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent-400 transition-colors transform hover:scale-110"
            >
              <SiResearchgate />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-accent-400 transition-colors transform hover:scale-110"
            >
              <SiOrcid />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-sm">Scroll Down</span>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
