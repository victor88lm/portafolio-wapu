import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Trayectoria } from '@/components/sections/Trayectoria'
import { Projects } from '@/components/sections/Projects'
import { Wapuclub } from '@/components/sections/Wapuclub'
import { Expertise } from '@/components/sections/Expertise'

function App() {
  return (
    <>
      <a href="#inicio" title="Saltar al contenido principal" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <Trayectoria />
        <Expertise />
        <Wapuclub />
      </main>
      <Footer />
    </>
  )
}

export default App
