import { useMemo } from 'react'
import { ArrowUpRight, House, LayoutGrid, BriefcaseBusiness } from 'lucide-react'
import { navItems } from '@/data/nav'
import { site } from '@/data/site'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Wordmark } from '@/components/ui/Wordmark'
import { Container } from '@/components/ui/Container'

const navigationIcons = {
  inicio: House,
  proyectos: LayoutGrid,
  trayectoria: BriefcaseBusiness,
}

export function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useScrollSpy(sectionIds)

  return (
    <>
      <header className="site-header">
        <Container className="header-inner">
          <a href="#inicio" aria-label={`${site.name}, ir al inicio`} className="header-brand">
            <Wordmark />
          </a>
          <nav aria-label="Navegación principal" className="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/links" className="header-links">
            Mis enlaces <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </Container>
      </header>
      <nav aria-label="Navegación móvil" className="mobile-bottom-nav">
        <div className="mobile-bottom-nav-inner">
          {navItems.map((item) => {
            const Icon = navigationIcons[item.id as keyof typeof navigationIcons]
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                <span className="mobile-nav-icon">
                  {item.id === 'wapuclub' ? (
                    <img
                      src="/assets/img/wapuclub-nav.png"
                      className="mobile-nav-wapuclub"
                      width={26}
                      height={26}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : (
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  )}
                </span>
                <span>{item.label}</span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
