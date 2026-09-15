import { cn } from '@/lib/cn'

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn('wordmark', className)}>Victor Flores</span>
}
