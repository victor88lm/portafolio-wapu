import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import '@/links/social-links.css'
import { SocialLinksPage } from '@/links/SocialLinksPage'

createRoot(document.getElementById('links-root')!).render(
  <StrictMode>
    <SocialLinksPage />
  </StrictMode>,
)
