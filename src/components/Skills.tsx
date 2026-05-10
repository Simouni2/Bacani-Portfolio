'use client';

import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNodedotjs,
  SiCplusplus,
  SiPhp,
  SiPostgresql,
} from 'react-icons/si';
import { FiTool, FiCode } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      description: 'Modern UI frameworks and styling',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34C26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      ],
    },
    {
      category: 'Backend',
      description: 'Server-side technologies and frameworks',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ],
    },
    {
      category: 'Mobile',
      description: 'Cross-platform mobile development',
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Ionic', icon: FiCode, color: '#498DFF' },
        { name: 'Angular', icon: FiCode, color: '#DD0031' },
      ],
    },
    {
      category: 'Database',
      description: 'Data management and storage',
      skills: [
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      ],
    },
    {
      category: 'Tools & Technologies',
      description: 'Development and deployment tools',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F1502F' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Category Card */}
              <div className="relative h-full card-cyber p-8 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all duration-300">
                
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIdx) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skillIdx}
                          variants={skillVariants}
                          whileHover={{
                            scale: 1.15,
                            rotate: 5,
                            y: -10,
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center justify-center p-4 rounded-xl glass-neon hover:glow-cyan-heavy transition-all duration-300 cursor-pointer group/skill"
                        >
                          <div className="mb-3 relative">
                            <motion.div
                              className="absolute inset-0 bg-cyan-400 rounded-lg blur-xl opacity-0 group-hover/skill:opacity-50 transition-opacity"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <IconComponent
                              size={32}
                              style={{ color: skill.color }}
                              className="relative drop-shadow-lg"
                            />
                          </div>
                          <span className="text-xs text-center text-gray-300 font-medium group-hover/skill:text-cyan-400 transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ borderRadius: '0 0 100% 0' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Always learning and adapting to new technologies. Check out my projects to see these skills in action.
          </p>
          <motion.div
            className="inline-block px-8 py-3 glass-neon rounded-lg border border-cyan-400 border-opacity-50 hover:border-opacity-100 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
          >
            <span className="text-cyan-400 font-semibold">Continuously Expanding Knowledge</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
