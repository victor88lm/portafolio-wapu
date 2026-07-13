/**
 * Configuración global del sitio.
 * Todo dato personal, de contacto o de marca se edita AQUÍ,
 * nunca dentro de los componentes.
 */
export const site = {
  name: 'Victor Flores',
  handle: 'victor88lm',
  role: 'Desarrollador Web · Angular & WordPress',
  tagline: 'Portafolio de desarrollo web con foco en e-commerce, interfaces sólidas y sistemas WordPress bien cuidados.',
  email: 'victor88lm@hotmail.com',
  location: 'México',
  /** TODO: reemplazar por el dominio real cuando esté publicado */
  url: 'https://victor88lm.dev',
  whatsapp: {
    /** Formato wa.me: código de país (52 MX) + número, sin espacios */
    number: '525649104506',
    display: '+52 56 4910 4506',
  },
  social: {
    instagram: 'https://www.instagram.com/victor88lm__/',
    tiktok: 'https://www.tiktok.com/@victor88lm_',
    x: 'https://x.com/Victor88LM__',
    linkedin: 'https://www.linkedin.com/in/victor88lm/',
  },
} as const

export const collaborators = {
  ailynmss: {
    name: 'Ailynmss',
    fullName: 'Ailyn Montes',
    url: 'https://ailynmss.com',
  },
  wapuclub: {
    name: 'WapuClub',
    url: 'https://wapuclub.com',
  },
} as const
