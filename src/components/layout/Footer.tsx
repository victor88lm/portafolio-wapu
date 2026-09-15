import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { site, collaborators } from '@/data/site'
import { socialProfiles } from '@/data/social'
import { Container } from '@/components/ui/Container'
import { Wordmark } from '@/components/ui/Wordmark'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Footer() {
  return (
    <footer id="contacto" className="portfolio-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-heading">
            <p className="eyebrow-label">Contacto / Redes</p>
            <h2>
              Sigamos
              <br />
              en contacto.
            </h2>
            <a className="footer-all-links" href="/links">
              Todos mis enlaces <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <nav aria-label="Redes sociales" className="footer-socials">
            {socialProfiles.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${social.name} de ${site.name}`}
                title={social.name}
              >
                <SocialIcon name={social.id} />
                <span>{social.name}</span>
                <ArrowUpRight size={16} className="social-arrow" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <a href="#inicio" aria-label="Victor Flores, ir al inicio">
            <Wordmark />
          </a>
          <p>
            © {new Date().getFullYear()} {site.name}.<br />
            Proyectos e-commerce en colaboración con{' '}
            <a href={collaborators.ailynmss.url} target="_blank" rel="noopener noreferrer">
              Ailynmss
            </a>{' '}
            y{' '}
            <a href={collaborators.wapuclub.url} target="_blank" rel="noopener noreferrer">
              WapuClub
            </a>
            .
          </p>
          <a href="#inicio" className="back-to-top" aria-label="Volver al inicio" title="Volver al inicio">
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
