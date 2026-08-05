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

function PixelIcon({
  src,
  sourceSize,
  className = '',
}: {
  src: string
  sourceSize: number
  className?: string
}) {
  return (
    <img
      src={src}
      alt=""
      width={sourceSize}
      height={sourceSize}
      className={`links-pixel-icon ${className}`}
      decoding="async"
    />
  )
}

function EcosystemCard({ item }: { item: EcosystemLink }) {
  const content = (
    <>
      <PixelIcon src={item.image} sourceSize={390} className="links-ecosystem-icon" />
      <strong>{item.name}</strong>
      <span className="links-sr-only">{item.description}</span>
      {item.status && <span className="links-card-status">{item.status}</span>}
    </>
  )

  if (!item.url) {
    return (
      <li>
        <article
          className="links-pixel-card links-ecosystem-card is-unavailable"
          aria-label={`${item.name}: ${item.status}. ${item.description}`}
          title={`${item.name}: ${item.status}`}
        >
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
        className="links-pixel-card links-ecosystem-card"
        aria-label={`Visitar ${item.name}: ${item.description}`}
        title={`Visitar ${item.name}`}
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
        className="links-social-button"
        aria-label={`Abrir ${item.name}: ${item.description}`}
        title={item.name}
      >
        <PixelIcon src={item.image} sourceSize={260} />
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
            <img
              src="/images/social-links/profile-320.avif"
              alt="Ilustración pixel art de Victor88LM"
              width={320}
              height={320}
              className="links-profile-image"
              fetchPriority="high"
              decoding="async"
            />
            <h1 className="links-handle">
              {socialLinksConfig.profile.handle}
            </h1>
            <p className="links-intro">{socialLinksConfig.profile.description}</p>
          </header>

          <section aria-labelledby="portfolio-link-title">
            <h2 id="portfolio-link-title" className="links-sr-only">
              Portafolio
            </h2>
            <a
              href={socialLinksConfig.primaryLink.url}
              className="links-pixel-card links-primary-card"
            >
              <span className="links-primary-marker" aria-hidden="true">
                {'▶'}
              </span>
              <span className="links-primary-copy">
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
            <ul className="links-ecosystem-grid">
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

          <section
            className="links-pixel-card links-email-card"
            aria-labelledby="email-title"
          >
            <div className="links-email-copy">
              <span>Contacto directo</span>
              <h2 id="email-title">{socialLinksConfig.email}</h2>
            </div>
            <div className="links-email-actions" aria-label="Acciones de correo">
              <a
                href={`mailto:${socialLinksConfig.email}`}
                className="links-email-action"
                aria-label={`Abrir el cliente de correo para escribir a ${socialLinksConfig.email}`}
                title="Abrir correo"
              >
                <LinkIcon name="mail" />
                <span className="links-sr-only">Abrir correo</span>
              </a>
              <CopyButton
                value={socialLinksConfig.email}
                label="Copiar correo"
                notice="Correo copiado."
                onNotice={announce}
              />
            </div>
          </section>

          <footer className="links-minimal-footer">
            <span>© {currentYear}</span>
            <a href="/" aria-label="Ir al portafolio de Victor88LM">
              {socialLinksConfig.footer.domain}
            </a>
            <span aria-hidden="true">·</span>
            <span>{socialLinksConfig.footer.location}</span>
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
