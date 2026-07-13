import { motion } from 'motion/react'
import { projects } from '@/data/projects'
import { collaborators } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/cn'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowUpRight } from '@/components/ui/Button'

export function Projects() {
  return (
    <Section id="proyectos" labelledBy="proyectos-h2">
      <SectionHeading
        eyebrow="02 · Proyectos"
        headingId="proyectos-h2"
        title="Tiendas reales, vendiendo todos los días."
      />

      {/* Nota de atribución: estos proyectos pertenecen a Ailynmss */}
      <motion.aside
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        aria-label="Nota de atribución de los proyectos"
        className="mb-12 -mt-2 max-w-3xl border-l-2 border-brand-400 pl-5"
      >
        <p className="text-[15px] leading-[1.8] text-ink-muted">
          <span className="font-semibold text-ink">Colaboración</span> — estas tiendas son proyectos de{' '}
          <a
            href={collaborators.ailynmss.url}
            title={`Visitar el sitio de ${collaborators.ailynmss.fullName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-2 hover:decoration-brand-600"
          >
            {collaborators.ailynmss.fullName} ({collaborators.ailynmss.name})
          </a>
          . Mi participación fue como colaborador técnico en el desarrollo: WordPress, WooCommerce, plugins e
          integraciones.
        </p>
      </motion.aside>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 sm:gap-5 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <motion.li key={project.name} variants={fadeUp}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visitar ${project.name} — ${project.category}`}
              className="group flex h-full min-h-32 flex-col items-center justify-center gap-3 rounded-(--radius-card) border border-line bg-white px-4 py-6 shadow-(--shadow-card) transition-all duration-300 ease-(--ease-soft) hover:-translate-y-1 hover:border-brand-200 hover:shadow-(--shadow-card-hover) sm:gap-4 sm:px-5 sm:py-9"
            >
              <span className="flex h-16 w-full items-center justify-center sm:h-14">
                <img
                  src={project.logo}
                  alt={project.alt}
                  title={`${project.name} — proyecto ${project.category}`}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'max-h-full max-w-[8.5rem] object-contain opacity-100 transition-transform duration-300 group-hover:scale-[1.03]',
                    project.invert && 'invert-[0.2]',
                  )}
                />
              </span>
              <span className="flex min-h-4 items-center gap-1.5 text-[11px] leading-none font-medium tracking-[0.08em] text-ink-400 uppercase transition-colors group-hover:text-brand-700 sm:text-xs sm:tracking-[0.14em]">
                {project.category}
                <ArrowUpRight className="size-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
