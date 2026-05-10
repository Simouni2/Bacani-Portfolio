'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/Simouni2', label: 'GitHub' },
    {
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/stephen-simoun-gee-bacani',
      label: 'LinkedIn',
    },
    { icon: FiMail, url: 'mailto:bacanistephen1@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative mt-20 border-t border-cyan-400 border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Stephen Bacani</h3>
            <p className="text-gray-400">Full-Stack Developer & Problem Solver</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cyan-400 font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map(
                (item, index) => (
                  <ScrollLink
                    key={index}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                )
              )}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-cyan-400 font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg border border-cyan-400 border-opacity-30 hover:border-opacity-100 text-cyan-400 transition-all"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyan-400 border-opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Stephen Bacani. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <ScrollLink to="hero" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 md:mt-0 p-2 rounded-lg border border-cyan-400 border-opacity-30 hover:border-opacity-100 text-cyan-400 transition-all flex items-center gap-2"
            >
              <span>Back to top</span>
              <FiArrowUp size={16} />
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
    </footer>
  );
}
