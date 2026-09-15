import { CodeXml, Database, Blocks } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const areas = [
  {
    icon: CodeXml,
    title: 'Frontend',
    description: 'Interfaces, componentes y experiencias adaptables.',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend',
    description: 'Lógica de negocio, APIs y control de acceso.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST / JWT'],
  },
  {
    icon: Blocks,
    title: 'WordPress',
    description: 'Themes, plugins e integraciones para comercio electrónico.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'Git'],
  },
]

export function Expertise() {
  return (
    <Section id="enfoque" labelledBy="enfoque-h2" className="expertise-section">
      <div className="expertise-heading">
        <SectionHeading
          eyebrow="03 / Herramientas y enfoque"
          headingId="enfoque-h2"
          title={
            <>
              Una visión completa
              <br />
              del desarrollo.
            </>
          }
        />
        <p>
          La interfaz es el comienzo.
          <br />
          La lógica, los datos y las integraciones completan la experiencia.
        </p>
      </div>
      <ul className="expertise-grid">
        {areas.map(({ icon: Icon, ...area }, index) => (
          <li key={area.title}>
            <div className="expertise-index">
              <Icon size={29} strokeWidth={1.5} aria-hidden="true" />
              <span>0{index + 1}</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul aria-label={`Tecnologías de ${area.title}`}>
              {area.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
