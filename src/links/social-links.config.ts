import { collaborators, site } from '@/data/site'
import { socialProfiles } from '@/data/social'

export type LinkIconName =
  | 'arrow'
  | 'briefcase'
  | 'check'
  | 'copy'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'lock'
  | 'mail'
  | 'share'
  | 'sparkles'
  | 'terminal'
  | 'whatsapp'

export interface EcosystemLink {
  id: string
  name: string
  description: string
  url: string | null
  image: string
  status?: string
}

export interface SocialLink {
  id: string
  name: string
  description: string
  url: string
  image: string
}

export const socialLinksConfig = {
  canonicalUrl: `${site.url}/links`,
  profile: {
    handle: `@${site.handle}`,
    description: 'Desarrollador web especializado en WordPress, Angular, plugins y experiencias digitales.',
  },
  primaryLink: {
    title: 'Ver mi portafolio',
    description: 'Proyectos, experiencia y trabajo reciente.',
    url: '/',
  },
  ecosystem: [
    {
      id: 'wapuos',
      name: 'WapuOS',
      description: 'Ecosistema de plugins y herramientas para WordPress.',
      url: 'https://wapuos.com/',
      image: '/images/social-links/pixel-icons/wapuos.webp',
    },
    {
      id: 'wapu-auth',
      name: 'Wapu Auth',
      description: 'Inicio de sesión social fácil, rápido y seguro.',
      url: 'https://wordpress.org/plugins/wapu-auth-social-login/',
      image: '/images/social-links/pixel-icons/wapu-auth.webp',
    },
    {
      id: 'wapuclub',
      name: collaborators.wapuclub.name,
      description: 'Productos, recursos y experiencias digitales.',
      url: collaborators.wapuclub.url,
      image: '/images/social-links/pixel-icons/wapuclub.webp',
    },
  ] satisfies EcosystemLink[],
  /* Mismas redes y mismos iconos que el footer del portafolio. */
  social: socialProfiles satisfies SocialLink[],
  email: site.email,
  footer: {
    domain: site.url.replace(/^https?:\/\//, ''),
    location: site.location,
  },
} as const
