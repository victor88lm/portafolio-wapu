import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  /** Eyebrow tipo "04 · Proyectos" (el prefijo `//` se agrega solo) */
  eyebrow: string
  title: ReactNode
  /** id del h2, referenciado por aria-labelledby de la sección */
  headingId: string
  lead?: string
  align?: 'left' | 'center'
}

/** Encabezado de sección: eyebrow mono con `//` + h2 + lead opcional. */
export function SectionHeading({ eyebrow, title, headingId, lead, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('mb-12 max-w-2xl sm:mb-14', align === 'center' && 'mx-auto text-center')}
    >
      <p
        className={cn(
          'mb-5 flex items-center gap-2 font-mono text-[13px] font-medium text-ink-muted uppercase',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="text-brand-600 normal-case">{'//'}</span>
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className="font-display text-4xl leading-[1.04] font-extrabold text-balance text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{lead}</p>}
    </motion.header>
  )
}
