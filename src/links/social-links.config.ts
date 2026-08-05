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
  icon: LinkIconName
  status?: string
}

export interface SocialLink {
  id: string
  name: string
  description: string
  url: string
  icon: LinkIconName
}

export const socialLinksConfig = {
  canonicalUrl: `${site.url}/links`,
  profile: {
    name: 'Victor Meza',
    handle: `@${site.handle}`,
    description: 'Desarrollador web especializado en WordPress, Angular, plugins y experiencias digitales.',
    availability: 'Disponible para nuevos proyectos',
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
      url: null,
      icon: 'terminal',
      status: 'En desarrollo',
    },
    {
      id: 'wapu-auth',
      name: 'Wapu Auth',
      description: 'Inicio de sesión social fácil, rápido y seguro.',
      url: 'https://wordpress.org/plugins/wapu-auth-social-login/',
      icon: 'lock',
    },
    {
      id: 'wapuclub',
      name: collaborators.wapuclub.name,
      description: 'Productos, recursos y experiencias digitales.',
      url: collaborators.wapuclub.url,
      icon: 'sparkles',
    },
  ] satisfies EcosystemLink[],
  social: [
    {
      id: 'github',
      name: 'GitHub',
      description: 'Código y proyectos públicos.',
      url: 'https://github.com/victor88lm',
      icon: 'github',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Experiencia y perfil profesional.',
      url: site.social.linkedin,
      icon: 'linkedin',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Mi perfil personal.',
      url: site.social.instagram,
      icon: 'instagram',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Contacto directo por mensaje.',
      url: `https://wa.me/${site.whatsapp.number}`,
      icon: 'whatsapp',
    },
  ] satisfies SocialLink[],
  email: site.email,
  footer: {
    domain: 'victor88lm.com',
    location: site.location,
  },
} as const
