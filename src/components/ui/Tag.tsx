import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface TagProps {
  children: ReactNode
  className?: string
}

/** Chip pequeño para tecnologías y categorías. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
