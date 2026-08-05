import { collaborators, site } from '@/data/site'

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
  social: [
    {
      id: 'github',
      name: 'GitHub',
      description: 'Código y proyectos públicos.',
      url: 'https://github.com/victor88lm',
      image: '/images/social-links/pixel-icons/github.webp',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Experiencia y perfil profesional.',
      url: site.social.linkedin,
      image: '/images/social-links/pixel-icons/linkedin.webp',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Mi perfil personal.',
      url: site.social.instagram,
      image: '/images/social-links/pixel-icons/instagram.webp',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Contacto directo por mensaje.',
      url: `https://wa.me/${site.whatsapp.number}`,
      image: '/images/social-links/pixel-icons/whatsapp.webp',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      description: 'Mi perfil en TikTok.',
      url: site.social.tiktok,
      image: '/images/social-links/pixel-icons/tiktok.webp',
    },
    {
      id: 'x',
      name: 'X',
      description: 'Publicaciones y perfil en X.',
      url: site.social.x,
      image: '/images/social-links/pixel-icons/x.svg',
    },
  ] satisfies SocialLink[],
  email: site.email,
  footer: {
    domain: 'victor88lm.com',
    location: site.location,
  },
} as const
