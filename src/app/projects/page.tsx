'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'MuniciFix',
      description: 'A mobile based platform for municipal issue reporting and resolution with integrated K Means Clustering',
      details: [
        'This is our thesis, which has already been defended',
        'Worked as the full stack developer & the final paper writer',
        'Technologies: React Native, Node.js, MongoDB, Machine Learning (K Means)',
        'Helped municipalities track and resolve citizen-reported issues efficiently',
      ],
      status: 'Completed - Thesis Project',
    },
    {
      id: 2,
      title: 'Smart Sense',
      description: 'An AI for monitoring academic engagement and distractions in learning spaces',
      details: [
        'This is our recent final project for CS Electives 3 and Artificial Intelligence',
        'Technologies: Python, TensorFlow, Computer Vision, Flask',
        'Implemented real-time student engagement detection',
        'Used facial recognition and pose estimation for monitoring',
      ],
      status: 'Completed - Final Project',
    },
    {
      id: 3,
      title: 'BAC System',
      description: 'A Pre-Verification platform for Procurement documents and PPMP Management',
      details: [
        'This is the system I made for BAC Office as per my On-the-job Training output',
        'Technologies: React, Node.js, PostgreSQL, PDF Processing',
        'Automated document verification workflow',
        'Improved processing efficiency by 70%',
      ],
      status: 'Completed - OJT Output',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-secondary bg-opacity-95 backdrop-blur-md z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-accent">
            Stephen Bacani
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/education" className="hover:text-accent transition">
              Education
            </Link>
            <Link href="/projects" className="text-accent">
              Projects
            </Link>
            <Link href="/achievements" className="hover:text-accent transition">
              Achievements
            </Link>
            <Link href="/skills" className="hover:text-accent transition">
              Skills
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-accent">Projects</span>
          </h1>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition"
              >
                <button
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  className="w-full p-6 text-left hover:bg-slate-700 transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{project.description}</p>
                      <span className="inline-block text-xs md:text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">
                        {project.status}
                      </span>
                    </div>
                    <div className="text-accent text-2xl">
                      {expanded === project.id ? '−' : '+'}
                    </div>
                  </div>
                </button>

                {expanded === project.id && (
                  <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                    <div className="space-y-3 mt-4">
                      {project.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 flex gap-3">
                          <span className="text-accent">•</span>
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Back Button */}
          <Link
            href="/"
            className="inline-block mt-8 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
