import { ReactNode } from 'react'

interface EducationCardProps {
  title: string
  school: string
  location: string
  period: string
  icon: ReactNode
  expanded: boolean
  onToggle: () => void
  children?: ReactNode
  highlights?: string[]
}

export default function EducationCard({
  title,
  school,
  location,
  period,
  icon,
  expanded,
  onToggle,
  children,
  highlights,
}: EducationCardProps) {
  return (
    <div className="bg-secondary bg-opacity-50 rounded-lg border border-slate-700 overflow-hidden hover:border-accent transition smooth-transition">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-700 transition"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl text-accent">{icon}</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
              </div>
            </div>
            <p className="text-accent text-lg mb-1 ml-11">{school}</p>
            <p className="text-gray-400 text-sm mb-1 ml-11">{location}</p>
            <p className="text-gray-500 text-sm ml-11">{period}</p>
          </div>
          <div className="text-accent text-2xl flex-shrink-0">
            {expanded ? '−' : '+'}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
          <div className="space-y-3 mt-4">
            {highlights?.map((highlight, idx) => (
              <p key={idx} className="text-gray-300 flex gap-3">
                <span className="text-accent flex-shrink-0">•</span>
                <span>{highlight}</span>
              </p>
            ))}
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
