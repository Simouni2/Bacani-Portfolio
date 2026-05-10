'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer', 'Web Developer', 'App Developer', 'QA', 'Business Analyst'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedRole !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 80);
    } else if (isDeleting && displayedRole !== '') {
      timeout = setTimeout(() => {
        setDisplayedRole(displayedRole.slice(0, -1));
      }, 40);
    } else if (displayedRole === currentRole && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (displayedRole === '' && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/BACANI, STEPHEN SIMOUN GEE_UPDATED RESUME.PDF';
    link.download = 'Stephen_Bacani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="order-2 lg:order-1">
            {/* Welcome Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-4 py-2 glass rounded-full text-sm text-cyan-400 font-medium">
                ✨ Welcome to my digital workspace
              </span>
            </motion.div>

            {/* Full Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="block">Stephen Simoun</span>
              <span className="gradient-text-cyan block">Gee Bacani</span>
            </motion.h1>

            {/* Typing Animation Role */}
            <motion.div variants={itemVariants} className="mb-8 h-16">
              <div className="text-2xl md:text-3xl font-semibold text-cyan-300 flex items-center gap-2">
                <span>{displayedRole}</span>
                <span className="w-1 h-8 bg-cyan-400 animate-pulse"></span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              Full-Stack Developer passionate about creating innovative solutions with modern technologies.
              Specializing in web, mobile, and AI-enabled systems with expertise across React, Flutter, and Firebase.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleDownloadResume}
                className="btn-neon-solid flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <FiDownload className="group-hover:scale-110 transition-transform" />
                Download Resume
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              </button>
<ScrollLink
  to="projects"
  smooth={true}
  duration={500}
  className="w-full sm:w-auto"
>
  <button className="btn-neon w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3">
    View My Work
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </button>
</ScrollLink>
            </motion.div>

            {/* Social Links */}
           <motion.div
  variants={itemVariants}
  className="flex justify-center lg:justify-start gap-4 w-full"
>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.562v-11h3.4v1.561h.05c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 8.855c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 11.597H3.555v-11h3.564v11zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:bacanistephen1@gmail.com"
                className="p-3 glass rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-1 opacity-0"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ borderRadius: '20px' }}
              />

              {/* Glassmorphism container */}
              <motion.div
                className="absolute inset-1 glass rounded-2xl p-1 overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Image wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/Profile.jpg"
                    alt="Stephen Bacani"
                    fill
                    className="object-cover object-[center_20%] rounded-2xl"
                    priority
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ boxShadow: [
                      '0 0 20px rgba(0, 212, 255, 0.2)',
                      '0 0 40px rgba(0, 212, 255, 0.4)',
                      '0 0 20px rgba(0, 212, 255, 0.2)',
                    ] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
            </div>
          </motion.div>
        </div>

<motion.div
  className="mt-10 flex flex-col items-center justify-center gap-2 text-center lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2"
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="text-cyan-400 text-sm font-medium">
    Scroll to explore
  </div>

  <FiArrowDown className="w-6 h-6 text-cyan-400 animate-bounce" />
</motion.div>
      </motion.div>
    </section>
  );
}
