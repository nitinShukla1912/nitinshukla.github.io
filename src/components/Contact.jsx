import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { SiResearchgate, SiOrcid } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual EmailJS integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Interested in collaboration, research opportunities, or just want to connect? 
          Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:nitinshukla1912@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaEnvelope className="text-2xl text-accent-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">nitinshukla1912@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <FaPhone className="text-2xl text-primary-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white">+91-7984243353</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <FaMapMarkerAlt className="text-2xl text-bio-400" />
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white">Gandhinagar, Gujarat 382010, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/nitinshukla1912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaGithub className="text-2xl group-hover:text-accent-400 transition-colors" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <FaLinkedin className="text-2xl group-hover:text-primary-400 transition-colors" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <SiResearchgate className="text-2xl group-hover:text-bio-400 transition-colors" />
                  <span className="text-sm">ResearchGate</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <SiOrcid className="text-2xl group-hover:text-accent-400 transition-colors" />
                  <span className="text-sm">ORCID</span>
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-effect p-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bio-500/20 text-bio-400 rounded-full border border-bio-500/30">
                <span className="w-2 h-2 bg-bio-400 rounded-full animate-pulse"></span>
                <span className="font-medium">Available for Collaboration</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent-500 transition-colors text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-bio-400 font-medium"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
