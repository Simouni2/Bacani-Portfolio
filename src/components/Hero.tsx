'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-cyan-400">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="gradient-text block">Stephen Bacani</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer | Mobile & Web Applications | AI-Enabled Systems
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Building practical web and mobile solutions with React, Flutter, Firebase, and modern technologies. 
          Computer Science graduate with a passion for creating user-focused applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 hover:glow"
            >
              View My Projects <FiArrowRight />
            </motion.button>
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
            >
              Get in Touch
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/Simouni2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:glow"
          >
            <FiGithub size={24} className="text-cyan-400" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/stephen-simoun-gee-bacani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:glow"
          >
            <FiLinkedin size={24} className="text-cyan-400" />
          </motion.a>

          <motion.a
            href="mailto:bacanistephen1@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full hover:glow"
          >
            <FiMail size={24} className="text-cyan-400" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-cyan-400 text-3xl">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
