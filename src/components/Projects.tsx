'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import {
  SiReact,
  SiFirebase,
  SiJavascript,
  SiFlutter,
  SiPython,
} from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';

export default function Projects() {
  const projects = [
    {
      title: 'MuniciFix',
      description:
        'A mobile-based platform for municipal issue reporting and resolution with integrated K-Means Clustering for intelligent issue categorization.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      technologies: [
        { name: 'Ionic Angular', icon: MdOutlineApi },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'REST APIs', icon: MdOutlineApi },
        { name: 'Cloudinary', icon: SiReact },
      ],
      highlights: [
        'K-Means Clustering for issue categorization',
        'Tesseract OCR integration',
        'Centralized citizen report management',
        'Automated concern classification',
      ],
      liveLink: 'https://municifix1.vercel.app',
      featured: true,
    },
    {
      title: 'BAC System',
      description:
        'A pre-verification platform for procurement documents and PPMP management, streamlining document validation and organization workflows.',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      technologies: [
        { name: 'React Native', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Firebase', icon: SiFirebase },
      ],
      highlights: [
        'Digital procurement validation',
        'PPMP management automation',
        'Reduced manual workload',
        'Improved document tracking',
      ],
      liveLink: 'https://bac-system-three.vercel.app',
      featured: true,
    },
    {
      title: 'StudyLens',
      description:
        'An AI-based system for monitoring academic engagement and identifying distractions in learning environments using Python and machine learning.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'Machine Learning', icon: SiReact },
        { name: 'Firebase', icon: SiFirebase },
      ],
      highlights: [
        'Engagement and distraction detection',
        'Machine learning models',
        'Behavioral analysis',
        'Real-time monitoring',
      ],
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Project Card */}
                <motion.div
                  className="glass rounded-lg overflow-hidden h-full flex flex-col"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Header Image */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: project.image }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => {
                          const IconComponent = tech.icon;
                          return (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.2 }}
                              className="p-2 glass rounded-lg"
                            >
                              <IconComponent size={18} className="text-cyan-400" />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">
                        Key Features
                      </p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-cyan-400">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-cyan-400 border-opacity-20">
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 hover:glow transition-all"
                        >
                          Live Demo <FiExternalLink size={16} />
                        </motion.a>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
                      >
                        Details <FiExternalLink size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Projects Note */}
          <motion.div
            className="glass rounded-lg p-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-4">
              Check out more projects on my GitHub
            </p>
            <motion.a
              href="https://github.com/Simouni2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors font-semibold"
            >
              <FiGithub /> Visit GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
