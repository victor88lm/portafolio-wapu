import { motion, useScroll, useSpring } from 'motion/react'

/**
 * Barra de progreso de lectura fija en el tope.
 * Anima transform (scaleX), nunca width: solo compositor, sin layout.
 */
export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      role="progressbar"
      aria-label="Progreso de lectura"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-[2px] origin-left bg-brand-600"
    />
  )
}
