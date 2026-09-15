/**
 * Perfiles sociales, compartidos por el footer del portafolio y por
 * la página /links. Las URLs son comunes; cada vista usa sus propios iconos.
 */
import { site } from '@/data/site'

export interface SocialProfile {
  id: string
  /** Nombre de la red, para etiquetas y aria-label */
  name: string
  /** Usuario visible en el footer */
  handle: string
  /** Frase corta de contexto (aria-label y lectores de pantalla) */
  description: string
  url: string
  /** Icono pixel art de 260×260 */
  image: string
}

const icon = (file: string) => `/images/social-links/pixel-icons/${file}`

export const socialProfiles: SocialProfile[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: 'victor88lm',
    description: 'Código y proyectos públicos.',
    url: 'https://github.com/victor88lm',
    image: icon('github.webp'),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'in/victor88lm',
    description: 'Experiencia y perfil profesional.',
    url: site.social.linkedin,
    image: icon('linkedin.webp'),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@victor88lm',
    description: 'Mi perfil personal.',
    url: site.social.instagram,
    image: icon('instagram.webp'),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: site.whatsapp.display,
    description: 'Contacto directo por mensaje.',
    url: `https://wa.me/${site.whatsapp.number}`,
    image: icon('whatsapp.webp'),
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@victor88lm_',
    description: 'Mi perfil en TikTok.',
    url: site.social.tiktok,
    image: icon('tiktok.webp'),
  },
  {
    id: 'x',
    name: 'X',
    handle: '@Victor88LM__',
    description: 'Publicaciones y perfil en X.',
    url: site.social.x,
    image: icon('x.svg'),
  },
]
