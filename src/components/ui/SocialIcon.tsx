import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const icons = {
  github: faGithub,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
  x: faXTwitter,
}

export function SocialIcon({ name }: { name: string }) {
  const definition = icons[name as keyof typeof icons]
  if (!definition) return null
  const [width, height, , , path] = definition.icon
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="23" height="23" fill="currentColor" aria-hidden="true">
      {Array.isArray(path) ? path.map((d) => <path key={d} d={d} />) : <path d={path} />}
    </svg>
  )
}
