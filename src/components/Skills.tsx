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
} from 'react-icons/si';
import { GrConfigure } from 'react-icons/gr';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34C26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      category: 'Mobile',
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Ionic Angular', icon: GrConfigure, color: '#498CB8' },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git/GitHub', icon: SiGit, color: '#F1502F' },
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Technical Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="glass rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Category Title */}
                <h3 className="text-xl font-bold text-cyan-400 mb-6">
                  {category.category}
                </h3>

                {/* Skills Grid */}
                <motion.div
                  className="grid grid-cols-3 md:grid-cols-4 gap-4"
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
                        variants={itemVariants}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center justify-center p-3 rounded-lg hover:glass transition-all duration-300"
                      >
                        <div className="mb-2">
                          <IconComponent
                            size={40}
                            style={{ color: skill.color }}
                            className="drop-shadow-lg"
                          />
                        </div>
                        <span className="text-xs text-center text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            className="glass rounded-lg p-6 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Full-Stack Development',
                'Mobile App Development',
                'REST APIs',
                'Database Design',
                'UI/UX Implementation',
                'AI/ML Integration',
                'QA Testing',
                'Git Version Control',
                'Cloud Services',
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 p-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
