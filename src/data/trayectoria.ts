/**
 * Entradas de la sección 02 · Trayectoria.
 * Se muestran como una línea de tiempo vertical (estilo historial de commits).
 */
export interface Beat {
  id: string
  phase: string
  title: string
  copy: string
}

export const beats: Beat[] = [
  {
    id: 'beat-frontend',
    phase: 'El frontend',
    title: 'Empecé donde el usuario mira: la interfaz.',
    copy: 'Angular y TypeScript me enseñaron a pensar en arquitectura: componentes, tipado estricto y estados predecibles. La disciplina del frontend serio.',
  },
  {
    id: 'beat-wordpress',
    phase: 'El motor',
    title: 'Después bajé al motor: WordPress por dentro.',
    copy: 'Hooks, themes y plugins propios. Descubrí que el CMS que muchos subestiman puede ser una plataforma seria cuando se desarrolla con criterio.',
  },
  {
    id: 'beat-ecommerce',
    phase: 'El comercio',
    title: 'Las tiendas reales fueron la prueba de fuego.',
    copy: 'Colaborando con Ailynmss llevé WooCommerce a producción: tiendas que venden todos los días, donde un error cuesta dinero y la velocidad importa.',
  },
  {
    id: 'beat-ecosistema',
    phase: 'El ecosistema',
    title: 'Hoy construyo piezas de algo más grande.',
    copy: 'En WapuClub desarrollo plugins e integraciones de un ecosistema completo para el e-commerce mexicano. Ya no son sitios sueltos: es sistema.',
  },
]
