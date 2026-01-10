import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiR, SiGit, SiDocker, SiLinux,
  SiPytorch, SiTensorflow, SiJupyter, SiPlotly 
} from 'react-icons/si';
import { FaDatabase, FaChartLine, FaDna, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      color: "accent",
      skills: [
        { name: "PyTorch", level: 70, icon: <SiPytorch /> },
        { name: "TensorFlow", level: 65, icon: <SiTensorflow /> },
        { name: "Deep Learning", level: 75, icon: <FaBrain /> },
        { name: "Statistical ML", level: 85, icon: <FaChartLine /> },
      ]
    },
    {
      title: "Programming Languages",
      icon: <SiPython />,
      color: "primary",
      skills: [
        { name: "R", level: 95, icon: <SiR /> },
        { name: "Python", level: 85, icon: <SiPython /> },
        { name: "Bash", level: 90, icon: <SiLinux /> },
        { name: "SQL", level: 70, icon: <FaDatabase /> },
      ]
    },
    {
      title: "Bioinformatics & Genomics",
      icon: <FaDna />,
      color: "bio",
      skills: [
        { name: "NGS Analysis", level: 95, icon: <FaDna /> },
        { name: "RNA-Seq", level: 90 },
        { name: "WGS/WES", level: 90 },
        { name: "Metagenomics", level: 85 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <SiJupyter />,
      color: "accent",
      skills: [
        { name: "GATK", level: 90 },
        { name: "AlphaFold", level: 80 },
        { name: "Git/GitHub", level: 85, icon: <SiGit /> },
        { name: "Docker", level: 75, icon: <SiDocker /> },
      ]
    },
    {
      title: "Data Science & Visualization",
      icon: <FaChartLine />,
      color: "primary",
      skills: [
        { name: "ggplot2", level: 95, icon: <SiR /> },
        { name: "Plotly", level: 85, icon: <SiPlotly /> },
        { name: "Statistical Analysis", level: 90, icon: <FaChartLine /> },
        { name: "Data Wrangling", level: 95 },
      ]
    },
    {
      title: "High-Performance Computing",
      icon: <FaDatabase />,
      color: "bio",
      skills: [
        { name: "HPC & Parallelization", level: 85 },
        { name: "Cloud Computing", level: 75 },
        { name: "Pipeline Development", level: 90 },
        { name: "Data Management", level: 85, icon: <FaDatabase /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-gray-900/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-effect p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl text-${category.color}-400`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 text-gray-300">
                        {skill.icon && <span className="text-sm">{skill.icon}</span>}
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.1 }}
                        className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 h-2 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass-effect p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            AI & Bioinformatics Toolkit
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'PyTorch', 'TensorFlow', 'Scikit-learn', 'AlphaFold', 'GATK', 'bcftools',
              'STAR', 'TRINITY', 'DESeq2', 'ggplot2', 'Cytoscape', 'WGCNA', 'Jupyter',
              'Conda', 'Git', 'Docker', 'HPC', 'Cloud Computing', 'NGS Pipelines'
            ].map((tool, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 rounded-full text-sm font-medium hover:from-accent-500/30 hover:to-primary-500/30 transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
