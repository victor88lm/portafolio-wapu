import { LinkIcon } from '@/links/components/LinkIcon'

interface NoticeHandler {
  onNotice: (message: string) => void
}

interface ShareButtonProps extends NoticeHandler {
  url: string
}

interface CopyButtonProps extends NoticeHandler {
  value: string
  label?: string
  notice: string
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()

  if (!copied) {
    throw new Error('No se pudo copiar el texto.')
  }
}

export function ShareButton({ url, onNotice }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Links | Victor88LM',
          text: 'Portafolio, proyectos y redes de Victor88LM.',
          url,
        })
        onNotice('Página compartida.')
        return
      }

      await copyText(url)
      onNotice('Enlace copiado.')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      onNotice('No fue posible compartir. Intenta copiar la URL del navegador.')
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="links-share-button"
      aria-label="Compartir esta página"
      title="Compartir esta página"
    >
      <LinkIcon name="share" />
      <span className="links-sr-only">Compartir</span>
    </button>
  )
}

export function CopyButton({ value, label = 'Copiar', notice, onNotice }: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await copyText(value)
      onNotice(notice)
    } catch {
      onNotice('No fue posible copiar. Selecciona el texto manualmente.')
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="links-email-action"
      aria-label={`${label}: ${value}`}
      title={`${label}: ${value}`}
    >
      <LinkIcon name="copy" />
      <span className="links-sr-only">{label}</span>
    </button>
  )
}
