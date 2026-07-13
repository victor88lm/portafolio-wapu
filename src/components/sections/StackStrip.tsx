import { stackItems } from '@/data/stack'
import { Container } from '@/components/ui/Container'

/**
 * Franja de stack: un "readout" estático estilo terminal.
 * Sin animación infinita — el contenido es el protagonista.
 */
export function StackStrip() {
  return (
    <div className="border-y border-line bg-white/60">
      <Container className="flex flex-col gap-2 py-4 font-mono text-[12px] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1.5">
        <span aria-hidden="true" className="shrink-0 font-semibold text-brand-700">
          $ stack
        </span>
        <ul
          className="-mx-5 flex snap-x items-baseline gap-x-3 overflow-x-auto px-5 pb-1 whitespace-nowrap sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 sm:whitespace-normal"
          aria-label="Tecnologías principales"
        >
          {stackItems.map((item, i) => (
            <li
              key={item}
              className="flex shrink-0 snap-start items-baseline gap-x-3 tracking-[0.08em] text-ink-muted uppercase sm:shrink"
            >
              {item}
              {i < stackItems.length - 1 && (
                <span aria-hidden="true" className="text-brand-300">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
