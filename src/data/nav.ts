/** Ítems de navegación principal. El `id` corresponde al id de la sección. */
export interface NavItem {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'wapuclub', label: 'WapuClub' },
]
