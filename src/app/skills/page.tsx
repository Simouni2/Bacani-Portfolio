'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Skills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const skillsData = {
    technical: {
      title: 'Technical Skills',
      icon: '💻',
      skills: [
        {
          category: 'Languages',
          items: ['Java', 'Python', 'C++', 'SQL', 'JavaScript', 'HTML/CSS', 'PHP', 'TypeScript', 'C#'],
        },
        {
          category: 'Frameworks',
          items: ['React', 'Node.js', 'Ionic-Angular', 'Flutter'],
        },
        {
          category: 'Developer Tools',
          items: ['Git', 'Git Hub', 'Vs Code', 'Firebase', 'Xampp', 'pandas', 'NumPy', 'Matplotlib'],
        },
      ],
    },
    professional: {
      title: 'Professional Skills',
      icon: '🎯',
      skills: [
        'Back-End Development',
        'UI and UX Development',
        'Full Stack Development',
        'Clerical Works',
        'Front-End Development',
        'Quality Assurance (QA)',
      ],
    },
    personal: {
      title: 'Personal Skills',
      icon: '✨',
      skills: [
        'Communication',
        'Adaptability/Flexibility',
        'Critical Thinking',
        'Teamwork & Collaboration',
      ],
    },
  }

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
            <Link href="/projects" className="hover:text-accent transition">
              Projects
            </Link>
            <Link href="/achievements" className="hover:text-accent transition">
              Achievements
            </Link>
            <Link href="/skills" className="text-accent">
              Skills
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-accent">Skills & Expertise</span>
          </h1>

          {/* Technical Skills */}
          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedCategory(expandedCategory === 'technical' ? null : 'technical')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {skillsData.technical.icon} {skillsData.technical.title}
                  </h2>
                </div>
                <div className="text-accent text-2xl">
                  {expandedCategory === 'technical' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedCategory === 'technical' && (
              <div className="mt-4 space-y-4">
                {skillsData.technical.skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="bg-secondary bg-opacity-30 rounded-lg p-4 border border-slate-700"
                  >
                    <h3 className="text-accent font-semibold mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm md:text-base hover:bg-opacity-30 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Professional Skills */}
          <div className="mb-6">
            <button
              onClick={() =>
                setExpandedCategory(expandedCategory === 'professional' ? null : 'professional')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {skillsData.professional.icon} {skillsData.professional.title}
                  </h2>
                </div>
                <div className="text-accent text-2xl">
                  {expandedCategory === 'professional' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedCategory === 'professional' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillsData.professional.skills.map((skill, idx) => (
                  <div
                    key={idx}
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
                setExpandedCategory(expandedCategory === 'personal' ? null : 'personal')
              }
              className="w-full bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 text-left hover:bg-slate-700 transition hover:border-accent"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {skillsData.personal.icon} {skillsData.personal.title}
                  </h2>
                </div>
                <div className="text-accent text-2xl">
                  {expandedCategory === 'personal' ? '−' : '+'}
                </div>
              </div>
            </button>

            {expandedCategory === 'personal' && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillsData.personal.skills.map((skill, idx) => (
                  <div
                    key={idx}
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
