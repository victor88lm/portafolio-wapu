import type { AnchorHTMLAttributes } from 'react'
import { ArrowUpRight as ArrowIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'fill' | 'outline' | 'ghost'
  withArrow?: boolean
}

export function ButtonLink({
  variant = 'fill',
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        'button',
        variant === 'fill' ? 'button-primary' : variant === 'outline' ? 'button-outline' : 'button-text',
        className,
      )}
      {...rest}
    >
      {children}
      {withArrow && <ArrowUpRight />}
    </a>
  )
}

export function ArrowUpRight({ className }: { className?: string }) {
  return <ArrowIcon size={16} aria-hidden="true" className={cn('shrink-0', className)} />
}
