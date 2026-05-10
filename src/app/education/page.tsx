'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Education() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const education = [
    {
      id: 1,
      school: 'Cagayan State University – Carig Campus',
      degree: 'Bachelor of Science in Computer Science',
      location: 'Tuguegarao City, Cagayan',
      period: '2022-2026',
      details: [
        'Current academic standing: 1st Sem (12 Units), 2nd Sem 93.26 (9 Units), Average: 93.22 (21 units)',
        'Active in college student council and leadership programs',
        'Focused on full-stack development and software engineering',
      ],
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
            <Link href="/education" className="text-accent">
              Education
            </Link>
            <Link href="/projects" className="hover:text-accent transition">
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
            <span className="text-accent">Education</span>
          </h1>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden mb-6 hover:border-accent transition"
            >
              <button
                onClick={() => setExpanded(expanded === edu.id ? null : edu.id)}
                className="w-full p-6 text-left hover:bg-slate-700 transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-accent text-lg mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                  <div className="text-accent text-2xl">
                    {expanded === edu.id ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expanded === edu.id && (
                <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                  <div className="space-y-3 mt-4">
                    {edu.details.map((detail, idx) => (
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
