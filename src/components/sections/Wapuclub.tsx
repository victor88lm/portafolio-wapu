import { motion } from 'motion/react'
import { collaborators } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/ui/Section'
import { ArrowUpRight } from '@/components/ui/Button'

const contributions = [
  {
    num: '01',
    title: 'Plugins del ecosistema',
    description: 'Piezas WooCommerce modulares que amplían capacidades reales dentro de las tiendas del club.',
  },
  {
    num: '02',
    title: 'Integraciones técnicas',
    description: 'Conexión entre herramientas, flujos de tienda y necesidades específicas de operación.',
  },
  {
    num: '03',
    title: 'Calidad de producto',
    description: 'Revisión, mantenimiento y mejora continua sobre código que vive en producción.',
  },
]

export function Wapuclub() {
  return (
    <Section id="wapuclub" labelledBy="wapuclub-h2" className="bg-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="overflow-hidden rounded-2xl border border-line bg-surface shadow-(--shadow-card) sm:rounded-(--radius-card)"
      >
        <div className="relative px-5 py-9 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:radial-gradient(700px_320px_at_85%_-10%,rgb(5_150_105/0.1),transparent_60%),radial-gradient(500px_260px_at_0%_110%,rgb(52_211_153/0.08),transparent_55%)]"
          />

          <div className="relative">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 font-mono text-[12px] font-medium text-ink-muted uppercase sm:text-[13px]">
                <span className="text-brand-700 normal-case">{'//'}</span>
                04 · Colaboración WapuClub
              </p>
              <a
                href={collaborators.wapuclub.url}
                title="Visitar el sitio oficial de WapuClub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800"
              >
                wapuclub.com
                <ArrowUpRight className="size-2.5" />
              </a>
            </div>

            <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2
                  id="wapuclub-h2"
                  className="font-display text-2xl leading-[1.1] font-extrabold text-balance text-ink sm:text-4xl"
                >
                  Colaboro en el ecosistema e-commerce <span className="text-brand-700">de WapuClub</span>.
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-ink-muted sm:mt-5 sm:text-base sm:leading-relaxed">
                  WapuClub, fundado por Ailyn Montes, construye tecnología accesible para tiendas mexicanas sobre
                  WordPress y WooCommerce. Mi participación vive en el desarrollo técnico del ecosistema: piezas,
                  integraciones y calidad de código.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 border-t border-line pt-6 sm:border-t-0 sm:pt-0 lg:items-center">
                <img
                  src="/assets/img/wapuclub-logo.webp"
                  alt="Logotipo de WapuClub, ecosistema de e-commerce en México"
                  title="WapuClub, ecosistema de e-commerce en México"
                  width={360}
                  height={195}
                  loading="lazy"
                  decoding="async"
                  className="max-h-12 object-contain sm:max-h-16"
                />
                <span className="text-[11px] leading-none font-medium text-ink-400 uppercase sm:text-xs">
                  Ecosistema · E-commerce · México
                </span>
              </div>
            </div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-12 sm:grid-cols-3 sm:rounded-(--radius-card)"
            >
              {contributions.map((item) => (
                <motion.li key={item.num} variants={fadeUp} className="grid grid-cols-[2rem_1fr] gap-x-3 bg-white p-4 sm:block sm:p-6">
                  <span aria-hidden="true" className="font-display text-sm font-bold text-brand-700">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink sm:mt-2">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:mt-2">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
