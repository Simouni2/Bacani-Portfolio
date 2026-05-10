'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Achievements() {
  const [expandedYear, setExpandedYear] = useState<number | null>(null)

  const achievements = [
    {
      id: 1,
      year: '4th Year (AY 2025 – Present)',
      semester1: { units: 12, grade: 'In Progress' },
      semester2: { units: 9, grade: 93.26, average: 93.22 },
      totalUnits: 21,
      totalAverage: 93.22,
      role: 'College Student Council',
      details: [
        'Pursuing advanced courses in software engineering and AI',
        'Leading college initiatives and student programs',
        'Maintaining excellent academic performance',
      ],
    },
    {
      id: 2,
      year: '3rd Year (AY 2024 – 2025)',
      semester1: { units: 21, grade: 93.7 },
      semester2: { units: 21, grade: 93.43, average: 93.43 },
      totalUnits: 42,
      totalAverage: 93.43,
      role: 'CICS Sports Coordinator, College Student Council',
      details: [
        'Dean&apos;s Lister - 1st Sem: 93.7 | 2nd Sem: 93.43',
        'Coordinated college sports and athletic events',
        'Active leadership in student council activities',
      ],
    },
    {
      id: 3,
      year: '2nd Year (AY 2023-2024)',
      semester1: { units: 23, grade: 90.91 },
      semester2: { units: 20, grade: 91.63, average: 91.26 },
      totalUnits: 43,
      totalAverage: 91.26,
      role: 'CICS Sports Coordinator, College Student Council',
      details: [
        'Dean&apos;s Lister - 1st Sem: 90.91 | 2nd Sem: 91.63',
        'Successfully organized multiple sports events',
        'Continued active participation in council',
      ],
    },
    {
      id: 4,
      year: '1st Year (AY 2022-2023)',
      semester1: { units: 23, grade: 94.12 },
      semester2: { units: 26, grade: 91.93, average: 92.29 },
      totalUnits: 49,
      totalAverage: 92.29,
      role: 'College Student Council',
      details: [
        'Dean&apos;s Lister - 1st Sem: 94.12 | 2nd Sem: 91.93',
        'Started involvement in student council',
        'Strong academic foundation established',
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
            <Link href="/education" className="hover:text-accent transition">
              Education
            </Link>
            <Link href="/projects" className="hover:text-accent transition">
              Projects
            </Link>
            <Link href="/achievements" className="text-accent">
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
            <span className="text-accent">Academic Achievements</span>
          </h1>

          <p className="text-center text-gray-300 mb-12 text-base md:text-lg">
            Dean&apos;s Lister throughout my academic journey with consistent excellence and leadership
          </p>

          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition"
              >
                <button
                  onClick={() =>
                    setExpandedYear(expandedYear === achievement.id ? null : achievement.id)
                  }
                  className="w-full p-6 text-left hover:bg-slate-700 transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                        {achievement.year}
                      </h3>
                      <p className="text-accent mb-2">{achievement.role}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <p className="text-gray-400">1st Sem</p>
                          <p className="text-white font-semibold">
                            {achievement.semester1.grade}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">2nd Sem</p>
                          <p className="text-white font-semibold">
                            {achievement.semester2.grade}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Units</p>
                          <p className="text-white font-semibold">
                            {achievement.totalUnits}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Avg</p>
                          <p className="text-accent font-bold">
                            {achievement.totalAverage.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-accent text-2xl">
                      {expandedYear === achievement.id ? '−' : '+'}
                    </div>
                  </div>
                </button>

                {expandedYear === achievement.id && (
                  <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
                    <div className="mt-4 space-y-3">
                      {achievement.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 flex gap-3">
                          <span className="text-accent">•</span>
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>

                    {/* Grade Breakdown */}
                    <div className="mt-6 pt-4 border-t border-slate-600">
                      <h4 className="font-semibold text-white mb-3">Grade Breakdown</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800 bg-opacity-50 p-3 rounded">
                          <p className="text-gray-400 text-sm">1st Semester</p>
                          <p className="text-white font-bold">
                            {achievement.semester1.grade}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {achievement.semester1.units} units
                          </p>
                        </div>
                        <div className="bg-slate-800 bg-opacity-50 p-3 rounded">
                          <p className="text-gray-400 text-sm">2nd Semester</p>
                          <p className="text-white font-bold">
                            {achievement.semester2.grade}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {achievement.semester2.units} units
                          </p>
                        </div>
                      </div>
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
