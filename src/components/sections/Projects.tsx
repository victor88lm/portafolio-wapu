import { projects, type Project } from '@/data/projects'
import { collaborators } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const portfolioProjects: (Project & { symbolOnly?: boolean })[] = [
  ...projects,
  {
    name: 'Escuela Profesional de Dibujo',
    url: 'https://epd.edu.mx/',
    logo: '/assets/img/epd-logo.avif',
    alt: 'Logotipo de la Escuela Profesional de Dibujo',
    category: 'Sitio institucional',
    width: 1200,
    height: 300,
    symbolOnly: true,
  },
]

export function Projects() {
  return (
    <Section id="proyectos" labelledBy="proyectos-h2" className="projects-section">
      <div className="section-toolbar">
        <SectionHeading eyebrow="01 / Mi trabajo" headingId="proyectos-h2" title="Proyectos." />
      </div>
      <ul className="project-grid">
        {portfolioProjects.map((project) => (
          <li key={project.name}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              aria-label={`Visitar ${project.name}`}
              title={project.name}
            >
              <div className="project-card-logo">
                <img
                  src={project.logo}
                  srcSet={project.logoSrcSet}
                  sizes="(min-width: 640px) 144px, 112px"
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  className={
                    project.invert ? 'logo-dark-ink' : project.symbolOnly ? 'logo-symbol' : undefined
                  }
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
      <aside className="project-attribution">
        <span className="attribution-label">Trabajo en equipo</span>
        <p>
          Las tiendas son proyectos de{' '}
          <a href={collaborators.ailynmss.url} target="_blank" rel="noopener noreferrer">
            Ailyn Montes (Ailynmss)
          </a>
          . Mi participación es técnica: desarrollo, plugins e integraciones.
        </p>
      </aside>
    </Section>
  )
}
