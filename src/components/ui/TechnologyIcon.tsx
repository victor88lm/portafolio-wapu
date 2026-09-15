import {
  faAngular,
  faTypescript,
  faWordpressSimple,
  faPhp,
  faLaravel,
  faTailwindCss,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { Braces } from 'lucide-react'

const icons = {
  Angular: faAngular,
  TypeScript: faTypescript,
  WordPress: faWordpressSimple,
  PHP: faPhp,
  Laravel: faLaravel,
  'Tailwind CSS': faTailwindCss,
  Git: faGitAlt,
}
const colors: Record<string, string> = {
  Angular: '#DD0031',
  TypeScript: '#3178C6',
  WordPress: '#21759B',
  PHP: '#777BB4',
  Laravel: '#FF2D20',
  'Tailwind CSS': '#06B6D4',
  Git: '#F05032',
}

export function TechnologyIcon({ name }: { name: string }) {
  if (name === 'REST APIs') return <Braces size={24} aria-hidden="true" />
  if (name === 'WooCommerce' || name === 'MySQL') {
    return (
      <img
        src={`/assets/img/${name.toLowerCase()}-icon.svg`}
        className={name === 'WooCommerce' ? 'technology-wordmark' : undefined}
        width={24}
        height={24}
        alt=""
        decoding="async"
      />
    )
  }
  const definition = icons[name as keyof typeof icons]
  if (!definition) return null
  const [width, height, , , path] = definition.icon
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={24} height={24} fill={colors[name]} aria-hidden="true">
      {Array.isArray(path) ? path.map((d) => <path key={d} d={d} />) : <path d={path} />}
    </svg>
  )
}
