'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 gradient-text text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SB
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 transition-colors cursor-pointer"
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
