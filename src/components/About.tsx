'use client';

import { motion } from 'framer-motion';

export default function About() {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            About Me
          </h2>

          <motion.div
            className="glass rounded-lg p-8 md:p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a Computer Science graduate from Cagayan State University with a strong passion for building 
              practical and user-focused applications. With internship and project experience in full-stack 
              development, QA testing, and AI-enabled systems, I've developed a diverse skill set in modern 
              web and mobile technologies.
            </motion.p>

            {/* Experience Highlight */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              During my career, I've worked on innovative projects including a municipal issue reporting 
              platform with AI clustering, a procurement management system, and an academic engagement 
              monitoring system. I'm committed to solving real-world problems through clean code, intuitive 
              design, and continuous learning.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-cyan-400 border-opacity-20"
            >
              {[
                { label: 'Projects', value: '3+' },
                { label: 'Languages', value: '8+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Years Learning', value: '4+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Education</h3>
              <div className="bg-slate-800 bg-opacity-30 rounded-lg p-4">
                <p className="font-semibold text-white">Bachelor of Science in Computer Science</p>
                <p className="text-gray-400">Cagayan State University – Carig Campus</p>
                <p className="text-sm text-gray-500 mt-2">September 2022 – May 2026</p>
                <p className="text-cyan-400 mt-2">
                  Dean's Lister for 8 consecutive semesters | GWA: 92.46
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
