import { stackItems } from '@/data/stack'
import { Container } from '@/components/ui/Container'
import { TechnologyIcon } from '@/components/ui/TechnologyIcon'

export function StackStrip() {
  return (
    <div className="technology-strip">
      <Container>
        <ul aria-label="Tecnologías principales">
          {stackItems.map((item) => (
            <li key={item} aria-label={item} title={item}>
              <TechnologyIcon name={item} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
