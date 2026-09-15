import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StackStrip } from '@/components/sections/StackStrip'

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="intro-title" className="portfolio-hero">
      <Container>
        <div className="hero-profile">
          <img
            className="hero-portrait"
            src="/assets/img/victor-photo-480.webp"
            srcSet="/assets/img/victor-photo-480.webp 480w, /assets/img/victor-photo-720.webp 720w"
            sizes="(max-width: 639px) 88px, 104px"
            alt="Retrato de Victor Flores"
            width={480}
            height={480}
            fetchPriority="high"
            decoding="async"
          />
          <p className="eyebrow-label">Desarrollador web</p>
          <h1 id="intro-title">Victor Flores</h1>
          <p className="hero-statement">Aplicaciones web, WordPress y e-commerce.</p>
          <p className="hero-description">
            Trabajo con Angular, Laravel y WordPress para construir aplicaciones, tiendas online y
            herramientas que conectan diseño y funcionalidad.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="button button-primary">
              Ver proyectos <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a href="#trayectoria" className="button button-text">
              Mi experiencia <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-location">
            <MapPin size={14} aria-hidden="true" /> Estado de México, México
          </p>
        </div>
      </Container>
      <StackStrip />
    </section>
  )
}
