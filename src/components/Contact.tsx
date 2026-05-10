'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'bacanistephen1@gmail.com',
      link: 'mailto:bacanistephen1@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+63 969 570 8373',
      link: 'tel:+639695708373',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Enrile, Cagayan Valley, Philippines',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      url: 'https://github.com/Simouni2',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/stephen-simoun-gee-bacani',
    },
    {
      icon: FiMail,
      label: 'Email',
      url: 'mailto:bacanistephen1@gmail.com',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
            Get In Touch
          </h2>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-cyan-400 mb-6"
              >
                Contact Information
              </motion.h3>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-lg p-4 flex items-center gap-4 hover:glow transition-all"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <IconComponent
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.title}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <p className="text-gray-400 mb-4">Follow Me</p>
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
                        className="p-4 glass rounded-lg hover:glow"
                      >
                        <IconComponent size={24} className="text-cyan-400" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="glass rounded-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-800 bg-opacity-50 border border-cyan-400 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    required
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-800 bg-opacity-50 border border-cyan-400 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    required
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-slate-800 bg-opacity-50 border border-cyan-400 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    required
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 bg-opacity-50 border border-cyan-400 border-opacity-30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:glow transition-all flex items-center justify-center gap-2"
                >
                  <FiSend /> Send Message
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 bg-green-500 bg-opacity-20 border border-green-500 text-green-400 rounded-lg text-center"
                  >
                    Thanks! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
