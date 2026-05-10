<<<<<<< HEAD
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
=======
'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  const personalInfoRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <main className="bg-gradient-to-br from-primary via-secondary to-primary">
      <nav className="fixed top-0 w-full bg-secondary bg-opacity-95 backdrop-blur-md z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-accent">SB</h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection(personalInfoRef)}
              className="hover:text-accent transition text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="hover:text-accent transition text-white"
            >
              Experience
            </button>
            <a href="#education" className="hover:text-accent transition text-white">
              Education
            </a>
            <a href="#projects" className="hover:text-accent transition text-white">
              Projects
            </a>
            <a href="#achievements" className="hover:text-accent transition text-white">
              Achievements
            </a>
            <a href="#skills" className="hover:text-accent transition text-white">
              Skills
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-slate-600 pt-4">
            <button
              onClick={() => scrollToSection(personalInfoRef)}
              className="text-left hover:text-accent transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-left hover:text-accent transition"
            >
              Experience
            </button>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition">
              Education
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition">
              Projects
            </a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition">
              Achievements
            </a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-accent transition">
              Skills
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section with Image */}
      <section className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Image Placeholder */}
          <div className="mb-8 md:mb-12 mt-8">
            <div className="relative w-full max-w-sm mx-auto aspect-square bg-secondary bg-opacity-50 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/Simoun.jpg"
                alt="Stephen Simoun Gee L. Bacani"
                className="w-full h-full object-cover [object-position:center_30%]"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Stephen Simoun Gee L. Bacani
          </h1>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection(personalInfoRef)}
            className="bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 mt-8"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Personal Information Section */}
      <section
        ref={personalInfoRef}
        className="py-20 px-4 sm:px-6 bg-secondary bg-opacity-30 border-t border-slate-700"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>

          {/* Contact Info */}
          <div className="bg-secondary bg-opacity-50 rounded-lg p-8 mb-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Phone</p>
                <a
                  href="tel:+639695708373"
                  className="text-accent hover:text-blue-300 transition text-lg font-semibold"
                >
                  +63 969 570 8373
                </a>
              </div>
              <div className="text-center border-l border-r border-slate-600">
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a
                  href="mailto:bacanistephen1@gmail.com"
                  className="text-accent hover:text-blue-300 transition text-lg font-semibold break-all"
                >
                  bacanistephen1@gmail.com
                </a>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Location</p>
                <p className="text-white text-lg font-semibold">
                  Tuguegarao City, Cagayan
                </p>
              </div>
            </div>

            <div className="border-t border-slate-600 pt-6">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                A Full Stack Developer who builds seamless web and mobile applications from the ground up—combining clean code, smart design, and real-world functionality. With experience in Quality Assurance and Business Analysis, I don&apos;t just develop systems—I make sure they work, scale, and truly solve problems.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                I bridge the gap between ideas and execution, turning concepts into reliable, user-focused solutions. Known for clear communication and a strong sense of ownership, I thrive in collaborative environments and fast-moving projects.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Always learning, always improving—I adapt quickly, take on challenges head-on, and aim to deliver work that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Experience</h2>

          <div className="space-y-6">
            {/* Experience 1: BAC */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 hover:border-accent transition">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Intern - Bids and Awards Committee</h3>
              <p className="text-accent text-lg mb-1">Cagayan State University – Andrews Campus</p>
              <p className="text-gray-400 text-sm mb-4">On-the-Job Training</p>
              <div className="space-y-3">
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Assisted in pre-verification of procurement documents and PPMP management</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Developed a Pre-Verification platform for streamlined document workflows</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Improved document processing efficiency by 70%</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Technologies: React, Node.js, PostgreSQL, PDF Processing</span>
                </p>
              </div>
            </div>

            {/* Experience 2: Comptrolla */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 hover:border-accent transition">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Intern - Comptrolla</h3>
              <p className="text-accent text-lg mb-1">Quezon City</p>
              <p className="text-gray-400 text-sm mb-4">On-the-Job Training</p>
              <div className="space-y-3">
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Conducted quality assurance testing on web and mobile applications</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Collaborated on systems development and feature enhancements</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Identified and documented bugs, providing detailed reports for development team</span>
                </p>
                <p className="text-gray-300 flex gap-3">
                  <span className="text-accent">•</span>
                  <span>Contributed to website and application creation workflows</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Education</h2>
          <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
            <button
              onClick={() => setExpandedEducation(expandedEducation === 1 ? null : 1)}
              className="w-full p-6 text-left hover:bg-slate-700 transition"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Bachelor of Science in Computer Science – Academic Distinction
                  </h3>
                  <p className="text-accent text-lg mb-1">Cagayan State University – Carig Campus</p>
                  <p className="text-gray-400 text-sm mb-2">Tuguegarao City, Cagayan</p>
                  <p className="text-gray-500 text-sm">2022-2026</p>
                </div>
                <div className="text-accent text-2xl">
                  {expandedEducation === 1 ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedEducation === 1 && (
              <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                <div className="space-y-3 mt-4">
                  <p className="text-gray-300 flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Current academic standing: 1st Sem (12 Units), 2nd Sem 93.26 (9 Units), Average: 93.22 (21 units)</span>
                  </p>
                  <p className="text-gray-300 flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Active in college student council and leadership programs</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition mt-6">
            <button
              onClick={() => setExpandedEducation(expandedEducation === 2 ? null : 2)}
              className="w-full p-6 text-left hover:bg-slate-700 transition"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Science, Technology, Engineering, and Mathematics (STEM) SHS – With Honors
                  </h3>
                  <p className="text-accent text-lg mb-1">Enrile Vocational High School</p>
                  <p className="text-gray-400 text-sm mb-2">Tuguegarao City, Cagayan</p>
                  <p className="text-gray-500 text-sm">2020-2022</p>
                </div>
                <div className="text-accent text-2xl">
                  {expandedEducation === 2 ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedEducation === 2 && (
              <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                <div className="space-y-3 mt-4">
                  <p className="text-gray-300 flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Completed STEM (Science, Technology, Engineering, Mathematics) strand with honors</span>
                  </p>
                  <p className="text-gray-300 flex gap-3">
                    <span className="text-accent">•</span>
                    <span>Strong foundation in mathematics, physics, and programming</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 bg-secondary bg-opacity-30 border-y border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="space-y-6">
            {/* Project 1: MuniciPix */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedProject(expandedProject === 1 ? null : 1)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">MuniciFix</h3>
                    <p className="text-gray-300 mb-2">A mobile based platform for municipal issue reporting and resolution with integrated K Means Clustering</p>
                    <span className="inline-block text-xs md:text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">
                      Completed - Thesis Project
                    </span>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedProject === 1 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedProject === 1 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="space-y-3 mt-4">
                    <a href="https://municifix1.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-accent hover:text-blue-300 transition underline">
                      🔗 View Project
                    </a>
                    <div className="border-t border-slate-600 pt-4">
                      <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>This is our thesis, which has already been defended</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Worked as the full stack developer & the final paper writer</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Technologies: React Native, Node.js, MongoDB, Machine Learning (K Means)</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Helped municipalities track and resolve citizen-reported issues efficiently</span>
                    </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project 2: Smart Sense */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedProject(expandedProject === 2 ? null : 2)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Smart Sense</h3>
                    <p className="text-gray-300 mb-2">An AI for monitoring academic engagement and distractions in learning spaces</p>
                    <span className="inline-block text-xs md:text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">
                      Completed - Final Project
                    </span>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedProject === 2 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedProject === 2 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="space-y-3 mt-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block text-accent hover:text-blue-300 transition underline">
                      🔗 View Project
                    </a>
                    <div className="border-t border-slate-600 pt-4">
                      <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>This is our recent final project for CS Electives 3 and Artificial Intelligence</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Technologies: Python, TensorFlow, Computer Vision, Flask</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Implemented real-time student engagement detection</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Used facial recognition and pose estimation for monitoring</span>
                    </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project 3: BAC System */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedProject(expandedProject === 3 ? null : 3)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">BAC System</h3>
                    <p className="text-gray-300 mb-2">A Pre-Verification platform for Procurement documents and PPMP Management</p>
                    <span className="inline-block text-xs md:text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">
                      Completed - OJT Output
                    </span>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedProject === 3 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedProject === 3 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="space-y-3 mt-4">
                    <a href="https://bac-system-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-accent hover:text-blue-300 transition underline">
                      🔗 View Project
                    </a>
                    <div className="border-t border-slate-600 pt-4">
                      <p className="text-gray-300 flex gap-3">
                        <span className="text-accent">•</span>
                        <span>This is the system I made for BAC Office as per my On-the-job Training output</span>
                      </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Technologies: React, Node.js, PostgreSQL, PDF Processing</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Automated document verification workflow</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Improved processing efficiency by 70%</span>
                    </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Achievements</h2>
          <div className="space-y-4">
            {/* 4th Year */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedAchievement(expandedAchievement === 4 ? null : 4)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                      4th Year (AY 2025 – 2026)
                    </h3>
                    <p className="text-accent mb-2">College Student Council</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">1st Sem</p>
                        <p className="text-white font-semibold">92.4</p>
                      </div>
                      <div>
                        <p className="text-gray-400">2nd Sem</p>
                        <p className="text-white font-semibold">94.66</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Units</p>
                        <p className="text-white font-semibold">21</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Avg</p>
                        <p className="text-accent font-bold">93.53</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedAchievement === 4 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedAchievement === 4 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Pursuing advanced courses in software engineering and AI</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Leading college initiatives and student programs</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Maintaining excellent academic performance</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 3rd Year */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedAchievement(expandedAchievement === 3 ? null : 3)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                      3rd Year (AY 2024 – 2025)
                    </h3>
                    <p className="text-accent mb-2">CICS Sports Coordinator, College Student Council</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">1st Sem</p>
                        <p className="text-white font-semibold">93.7</p>
                      </div>
                      <div>
                        <p className="text-gray-400">2nd Sem</p>
                        <p className="text-white font-semibold">93.43</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Units</p>
                        <p className="text-white font-semibold">42</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Avg</p>
                        <p className="text-accent font-bold">93.43</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedAchievement === 3 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedAchievement === 3 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Dean&apos;s Lister - 1st Sem: 93.7 | 2nd Sem: 93.43</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Coordinated college sports and athletic events</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Active leadership in student council activities</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 2nd Year */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedAchievement(expandedAchievement === 2 ? null : 2)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                      2nd Year (AY 2023-2024)
                    </h3>
                    <p className="text-accent mb-2">CICS Sports Coordinator, College Student Council</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">1st Sem</p>
                        <p className="text-white font-semibold">90.91</p>
                      </div>
                      <div>
                        <p className="text-gray-400">2nd Sem</p>
                        <p className="text-white font-semibold">91.63</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Units</p>
                        <p className="text-white font-semibold">43</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Avg</p>
                        <p className="text-accent font-bold">91.26</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedAchievement === 2 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedAchievement === 2 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Dean&apos;s Lister - 1st Sem: 90.91 | 2nd Sem: 91.63</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Successfully organized multiple sports events</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Continued active participation in council</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* 1st Year */}
            <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition">
              <button
                onClick={() => setExpandedAchievement(expandedAchievement === 1 ? null : 1)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                      1st Year (AY 2022-2023)
                    </h3>
                    <p className="text-accent mb-2">College Student Council</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div>
                        <p className="text-gray-400">1st Sem</p>
                        <p className="text-white font-semibold">94.12</p>
                      </div>
                      <div>
                        <p className="text-gray-400">2nd Sem</p>
                        <p className="text-white font-semibold">91.93</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Units</p>
                        <p className="text-white font-semibold">49</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Avg</p>
                        <p className="text-accent font-bold">92.29</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-accent text-2xl">
                    {expandedAchievement === 1 ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedAchievement === 1 && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Dean&apos;s Lister - 1st Sem: 94.12 | 2nd Sem: 91.93</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Started involvement in student council</span>
                    </p>
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">•</span>
                      <span>Strong academic foundation established</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 bg-secondary bg-opacity-30 border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>

          {/* Technical Skills */}
          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedSkill(expandedSkill === 'technical' ? null : 'technical')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    💻 Technical Skills
                  </h3>
                </div>
                <div className="text-accent text-2xl">
                  {expandedSkill === 'technical' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedSkill === 'technical' && (
              <div className="mt-4 space-y-4">
                <div className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-accent font-semibold mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'C++', 'SQL', 'JavaScript', 'HTML/CSS', 'PHP', 'TypeScript', 'C#'].map((skill) => (
                      <span
                        key={skill}
                        className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm md:text-base hover:bg-opacity-30 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-accent font-semibold mb-3">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Ionic-Angular', 'Flutter'].map((skill) => (
                      <span
                        key={skill}
                        className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm md:text-base hover:bg-opacity-30 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700">
                  <h4 className="text-accent font-semibold mb-3">Developer Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Git Hub', 'Vs Code', 'Firebase', 'Xampp', 'pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                      <span
                        key={skill}
                        className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm md:text-base hover:bg-opacity-30 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Professional Skills */}
          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedSkill(expandedSkill === 'professional' ? null : 'professional')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    🎯 Professional Skills
                  </h3>
                </div>
                <div className="text-accent text-2xl">
                  {expandedSkill === 'professional' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedSkill === 'professional' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Back-End Development', 'UI and UX Development', 'Full Stack Development', 'Clerical Works', 'Front-End Development', 'Quality Assurance (QA)'].map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700 hover:border-accent transition"
                  >
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">✓</span>
                      <span>{skill}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Personal Skills */}
          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedSkill(expandedSkill === 'personal' ? null : 'personal')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    ✨ Personal Skills
                  </h3>
                </div>
                <div className="text-accent text-2xl">
                  {expandedSkill === 'personal' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedSkill === 'personal' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Communication', 'Adaptability/Flexibility', 'Critical Thinking', 'Teamwork & Collaboration'].map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700 hover:border-accent transition"
                  >
                    <p className="text-gray-300 flex gap-3">
                      <span className="text-accent">✓</span>
                      <span>{skill}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary bg-opacity-50 border-t border-slate-700 py-6 px-4 text-center text-gray-400 text-sm">
        <p>© 2026 Stephen Simoun Gee L. Bacani. All rights reserved.</p>
      </footer>
    </main>
  )
>>>>>>> 70dd1577ff7bbaec543b21823de6faed67bd78fb
}
