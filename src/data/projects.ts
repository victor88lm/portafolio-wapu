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
  width: number
  height: number
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
    width: 500,
    height: 101,
  },
  {
    name: 'Celiz',
    url: 'https://celiz.com.mx',
    logo: '/assets/img/celiz-logo.webp',
    alt: 'Logotipo de Celiz, tienda de maquillaje online en México',
    category: 'Maquillaje',
    width: 224,
    height: 101,
  },
  {
    name: 'Carolla',
    url: 'https://carolla.com.mx',
    logo: '/assets/img/carolla-logo.png',
    alt: 'Logotipo de Carolla, tienda online en México',
    category: 'Maquillaje',
    width: 339,
    height: 84,
  },
  {
    name: 'Glossy Beauty',
    url: 'https://glossy.mx',
    logo: '/assets/img/glossy-beauty-logo.webp',
    alt: 'Logotipo de Glossy Beauty, tienda de maquillaje online en México',
    category: 'Maquillaje',
    width: 227,
    height: 72,
  },
  {
    name: 'FIORD Fragancias',
    url: 'https://fraganciasfiord.com.mx',
    logo: '/assets/img/fragancias-fiord-logo.webp',
    alt: 'Logotipo de FIORD Fragancias, perfumería online en México',
    category: 'Perfumería',
    width: 392,
    height: 52,
    invert: true,
  },
  {
    name: 'Velvet Beauty',
    url: 'https://velvetbeauty.mx/',
    logo: '/assets/img/velvet-beauty-logo.svg',
    alt: 'Logotipo de Velvet Beauty, tienda de maquillaje online en México',
    category: 'Maquillaje',
    width: 1158,
    height: 253,
  },
  {
    name: 'Ohana Store',
    url: 'https://ohanastore.mx/',
    logo: '/assets/img/ohana-store-logo.webp',
    alt: 'Logotipo de Ohana Store, tienda de belleza online en México',
    category: 'Belleza',
    width: 360,
    height: 145,
  },
  {
    name: 'Merló',
    url: 'https://merlo.mx/',
    logo: '/assets/img/merlo-logo.webp',
    alt: 'Logotipo de Merló, tienda de belleza online en México',
    category: 'Belleza',
    width: 360,
    height: 98,
  },
]
