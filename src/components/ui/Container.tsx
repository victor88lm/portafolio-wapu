import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Ancho máximo y padding horizontal consistentes en todo el sitio. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8 xl:px-10', className)}>{children}</div>
}
