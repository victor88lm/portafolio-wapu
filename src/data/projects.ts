/**
 * Proyectos mostrados en el portafolio.
 *
 * IMPORTANTE — atribución: estas tiendas son proyectos de Ailyn Montes
 * (Ailynmss / WapuClub). Mi participación fue como colaborador técnico
 * en el desarrollo. La sección lo comunica de forma explícita.
 */
export interface Project {
  name: string
  url: string
  logo: string
  alt: string
  category: string
  /** Algunos logos claros necesitan invertirse sobre fondo blanco */
  invert?: boolean
}

export const projects: Project[] = [
  {
    name: 'OrchidSkin',
    url: 'https://oskinmx.com',
    logo: '/assets/img/orchidskin-logo.webp',
    alt: 'Logotipo de OrchidSkin, tienda de maquillaje online en México',
    category: 'Maquillaje',
  },
  {
    name: 'Celiz',
    url: 'https://celiz.com.mx',
    logo: '/assets/img/celiz-logo.webp',
    alt: 'Logotipo de Celiz, tienda de maquillaje online en México',
    category: 'Maquillaje',
  },
  {
    name: 'Carolla',
    url: 'https://carolla.com.mx',
    logo: '/assets/img/carolla-logo.png',
    alt: 'Logotipo de Carolla, tienda online en México',
    category: 'Maquillaje',
  },
  {
    name: 'Glossy Beauty',
    url: 'https://glossy.mx',
    logo: '/assets/img/glossy-beauty-logo.webp',
    alt: 'Logotipo de Glossy Beauty, tienda de maquillaje online en México',
    category: 'Maquillaje',
  },
  {
    name: 'FIORD Fragancias',
    url: 'https://fraganciasfiord.com.mx',
    logo: '/assets/img/fragancias-fiord-logo.webp',
    alt: 'Logotipo de FIORD Fragancias, perfumería online en México',
    category: 'Perfumería',
    invert: true,
  },
  {
    name: 'Velvet Beauty',
    url: 'https://velvetbeauty.mx/',
    logo: '/assets/img/velvet-beauty-logo.svg',
    alt: 'Logotipo de Velvet Beauty, tienda de maquillaje online en México',
    category: 'Maquillaje',
  },
  {
    name: 'Ohana Store',
    url: 'https://ohanastore.mx/',
    logo: '/assets/img/ohana-store-logo.png',
    alt: 'Logotipo de Ohana Store, tienda de belleza online en México',
    category: 'Belleza',
  },
  {
    name: 'Merló',
    url: 'https://merlo.mx/',
    logo: '/assets/img/merlo-logo.png',
    alt: 'Logotipo de Merló, tienda de belleza online en México',
    category: 'Belleza',
  },
]
