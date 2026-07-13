import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** id del heading que titula la sección (aria-labelledby) */
  labelledBy?: string
}

/** Sección semántica con espaciado vertical estándar. */
export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-20 sm:py-28', className)}>
      <Container>{children}</Container>
    </section>
  )
}
