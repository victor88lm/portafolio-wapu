import { motion } from 'motion/react'
import { site, collaborators } from '@/data/site'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { Container } from '@/components/ui/Container'
import { ArrowUpRight } from '@/components/ui/Button'

interface SocialCard {
  label: string
  handle: string
  url: string
  icon: React.ReactNode
}

const socialCards: SocialCard[] = [
  {
    label: 'Instagram',
    handle: '@victor88lm__',
    url: site.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    handle: '@victor88lm_',
    url: site.social.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.23 8.23 0 0 0 4.83 1.54V7.08a4.85 4.85 0 0 1-1.06-.39z" />
      </svg>
    ),
  },
  {
    label: 'X',
    handle: '@Victor88LM__',
    url: site.social.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'in/victor88lm',
    url: site.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: 'WapuClub',
    handle: 'wapuclub.com',
    url: collaborators.wapuclub.url,
    icon: (
      <img
        src="/assets/img/wapuclub-logo.png"
        alt="Logotipo de WapuClub"
        title="WapuClub"
        loading="lazy"
        decoding="async"
        className="h-5 w-auto brightness-0 invert"
      />
    ),
  },
]

/**
 * Footer oscuro de cierre: marca y mensaje a la izquierda, redes
 * como tarjetas delineadas a la derecha y barra inferior mínima.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="relative overflow-hidden bg-ink-deep text-white/60">
      {/* Resplandor verde sutil en la parte alta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(620px_260px_at_18%_0%,rgb(5_150_105/0.16),transparent_70%)]"
      />

      <Container className="relative py-16 sm:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-20"
        >
          {/* Marca + mensaje + contacto directo */}
          <div className="max-w-lg">
            <motion.p variants={fadeUp} className="font-mono text-[15px] font-semibold text-white">
              <span className="text-brand-400">~/</span>
              {site.handle}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-6 max-w-[18ch] font-display text-[clamp(24px,3.2vw,36px)] leading-[1.14] font-extrabold tracking-[-0.03em] text-white"
            >
              Encuéntrame donde construyo web.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[15px] leading-[1.85]">
              Comparto proyectos, ideas y procesos en redes. Para algo directo, escríbeme por email o WhatsApp.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2.5">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('Proyecto web — contacto desde tu portafolio')}`}
                title={`Enviar email a ${site.name}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-200 underline decoration-brand-300/50 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
              >
                {site.email}
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent('Hola Victor Flores, vi tu portafolio y quiero platicarte de un proyecto.')}`}
                title={`Enviar mensaje de WhatsApp a ${site.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[13px] text-white/80 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
              >
                WhatsApp · {site.whatsapp.display}
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Redes como tarjetas delineadas */}
          <motion.nav variants={fadeUp} aria-label="Redes sociales">
            <ul className="flex flex-wrap gap-2.5 lg:justify-end">
              {socialCards.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visitar ${social.label} de ${site.name}: ${social.handle}`}
                    className="flex min-w-[86px] flex-col items-center gap-2.5 rounded-xl border border-white/12 px-4 py-4 text-white transition-all duration-300 ease-(--ease-out-expo) hover:-translate-y-[3px] hover:border-brand-400 hover:bg-brand-500/10"
                  >
                    <span className="grid h-5 place-items-center [&>svg]:size-5">{social.icon}</span>
                    <span className="font-mono text-[8.5px] font-bold tracking-[0.16em] whitespace-nowrap uppercase">
                      {social.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        {/* Barra inferior mínima */}
        <div className="mt-16 flex flex-col gap-2.5 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/65">
            © {year} {site.name}. Proyectos e-commerce en colaboración con{' '}
            <a
              href={collaborators.ailynmss.url}
              title={`Visitar el sitio de ${collaborators.ailynmss.fullName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/45 underline-offset-2 transition-colors hover:text-brand-200 hover:decoration-brand-200"
            >
              {collaborators.ailynmss.name}
            </a>{' '}
            y{' '}
            <a
              href={collaborators.wapuclub.url}
              title="Visitar el sitio oficial de WapuClub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/45 underline-offset-2 transition-colors hover:text-brand-200 hover:decoration-brand-200"
            >
              {collaborators.wapuclub.name}
            </a>
            .
          </p>
          <p className="font-mono text-[12px] font-bold tracking-[0.14em] text-white uppercase">@{site.handle}</p>
        </div>
      </Container>
    </footer>
  )
}
