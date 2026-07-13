import { MotionConfig } from 'motion/react'
import { ProgressBar } from '@/components/layout/ProgressBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { StackStrip } from '@/components/sections/StackStrip'
import { Trayectoria } from '@/components/sections/Trayectoria'
import { Projects } from '@/components/sections/Projects'
import { Wapuclub } from '@/components/sections/Wapuclub'

function App() {
  return (
    // reducedMotion="user": desactiva animaciones si el sistema lo pide (a11y)
    <MotionConfig reducedMotion="user">
      <a
        href="#inicio"
        title="Saltar al contenido principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <StackStrip />
        <Projects />
        <Trayectoria />
        <Wapuclub />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
