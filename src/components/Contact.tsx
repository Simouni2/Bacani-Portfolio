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
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Send email using the API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact directly at bacanistephen1@gmail.com');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setLoading(false);
    }
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
      value: 'Cagayan Valley, Philippines',
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project or opportunity? I&apos;d love to hear from you. Reach out through any channel below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.link}
                  variants={itemVariants}
                  className="group flex items-start gap-4 p-6 card-cyber rounded-2xl border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-cyan-400 bg-opacity-10 text-cyan-400 group-hover:bg-opacity-20 transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <p className="text-cyan-400 font-semibold mb-1">{info.title}</p>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-cyan-400 font-semibold mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-neon rounded-lg text-cyan-400 hover:text-white transition-all"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-5 card-cyber rounded-2xl p-8 border border-cyan-400 border-opacity-20 hover:border-opacity-50 transition-all"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Stephen Bacani"
                className="w-full px-4 py-3 bg-cyan-500 bg-opacity-5 border border-cyan-400 border-opacity-30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:border-opacity-100 focus:bg-opacity-10 transition-all"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-cyan-500 bg-opacity-5 border border-cyan-400 border-opacity-30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:border-opacity-100 focus:bg-opacity-10 transition-all"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-cyan-500 bg-opacity-5 border border-cyan-400 border-opacity-30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:border-opacity-100 focus:bg-opacity-10 transition-all"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-cyan-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full px-4 py-3 bg-cyan-500 bg-opacity-5 border border-cyan-400 border-opacity-30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:border-opacity-100 focus:bg-opacity-10 transition-all resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full btn-neon-solid flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="group-hover:scale-110 transition-transform" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-green-500 bg-opacity-10 border border-green-400 border-opacity-50 rounded-lg text-green-400"
              >
                <FiCheckCircle size={20} />
                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-red-500 bg-opacity-10 border border-red-400 border-opacity-50 rounded-lg text-red-400"
              >
                <FiAlertCircle size={20} />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Alternative Contact Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center p-8 glass-neon rounded-2xl border border-cyan-400 border-opacity-20"
        >
          <p className="text-gray-300 mb-4">
            Prefer direct communication? Email me at{' '}
            <a
              href="mailto:bacanistephen1@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              bacanistephen1@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
