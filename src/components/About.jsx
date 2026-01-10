import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              AI-Driven Computational Biology
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a Senior Research Fellow at Gujarat Biotechnology Research Centre, specializing in 
              the intersection of <span className="text-accent-400 font-semibold">artificial intelligence</span> and 
              <span className="text-bio-400 font-semibold"> computational biology</span>. With 3+ years of 
              hands-on experience in genomics and bioinformatics, I'm now expanding into AI-powered approaches 
              for drug discovery, disease modeling, and precision medicine.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My work bridges traditional bioinformatics with cutting-edge machine learning to solve complex 
              biological problems. From analyzing multi-omics data to developing predictive models, I'm passionate 
              about leveraging AI to accelerate therapeutic discovery and understand disease mechanisms at the 
              molecular level.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Research Focus & Expertise
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">🧬</span>
                <span><strong className="text-white">Multi-Omics Analysis:</strong> WGS, WES, RNA-Seq, metagenomics, and microarray data analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">🤖</span>
                <span><strong className="text-white">AI/ML Applications:</strong> Deep learning for sequence analysis, predictive modeling, and network analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">💊</span>
                <span><strong className="text-white">Drug Discovery:</strong> Protein structure prediction (AlphaFold), molecular modeling, and target identification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">📊</span>
                <span><strong className="text-white">Data Science:</strong> Statistical modeling, dimensionality reduction, and interactive visualization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">🔬</span>
                <span><strong className="text-white">Disease Biology:</strong> CAD genetics, viral genomics, and microbiome-host interactions</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 glass-effect p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            AI Learning Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-accent-400 mb-2">Current Focus</h4>
              <ul className="text-gray-300 space-y-1">
                <li>PyTorch & TensorFlow</li>
                <li>Deep Learning Fundamentals</li>
                <li>ML for Genomics</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-400 mb-2">Short-term Goals</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Protein-Ligand Prediction</li>
                <li>Neural Networks for Biology</li>
                <li>AI Project Portfolio</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-bio-400 mb-2">Long-term Vision</h4>
              <ul className="text-gray-300 space-y-1">
                <li>AI-Driven Research Lead</li>
                <li>Novel AI Tools Development</li>
                <li>Publications in AI+Bio</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
