'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Bids and Awards Committee (BAC) Office Intern',
      company: 'Cagayan State University - Andrews Campus',
      location: 'Cagayan, Philippines',
      period: 'January 2026 - February 2026',
      startDate: '2026',
      description: 'Developed BACSystem, a solo pre-verification platform for procurement documents and PPMP management using React Native and Firebase, streamlining document validation and organization workflows.',
      responsibilities: [
        'Developed BACSystem, a solo pre-verification platform for procurement documents and PPMP management using React Native and Firebase, streamlining document validation and organization workflows',
        'Organized and managed PPMP documents to improve accessibility and reduce manual processing time within the office',
        'Provided technical support and resolved software and system issues to maintain smooth daily operations and minimize technical disruptions',
      ],
      technologies: ['React Native', 'Firebase', 'PPMP Management', 'Document Processing'],
    },
    {
      id: 2,
      title: 'QA, Application and Website Development Intern',
      company: 'Comptrolla | Quezon City',
      location: 'Quezon City, Philippines',
      period: 'December 2025',
      startDate: '2025',
      description: 'Supported the development team in testing and improving ongoing software applications, contributing to more stable and efficient system performance.',
      responsibilities: [
        'Supported the development team in testing and improving ongoing software applications, contributing to more stable and efficient system performance',
        'Performed QA testing to identify bugs, usability issues, and system inconsistencies, helping improve application reliability and user experience',
        'Collaborated with developers and team members to support application enhancements, validate fixes, and contribute to faster issue resolution and smoother deployment workflows',
      ],
      technologies: ['QA Testing', 'Web Development', 'Application Testing', 'Bug Reporting'],
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A journey of growth through diverse roles and technologies, from development to quality assurance.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <div className={`flex gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 md:w-1/2 md:pr-12">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1.5 md:translate-x-0 md:-translate-x-1/2 border-4 border-slate-900"
                      whileHover={{ scale: 1.3 }}
                      animate={{ boxShadow: ['0 0 0 0 rgba(0, 212, 255, 0.7)', '0 0 0 10px rgba(0, 212, 255, 0)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Card */}
                    <div className="ml-8 md:ml-0 card-cyber rounded-2xl p-6 md:p-8 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all group">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:gradient-text transition-all">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-300 font-semibold mb-2">
                          {exp.company}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FiBriefcase className="text-cyan-400" size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendar className="text-cyan-400" size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <p className="text-cyan-400 text-xs font-semibold mb-3 uppercase tracking-wider">
                          Key Responsibilities
                        </p>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-300">
                              <span className="text-cyan-400 flex-shrink-0">✓</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-cyan-500 bg-opacity-10 text-cyan-300 rounded-full border border-cyan-400 border-opacity-30 group-hover:border-opacity-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for odd items */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Continuously growing and adapting to new challenges in the tech industry.
          </p>
          <motion.div
            className="inline-block px-8 py-3 glass-neon rounded-lg border border-cyan-400 border-opacity-50"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
          >
            <a href="#contact" className="text-cyan-400 font-semibold hover:text-white transition-colors">
              Let&apos;s Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
