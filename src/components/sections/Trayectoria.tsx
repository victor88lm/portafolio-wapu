import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { beats } from '@/data/trayectoria'
import { fadeUp, stagger, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/ui/Section'

/**
 * Trayectoria como historial vertical (estilo git log):
 * una línea que se dibuja con el scroll y un nodo por etapa.
 */
export function Trayectoria() {
  const timelineRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 60%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <Section id="trayectoria" labelledBy="trayectoria-h2" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[38%_1fr] lg:gap-20">
        {/* Header sticky */}
        <motion.header
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <motion.p variants={fadeUp} className="mb-5 flex items-center gap-2 font-mono text-[13px] font-medium text-ink-muted uppercase">
            <span className="text-brand-700 normal-case">{'//'}</span>
            03 · Trayectoria
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="trayectoria-h2"
            className="font-display text-4xl leading-[1.04] font-extrabold text-balance text-ink sm:text-5xl"
          >
            De la interfaz al motor — y de ahí al <span className="text-gradient">sistema</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-[44ch] text-base leading-relaxed text-ink-muted">
            El frontend moderno y el ecosistema WordPress casi nunca viven en la misma persona. Mi camino fue
            exactamente ese cruce — y ahí está el valor.
          </motion.p>
        </motion.header>

        {/* Línea de tiempo */}
        <ol ref={timelineRef} className="relative">
          {/* Riel + línea que se dibuja con el scroll */}
          <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-brand-600"
          />

          {beats.map((beat, i) => (
            <motion.li
              key={beat.id}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative pb-14 pl-10 last:pb-0"
            >
              {/* Nodo */}
              <span aria-hidden="true" className="absolute top-2 left-0 grid size-[11px] place-items-center">
                <span className="absolute size-[11px] rounded-full border border-line bg-white" />
                <motion.span variants={fadeUp} className="absolute size-[11px] rounded-full bg-brand-600 shadow-[0_0_0_4px_rgb(5_150_105/0.14)]" />
              </span>

              <motion.p variants={fadeUp} className="flex items-baseline gap-3 font-mono text-[11px] font-semibold text-brand-700 uppercase">
                0{i + 1}
                <span className="text-ink-400">{beat.phase}</span>
              </motion.p>
              <motion.h3 variants={fadeUp} className="mt-3 max-w-[30ch] font-display text-lg leading-snug font-bold text-ink sm:text-xl">
                {beat.title}
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-2.5 max-w-[52ch] text-[15px] leading-[1.8] text-ink-muted">
                {beat.copy}
              </motion.p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
