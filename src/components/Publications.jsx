import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { publicationsData } from '../data/publications';

const Publications = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const years = ['all', '2025', '2024', '2023', '2022', '2021'];

  const filteredPublications = selectedYear === 'all'
    ? publicationsData
    : publicationsData.filter(pub => pub.year === selectedYear);

  return (
    <section id="publications" className="section-container bg-gray-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="gradient-text">Publications</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Peer-reviewed publications across genomics, microbiome, virology, and computational biology.
        </p>

        {/* Year Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FaFilter className="text-gray-500 mt-2" />
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedYear === year
                  ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {year === 'all' ? 'All Years' : year}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-effect p-6 hover:shadow-xl hover:shadow-accent-500/10 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center font-bold text-lg">
                    {pub.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white hover:text-accent-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    <span className="text-bio-400 font-medium">{pub.journal}</span>
                    {pub.status && (
                      <span className="ml-2 px-2 py-1 bg-accent-500/20 text-accent-400 rounded text-xs">
                        {pub.status}
                      </span>
                    )}
                  </p>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-400 transition-colors"
                      >
                        <FaExternalLinkAlt /> View Paper
                      </a>
                    )}
                    {pub.pdf && (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        <FaFilePdf /> PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-effect p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">9</div>
            <div className="text-gray-400">Publications</div>
          </div>
          <div className="glass-effect p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">2021-2025</div>
            <div className="text-gray-400">Years Active</div>
          </div>
          <div className="glass-effect p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">Multiple</div>
            <div className="text-gray-400">Research Areas</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Publications;
