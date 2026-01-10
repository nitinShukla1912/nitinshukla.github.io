import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI for Variant Classification",
      category: "ai",
      description: "Machine learning model to predict pathogenicity of genetic variants using multi-dimensional features from genomic data.",
      tech: ["PyTorch", "Python", "GATK", "VCF"],
      status: "In Development",
      image: "🧬",
      links: {
        github: "#",
      }
    },
    {
      id: 2,
      title: "Deep Learning miRNA Discovery",
      category: "ai",
      description: "Neural network-based approach for novel miRNA identification in RNA-Seq data, with target prediction and validation.",
      tech: ["TensorFlow", "Python", "miRDeep2"],
      status: "In Progress",
      image: "🤖",
      publication: "https://www.biorxiv.org/content/10.64898/2026.01.09.698608v1.full.pdf",
      links: {
        github: "#",
        paper: "https://www.biorxiv.org/content/10.64898/2026.01.09.698608v1.full.pdf"
      }
    },
    {
      id: 3,
      title: "Coronary Artery Disease ncRNA Analysis",
      category: "genomics",
      description: "Identified dysregulated non-coding RNAs in CAD patients using NextSeq 2000 data with miRDeep2 workflow and target prediction.",
      tech: ["R", "miRDeep2", "DAVID", "qRT-PCR"],
      status: "Completed",
      image: "💓",
      links: {
        paper: "https://www.biorxiv.org/content/10.64898/2026.01.09.698608v1.full.pdf"
      }
    },
    {
      id: 4,
      title: "SARS-CoV-2 Genomic Surveillance",
      category: "genomics",
      description: "Analyzed 746+ SARS-CoV-2 genomes, built Nextstrain for real-time tracking, and developed automated lineage detection for wastewater samples.",
      tech: ["Python", "Bash", "Pangolin", "Nextstrain", "Freyja"],
      status: "Completed",
      image: "🦠",
      links: {
        github: "#",
        data: "https://www.ncbi.nlm.nih.gov/bioproject/PRJNA625669"
      }
    },
    {
      id: 5,
      title: "Camelid Antibody Development (SdAb)",
      category: "genomics",
      description: "Biopanning data analysis from BP0 to BP5 using MIXCR for clonotype assembly and VDJtools for statistical analysis.",
      tech: ["R", "MIXCR", "VDJtools", "Immunarch", "IMGT"],
      status: "Completed",
      image: "🐪",
      links: {
        github: "#"
      }
    },
    {
      id: 6,
      title: "Aquaculture Genomics - Salinity Adaptation",
      category: "genomics",
      description: "Multi-tissue transcriptomics revealing adaptation mechanisms in Labeo rohita under hypersaline conditions.",
      tech: ["R", "DESeq2", "STAR", "Cytoscape"],
      status: "Published",
      image: "🐟",
      links: {
        paper: "https://doi.org/10.1038/s41597-024-03056-y"
      }
    },
    {
      id: 7,
      title: "Rumen Microbiome Analysis",
      category: "microbiome",
      description: "Metagenomic analysis of rumen microbiome in sheep and goats under Moringa leaf supplementation using Diamond BLAST + MEGAN.",
      tech: ["Python", "MEGAN6", "Diamond BLAST", "MOCHI"],
      status: "Published",
      image: "🦙",
      links: {
        paper: "https://doi.org/10.1016/j.nbt.2025.01.006"
      }
    },
    {
      id: 8,
      title: "Protein Structure Prediction with AlphaFold",
      category: "ai",
      description: "Protein modeling of SARS-CoV-2 variants using AlphaFold, Swiss-model, and i-TASSER for structural analysis.",
      tech: ["AlphaFold", "Python", "PyMOL"],
      status: "Completed",
      image: "🔬",
      links: {
        github: "#"
      }
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'genomics', label: 'Genomics' },
    { id: 'microbiome', label: 'Microbiome' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          From AI-driven discovery to traditional bioinformatics, explore my research portfolio 
          spanning genomics, machine learning, and computational biology.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="glass-effect p-6 card-hover flex flex-col"
              >
                {/* Project Icon/Image */}
                <div className="text-6xl mb-4 text-center">{project.image}</div>

                {/* Status Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' || project.status === 'Published'
                      ? 'bg-bio-500/20 text-bio-400 border border-bio-500/30'
                      : 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-bio-400 transition-colors"
                    >
                      <FaFilePdf /> Paper
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
