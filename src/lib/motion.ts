/**
 * Variantes de animación compartidas (Motion / Framer Motion).
 * Lenguaje de movimiento del sitio: reveals amplios (y: 52) con
 * easing expo-out, máscaras de línea en titulares y staggers cortos.
 */
import type { Variants } from 'motion/react'

/** Equivalente a power3/expo out del diseño de referencia */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const

/** Aparece subiendo (reveal estándar de sección). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 52 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
}

/** Aparece sin desplazamiento. Uso: fondos, imágenes grandes. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE_OUT } },
}

/** Contenedor que escalona la entrada de sus hijos. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

/** Máscara de línea para titulares: el texto sube dentro de un
    contenedor con overflow-hidden. */
export const lineReveal: Variants = {
  hidden: { y: '115%' },
  visible: {
    y: '0%',
    transition: { duration: 0.92, ease: EASE_OUT },
  },
}

/** Config de viewport estándar: anima una sola vez, un poco antes de entrar. */
export const viewportOnce = { once: true, margin: '0px 0px -80px 0px' } as const
