import { motion } from 'motion/react'
import { site } from '@/data/site'
import { fadeUp, stagger } from '@/lib/motion'
import { ArrowUpRight } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const portraitSrc = '/assets/img/victor-photo.jpg'

/**
 * Hero personal: presenta a Victor Flores primero y después aterriza
 * especialidad, proyectos y canales de contacto.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-label={`Presentación de ${site.name}, desarrollador web`}
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="bg-blueprint absolute inset-0 -z-10 opacity-55 [mask-image:linear-gradient(to_bottom,black_0%,black_44%,transparent_86%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_72%_8%,rgb(5_150_105/0.16),transparent_64%),radial-gradient(620px_360px_at_0%_26%,rgb(52_211_153/0.12),transparent_60%),linear-gradient(to_bottom,rgb(246_250_247/0.15),rgb(246_250_247))]"
      />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,340px)] lg:items-center lg:gap-16 xl:grid-cols-[minmax(680px,1fr)_minmax(300px,360px)] xl:gap-20"
        >
          <div className="order-2 min-w-0 max-w-[820px] lg:order-1">
            <motion.p
              variants={fadeUp}
              className="mb-6 flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.08em] text-ink-muted"
            >
              <span className="text-brand-600">{'//'}</span>
              @{site.handle} · Desarrollador Web · {site.location}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(42px,6vw,76px)] leading-[1.02] font-extrabold tracking-[-0.03em] text-ink"
            >
              <span className="block">Hola, soy</span>
              <span className="text-gradient block pb-[0.08em]">{site.name}.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[32ch] font-display text-[clamp(22px,2.25vw,30px)] leading-[1.22] font-semibold text-ink-soft sm:max-w-[36ch]"
            >
              Desarrollo interfaces, WordPress y e-commerce con foco en claridad y consistencia.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 max-w-[54ch] text-base leading-[1.75] text-ink-soft sm:text-[17px]">
              Este portafolio reúne parte de mi trabajo con <strong className="font-semibold text-ink">Angular</strong>,{' '}
              <strong className="font-semibold text-ink">TypeScript</strong>,{' '}
              <strong className="font-semibold text-ink">WordPress</strong> y{' '}
              <strong className="font-semibold text-ink">WooCommerce</strong>: proyectos reales, decisiones técnicas y
              colaboraciones en producción.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-2.5 rounded-(--radius-btn) bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-(--shadow-btn) transition-all duration-300 ease-(--ease-soft) hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-(--shadow-btn-hover)"
              >
                Ver proyectos
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 rounded-(--radius-btn) border border-line bg-white/90 px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-24px_rgb(6_78_59/0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
                Contacto
              </a>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="order-1 mx-auto w-full max-w-[230px] lg:order-2 lg:mr-10 lg:max-w-[315px]">
            <div className="relative aspect-square">
              <div
                aria-hidden="true"
                className="absolute -inset-12 -z-10 rounded-full bg-[radial-gradient(circle,rgb(5_150_105/0.13),transparent_68%)]"
              />
              <motion.span
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 rounded-full border border-dashed border-brand-300/60"
              >
                <span className="absolute top-[6%] left-[78%] size-2 rounded-full bg-brand-500 shadow-[0_0_0_4px_rgb(5_150_105/0.15)]" />
              </motion.span>

              <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-white bg-brand-50 shadow-[0_30px_90px_-48px_rgb(6_78_59/0.55)]">
                <img
                  src={portraitSrc}
                  alt={`Foto de ${site.name}, desarrollador web`}
                  loading="eager"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                  className="relative z-10 h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center bg-brand-50 font-display text-[clamp(96px,12vw,132px)] font-extrabold tracking-[-0.08em] text-brand-600/25"
                >
                  {site.name.charAt(0)}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.24em] text-ink-300 uppercase">scroll</span>
        <span className="relative h-9 w-px overflow-hidden bg-line">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-1/2 bg-brand-500"
          />
        </span>
      </motion.div>
    </section>
  )
}
