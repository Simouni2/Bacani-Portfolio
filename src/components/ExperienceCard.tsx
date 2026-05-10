import { ReactNode } from 'react'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  icon: ReactNode
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  icon,
}: ExperienceCardProps) {
  return (
    <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 p-6 hover:border-accent smooth-transition hover-scale-lg">
      <div className="flex gap-4 mb-4">
        <div className="text-3xl text-accent flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-accent text-lg mb-1">{company}</p>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}
