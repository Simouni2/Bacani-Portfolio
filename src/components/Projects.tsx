'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'MuniciFix',
      description:
        'Municipal issue reporting platform with AI-powered categorization, real-time status tracking, and image upload support for efficient problem resolution.',
      image: '/MuniciFix.png',
      technologies: ['Ionic Angular', 'JavaScript', 'REST APIs', 'Cloudinary'],
      highlights: [
        'K-Means Clustering for issue categorization',
        'Location tracker integration',
        'Real-time status updates',
        'Image upload support',
      ],
      liveLink: 'https://municifix1.vercel.app',
      comingSoon: false,
    },
    {
      id: 2,
      title: 'BAC System',
      description:
        'Pre-verification platform for procurement documents and PPMP management, streamlining document validation and organizational workflows.',
      image: '/BAC.png',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'TypeScript'],
      highlights: [
        'Digital procurement validation',
        'PPMP management automation',
        'Reduced manual workload',
        'Improved document tracking',
      ],
      liveLink: 'https://bac-system-three.vercel.app/',
      comingSoon: false,
    },
    {
      id: 3,
      title: 'StudyLens',
      description:
        'AI-powered system for monitoring academic engagement and identifying distractions in learning environments using advanced machine learning models.',
      image: '/Profile.jpg',
      technologies: ['Python', 'Machine Learning', 'Firebase', 'TensorFlow'],
      highlights: [
        'Engagement detection',
        'Distraction identification',
        'Behavioral analysis',
        'Real-time monitoring',
      ],
      liveLink: '',
      comingSoon: true,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            Explore my latest work showcasing full-stack development, AI integration,
            and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 backdrop-blur-xl h-full flex flex-col">

                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Coming Soon */}
                  {project.comingSoon && (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-bold text-white shadow-lg"
                    >
                      Coming Soon
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 md:p-8">

                  {/* Title */}
                  <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white transition-all duration-300 group-hover:text-cyan-400">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      Key Features
                    </p>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="mt-1 text-cyan-400">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  {!project.comingSoon && (
                    <div className="mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                       className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400 bg-transparent px-5 py-3 text-cyan-300 font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                      >
                        <FiExternalLink className="text-lg" />
                        Live Demo
                      </a>
                    </div>
                  )}
                </div>

                {/* Glow Border */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow:
                      hoveredProject === project.id
                        ? '0 0 40px rgba(34,211,238,0.45)'
                        : '0 0 15px rgba(34,211,238,0.12)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-lg font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Explore More Projects
            <FiExternalLink className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}