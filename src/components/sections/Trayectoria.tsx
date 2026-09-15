import { ArrowUpRight, Plus, GraduationCap, LockKeyhole } from 'lucide-react'
import { useId, useState, type ReactNode } from 'react'
import { experience, education } from '@/data/experience'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

function ExperienceDisclosure({
  title,
  company,
  defaultOpen,
  children,
}: {
  title: string
  company: string
  defaultOpen: boolean
  children: ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className="experience-details" data-open={open}>
      <h3>
        <button
          type="button"
          className="experience-toggle"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(!open)}
        >
          <span>
            <span className="experience-company">{company}</span>
            <span className="experience-title">{title}</span>
          </span>
          <Plus size={23} aria-hidden="true" />
        </button>
      </h3>
      <div
        className="experience-panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="experience-panel-inner">{children}</div>
      </div>
    </div>
  )
}

export function Trayectoria() {
  return (
    <Section id="trayectoria" labelledBy="trayectoria-h2" className="experience-section">
      <div className="experience-layout">
        <div className="experience-intro">
          <SectionHeading
            eyebrow="02 / Trayectoria"
            headingId="trayectoria-h2"
            title={
              <>
                Experiencia. <br />
                En contexto.
              </>
            }
            lead="Del comercio electrónico a la gestión académica. Distintos entornos, una misma atención a cómo se construye y se mantiene cada producto."
          />
          <p className="experience-footnote">Frontend, backend y colaboración con equipos de diseño.</p>
        </div>
        <ol className="experience-list">
          {experience.map((item, index) => (
            <li key={item.id} className="experience-item">
              <div className="experience-meta">
                <span>{item.period}</span>
                {item.current && <span className="current-label">Actualidad</span>}
              </div>
              <ExperienceDisclosure title={item.title} company={item.company} defaultOpen={index === 0}>
                <div className="experience-body">
                  <p className="experience-summary">{item.summary}</p>
                  <ul className="experience-contributions">
                    {item.contributions.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className="technology-tags" aria-label={`Tecnologías: ${item.title}`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {item.id === 'sistema-escolar' && (
                    <p className="private-project">
                      <LockKeyhole size={14} aria-hidden="true" /> Sistema interno, sin acceso público.
                    </p>
                  )}
                  {'url' in item && (
                    <a
                      className="experience-public-link"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sitio público de EPD <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </ExperienceDisclosure>
            </li>
          ))}
        </ol>
      </div>
      <div className="education-layout">
        <h3>
          <GraduationCap size={23} aria-hidden="true" /> Formación
        </h3>
        <ul>
          {education.map((item) => (
            <li key={item.institution}>
              <div className="education-logo">
                <img
                  src={item.logo}
                  alt={`Logotipo de ${item.institution}`}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="education-period">{item.period}</p>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
