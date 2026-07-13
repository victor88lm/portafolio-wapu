import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { navItems } from '@/data/nav'
import { site } from '@/data/site'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/cn'
import { EASE_OUT } from '@/lib/motion'

const logoSrc = '/assets/img/victor88lm-logo-header-240.webp'

const overlaySocials = [
  { label: 'Instagram', url: site.social.instagram },
  { label: 'TikTok', url: site.social.tiktok },
  { label: 'X', url: site.social.x },
  { label: 'LinkedIn', url: site.social.linkedin },
]

/**
 * Nav flotante tipo píldora, centrada y con cristal claro (blur).
 * En móvil la píldora lleva la marca y un botón que abre un
 * overlay claro de pantalla completa.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useScrollSpy(sectionIds)

  // Bloquea el scroll del documento mientras el overlay está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Cierra con Escape
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5"
      >
        <div className="flex items-center gap-1 rounded-full border border-line bg-white/85 p-1.5 shadow-[0_8px_28px_-12px_rgb(6_78_59/0.25)] backdrop-blur-xl">
          {/* Marca */}
          <a
            href="#inicio"
            title="Ir al inicio del portafolio de Victor Flores"
            onClick={() => setMenuOpen(false)}
            aria-label={`${site.name} — ir al inicio`}
            className="flex items-center rounded-full py-1.5 pr-3 pl-2"
          >
            <img
              src={logoSrc}
              alt="Victor88LM"
              title="Victor88LM"
              width={240}
              height={49}
              decoding="async"
              className="h-6 w-auto max-w-[118px] object-contain sm:max-w-[132px]"
            />
          </a>

          {/* Links desktop */}
          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    title={`Ir a la sección ${item.label}`}
                    aria-current={activeId === item.id ? 'page' : undefined}
                    className={cn(
                      'block rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300',
                      activeId === item.id ? 'bg-brand-50 text-brand-700' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Toggle overlay (móvil / tablet) */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-overlay"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-9 place-items-center rounded-full bg-ice-100 text-ink transition-colors duration-300 hover:bg-brand-50 lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 5h12M2 11h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Overlay de navegación claro (móvil / tablet) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 overflow-y-auto bg-surface/97 backdrop-blur-xl lg:hidden"
          >
            <div
              aria-hidden="true"
              className="bg-blueprint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_10%,transparent_75%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_320px_at_85%_0%,rgb(5_150_105/0.1),transparent_60%)]"
            />

            <nav
              aria-label="Navegación móvil"
              className="relative mx-auto flex min-h-full w-full max-w-3xl flex-col justify-between gap-12 px-6 pt-28 pb-10"
            >
              <ol>
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.06 + i * 0.06, ease: EASE_OUT }}
                    className="border-b border-line"
                  >
                    <a
                      href={`#${item.id}`}
                      title={`Ir a la sección ${item.label}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={activeId === item.id ? 'page' : undefined}
                      className="group flex items-baseline gap-5 py-4"
                    >
                      <span
                        className={cn(
                          'font-mono text-sm',
                          activeId === item.id ? 'text-brand-700' : 'text-ink-300',
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          'font-display text-[clamp(30px,8vw,46px)] leading-none font-extrabold tracking-[-0.03em]',
                          activeId === item.id ? 'text-ink' : 'text-ink-soft/75',
                        )}
                      >
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ol>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: EASE_OUT }}
                className="flex flex-col gap-6"
              >
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {overlaySocials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.url}
                        title={`Visitar ${social.label} de ${site.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] tracking-[0.18em] text-ink-muted uppercase transition-colors hover:text-brand-700"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
