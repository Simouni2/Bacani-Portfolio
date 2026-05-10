import { ReactNode } from 'react'

interface SkillCardProps {
  name: string
  icon: ReactNode
  color?: string
}

export default function SkillCard({ name, icon, color = 'text-blue-400' }: SkillCardProps) {
  return (
    <div className="bg-secondary bg-opacity-50 rounded-lg p-6 border border-slate-700 hover:border-accent transition smooth-transition hover-scale-lg text-center">
      <div className={`text-4xl md:text-5xl mb-3 flex justify-center ${color}`}>
        {icon}
      </div>
      <p className="text-white font-semibold text-sm md:text-base">{name}</p>
    </div>
  )
}
