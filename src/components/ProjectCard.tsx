import { ReactNode } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  status: string
  icon: ReactNode
  expanded: boolean
  onToggle: () => void
  children?: ReactNode
  link?: string
}

export default function ProjectCard({
  title,
  description,
  status,
  icon,
  expanded,
  onToggle,
  children,
  link,
}: ProjectCardProps) {
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
              <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 mb-3">{description}</p>
            <span className="inline-block text-xs md:text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">
              {status}
            </span>
          </div>
          <div className="text-accent text-2xl flex-shrink-0">
            {expanded ? '−' : '+'}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-slate-600 bg-slate-800 bg-opacity-30">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-blue-300 transition underline mb-4"
            >
              <span>🔗</span> View Live Project
            </a>
          )}
          <div className={link ? 'border-t border-slate-600 pt-4' : ''}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
