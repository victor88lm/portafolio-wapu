import { useEffect, useRef, useState } from 'react'
import { CopyButton, ShareButton } from '@/links/components/InteractiveButtons'
import { LinkIcon } from '@/links/components/LinkIcon'
import {
  socialLinksConfig,
  type EcosystemLink,
  type SocialLink,
} from '@/links/social-links.config'

function BackgroundArtwork() {
  return (
    <div className="links-background" aria-hidden="true">
      <picture>
        <source
          type="image/avif"
          srcSet="/images/social-links/banner-portafolio-960.avif 960w, /images/social-links/banner-portafolio-1280.avif 1280w, /images/social-links/banner-portafolio.avif 1672w"
          sizes="100vw"
        />
        <img
          src="/images/social-links/banner-portafolio.avif"
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="links-background-overlay" />
    </div>
  )
}

function ExternalIndicator() {
  return (
    <span className="links-external-indicator" aria-hidden="true">
      <LinkIcon name="arrow" />
    </span>
  )
}

function EcosystemCard({ item }: { item: EcosystemLink }) {
  const content = (
    <>
      <span className="links-card-icon links-wapu-icon" aria-hidden="true">
        <LinkIcon name={item.icon} />
      </span>
      <span className="links-card-copy">
        <strong>{item.name}</strong>
        <span>{item.description}</span>
      </span>
      {item.url ? <ExternalIndicator /> : <span className="links-card-status">{item.status}</span>}
    </>
  )

  if (!item.url) {
    return (
      <li>
        <article className="links-card links-ecosystem-card is-unavailable" aria-label={`${item.name}: ${item.status}`}>
          {content}
        </article>
      </li>
    )
  }

  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="links-card links-ecosystem-card"
        aria-label={`Visitar ${item.name}: ${item.description}`}
      >
        {content}
      </a>
    </li>
  )
}

function SocialCard({ item }: { item: SocialLink }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="links-card links-social-card"
        aria-label={`Abrir ${item.name}: ${item.description}`}
      >
        <span className="links-card-icon" aria-hidden="true">
          <LinkIcon name={item.icon} />
        </span>
        <span className="links-card-copy">
          <strong>{item.name}</strong>
          <span>{item.description}</span>
        </span>
        <ExternalIndicator />
      </a>
    </li>
  )
}

export function SocialLinksPage() {
  const [notice, setNotice] = useState('')
  const noticeTimer = useRef<number | undefined>(undefined)
  const currentYear = new Date().getFullYear()

  const announce = (message: string) => {
    setNotice(message)
    window.clearTimeout(noticeTimer.current)
    noticeTimer.current = window.setTimeout(() => setNotice(''), 2800)
  }

  useEffect(
    () => () => {
      window.clearTimeout(noticeTimer.current)
    },
    [],
  )

  return (
    <main className="social-links-page">
      <BackgroundArtwork />

      <div className="social-links-shell">
        <div className="social-links-column">
          <div className="links-top-controls">
            <ShareButton url={socialLinksConfig.canonicalUrl} onNotice={announce} />
          </div>

          <header className="links-identity">
            <p className="links-handle">{socialLinksConfig.profile.handle}</p>
            <h1>{socialLinksConfig.profile.name}</h1>
            <p className="links-intro">{socialLinksConfig.profile.description}</p>
            <p className="links-availability">
              <span aria-hidden="true" />
              {socialLinksConfig.profile.availability}
            </p>
          </header>

          <section aria-labelledby="portfolio-link-title">
            <h2 id="portfolio-link-title" className="links-sr-only">
              Portafolio
            </h2>
            <a href={socialLinksConfig.primaryLink.url} className="links-card links-primary-card">
              <span className="links-card-icon" aria-hidden="true">
                <LinkIcon name="briefcase" />
              </span>
              <span className="links-card-copy">
                <strong>{socialLinksConfig.primaryLink.title}</strong>
                <span>{socialLinksConfig.primaryLink.description}</span>
              </span>
              <span className="links-primary-arrow" aria-hidden="true">
                <LinkIcon name="arrow" />
              </span>
            </a>
          </section>

          <section className="links-section" aria-labelledby="ecosystem-title">
            <div className="links-section-heading">
              <span aria-hidden="true">{'//'}</span>
              <h2 id="ecosystem-title">Mi ecosistema</h2>
            </div>
            <ul className="links-list">
              {socialLinksConfig.ecosystem.map((item) => (
                <EcosystemCard key={item.id} item={item} />
              ))}
            </ul>
          </section>

          <section className="links-section" aria-labelledby="social-title">
            <div className="links-section-heading">
              <span aria-hidden="true">{'//'}</span>
              <h2 id="social-title">Conecta conmigo</h2>
            </div>
            <ul className="links-social-grid">
              {socialLinksConfig.social.map((item) => (
                <SocialCard key={item.id} item={item} />
              ))}
            </ul>
          </section>

          <section className="links-section" aria-labelledby="email-title">
            <article className="links-card links-email-card">
              <span className="links-card-icon" aria-hidden="true">
                <LinkIcon name="mail" />
              </span>
              <div className="links-email-copy">
                <h2 id="email-title">Enviar un correo</h2>
                <span className="links-email-address">{socialLinksConfig.email}</span>
              </div>
              <div className="links-email-actions" aria-label="Acciones de correo">
                <a
                  href={`mailto:${socialLinksConfig.email}`}
                  className="links-email-action"
                  title={`Abrir el cliente de correo para escribir a ${socialLinksConfig.email}`}
                >
                  <LinkIcon name="mail" />
                  <span>Abrir correo</span>
                </a>
                <CopyButton
                  value={socialLinksConfig.email}
                  label="Copiar"
                  notice="Correo copiado."
                  onNotice={announce}
                />
              </div>
            </article>
          </section>

          <footer className="links-minimal-footer">
            <a href="/" aria-label="Ir al portafolio de Victor88LM">
              {socialLinksConfig.footer.domain}
            </a>
            <span aria-hidden="true">·</span>
            <span>{socialLinksConfig.footer.location}</span>
            <span aria-hidden="true">·</span>
            <span>{currentYear}</span>
            <p>Diseñado y desarrollado por Victor88LM</p>
          </footer>
        </div>
      </div>

      <div
        className={`links-toast${notice ? ' is-visible' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {notice && (
          <>
            <LinkIcon name="check" />
            <span>{notice}</span>
          </>
        )}
      </div>
    </main>
  )
}
