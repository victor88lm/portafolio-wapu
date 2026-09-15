import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TagProps {
  children: ReactNode
  className?: string
}

/** Chip pixel para tecnologías y categorías: bloque, sin radio. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border-2 border-edge bg-panel px-2.5 py-1 font-mono text-xs font-bold tracking-[0.08em] text-peach uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
