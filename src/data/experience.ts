/** Experiencia y formación proporcionadas en el CV de Victor. */
export const experience = [
  {
    id: 'wapuclub',
    period: 'Jul 2025 — Actualidad',
    current: true,
    title: 'Desarrollador web',
    company: 'WapuClub · Colaborador freelance',
    summary:
      'Desarrollo de themes modulares, plugins e integraciones para tiendas del ecosistema WordPress y WooCommerce.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
    contributions: [
      'Themes con arquitectura modular y variantes para diferentes tipos de e-commerce.',
      'Desarrollo de plugins propios, con un plugin publicado en el repositorio oficial de WordPress.org.',
      'Funcionalidades de carrito, checkout, productos y roles de usuario.',
    ],
  },
  {
    id: 'sistema-escolar',
    period: 'Feb 2025 — Ene 2026',
    current: false,
    title: 'Sistema escolar interno',
    company: 'Escuela Profesional de Dibujo S.C.',
    summary:
      'Desarrollo completo de una plataforma para alumnos y dirección académica, con frontend en Angular y API REST en Laravel.',
    tags: ['Angular', 'Laravel', 'API REST', 'JWT'],
    contributions: [
      'Portal de alumnos con calificaciones, historial de pagos, perfil e inscripciones.',
      'Administración de cursos, usuarios, inscripciones y reportes para dirección académica.',
      'Autenticación, acceso por roles, guardias de rutas y manejo de sesiones.',
    ],
  },
  {
    id: 'sitio-institucional',
    url: 'https://epd.edu.mx/',
    period: 'Abr 2025 — May 2025',
    current: false,
    title: 'Sitio web institucional',
    company: 'Escuela Profesional de Dibujo S.C.',
    summary: 'Sitio institucional con inscripción en línea y pagos integrados con Stripe.',
    tags: ['Angular', 'Tailwind CSS', 'PHP', 'Stripe'],
    contributions: [
      'Interfaz desarrollada con Angular y Tailwind CSS.',
      'Lógica personalizada en PHP para el proceso de inscripción y la integración de pagos.',
    ],
  },
] as const

export const education = [
  {
    period: '2022 — 2025',
    degree: 'Licenciatura en Tecnologías de la Información',
    institution: 'Universidad de Londres',
    logo: '/assets/img/universidad-de-londres.webp',
    logoWidth: 500,
    logoHeight: 500,
  },
  {
    period: '2018 — 2022',
    degree: 'Técnico en Programación',
    institution: 'CETIS N.º 54',
    logo: '/assets/img/cetis-54.png',
    logoWidth: 500,
    logoHeight: 573,
  },
] as const
