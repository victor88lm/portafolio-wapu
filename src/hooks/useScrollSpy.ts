import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección visible actualmente,
 * para resaltar el ítem activo en la navegación.
 *
 * Calcula la sección a partir de posiciones en cada scroll en vez de
 * escuchar solo `isIntersecting`: un IntersectionObserver no dispara
 * cuando se salta de golpe a otra parte del documento (un ancla, un
 * `scrollTo`, recargar a media página), y tampoco al final del
 * documento, donde ninguna sección cruza la franja central. En esos
 * casos el indicador se quedaba pegado en la primera sección.
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const pick = () => {
      // Línea de referencia en el tercio superior del viewport: la
      // última sección que la ha cruzado es la activa.
      const line = window.scrollY + window.innerHeight * 0.35
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top + window.scrollY <= line) current = id
      }

      // Al fondo del documento gana siempre la última sección: si no,
      // el footer (que no está en el nav) dejaría el indicador suelto.
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        const last = [...sectionIds].reverse().find((id) => document.getElementById(id))
        if (last) current = last
      }

      setActiveId(current)
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick)
    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [sectionIds])

  return activeId
}
