import { ArrowUpRight, Blocks, Fingerprint, PanelsTopLeft } from 'lucide-react'
import { collaborators } from '@/data/site'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ecosystem = [
  { name: 'WapuOS', icon: PanelsTopLeft, label: 'Herramientas para WordPress', href: 'https://wapuos.com/' },
  {
    name: 'Wapu Auth',
    icon: Fingerprint,
    label: 'Inicio de sesión social',
    href: 'https://wordpress.org/plugins/wapu-auth-social-login/',
  },
  { name: 'WapuClub', icon: Blocks, label: 'Ecosistema de e-commerce', href: collaborators.wapuclub.url },
]

export function Wapuclub() {
  return (
    <Section id="wapuclub" labelledBy="wapuclub-h2" className="ecosystem-section">
      <div className="ecosystem-layout">
        <div className="ecosystem-intro">
          <SectionHeading
            eyebrow="04 / Colaboración"
            headingId="wapuclub-h2"
            title={
              <>
                Parte de <br />
                WapuClub.
              </>
            }
          />
          <p>
            Colaboro en themes, plugins e integraciones para WordPress y WooCommerce. Herramientas que se usan
            en las tiendas del ecosistema.
          </p>
          <p className="ecosystem-credit">
            Un proyecto fundado por{' '}
            <a href={collaborators.ailynmss.url} target="_blank" rel="noopener noreferrer">
              {collaborators.ailynmss.fullName}
            </a>
            .
          </p>
          <img
            className="ecosystem-logo"
            src="/assets/img/wapuclub-logo.webp"
            alt="WapuClub"
            width={360}
            height={195}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="ecosystem-work">
          <a
            className="ecosystem-preview"
            href="https://wapuos.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar WapuOS, herramientas para WordPress"
          >
            <img
              src="/assets/projects/wapuos.webp"
              srcSet="/assets/projects/wapuos-600.webp 600w, /assets/projects/wapuos.webp 1000w"
              sizes="(min-width: 1280px) 680px, (min-width: 900px) 55vw, 90vw"
              alt="Sitio web de WapuOS"
              width={1000}
              height={694}
              loading="lazy"
              decoding="async"
            />
            <span>
              WapuOS <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </a>
          <ul className="ecosystem-links">
            {ecosystem.map(({ icon: Icon, ...item }) => (
              <li key={item.name}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <h3>{item.name}</h3>
                    <p>{item.label}</p>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
