import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  headingId: string
  lead?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, headingId, lead, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={cn('section-heading', align === 'center' && 'section-heading-center')}>
      <p className="eyebrow-label">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  )
}
