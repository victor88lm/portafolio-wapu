import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'fill' | 'ghost'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  withArrow?: boolean
}

/**
 * Botón-enlace del Design System.
 * · fill: sólido con elevación sutil al hover.
 * · ghost: enlace con subrayado que crece al hover.
 * Se renderiza como <a> porque todas las acciones del sitio son navegación.
 */
export function ButtonLink({ variant = 'fill', withArrow = false, className, children, ...rest }: ButtonLinkProps) {
  const title = rest.title ?? rest['aria-label'] ?? (typeof children === 'string' ? children : undefined)

  if (variant === 'ghost') {
    return (
      <a
        title={title}
        className={cn(
          'group relative inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors duration-300 hover:text-ink',
          className,
        )}
        {...rest}
      >
        {children}
        {withArrow && (
          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-[0.18] bg-current transition-transform duration-400 ease-(--ease-out-expo) group-hover:scale-x-100"
        />
      </a>
    )
  }

  return (
    <a
      title={title}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-(--radius-btn) bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-(--shadow-btn) transition-all duration-300 ease-(--ease-soft) hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-(--shadow-btn-hover) active:translate-y-0',
        className,
      )}
      {...rest}
    >
      {children}
      {withArrow && <ArrowUpRight />}
    </a>
  )
}

/** Flecha diagonal para enlaces externos / CTAs. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      <path
        d="M2 11L11 2M11 2H5M11 2V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
