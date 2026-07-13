import { stackItems } from '@/data/stack'
import { Container } from '@/components/ui/Container'

function StackItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-3 pr-3 sm:flex-wrap sm:justify-center sm:gap-y-1.5 sm:pr-0"
      aria-label={hidden ? undefined : 'Tecnologías principales'}
      aria-hidden={hidden || undefined}
    >
      {stackItems.map((item, i) => (
        <li key={item} className="flex shrink-0 items-baseline gap-x-3 tracking-[0.08em] text-ink-muted uppercase sm:shrink">
          {item}
          {i < stackItems.length - 1 && (
            <span aria-hidden="true" className="text-brand-300">
              ·
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

/**
 * Franja de stack: en mobile funciona como marquee continuo; en desktop
 * queda centrada y estática.
 */
export function StackStrip() {
  return (
    <div className="overflow-hidden border-y border-line bg-white/60">
      <Container className="py-4 font-mono text-[12px] sm:flex sm:justify-center">
        <div className="-mx-5 overflow-hidden whitespace-nowrap sm:mx-0 sm:overflow-visible sm:whitespace-normal">
          <div className="stack-marquee flex w-max items-center sm:w-auto sm:animate-none sm:flex-wrap sm:justify-center">
            <StackItems />
            <div className="flex sm:hidden">
              <StackItems hidden />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
