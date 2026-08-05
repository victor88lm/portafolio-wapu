import type { LinkIconName } from '@/links/social-links.config'

interface LinkIconProps {
  name: LinkIconName
  className?: string
}

const commonProps = {
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
  'aria-hidden': true,
} as const

export function LinkIcon({ name, className }: LinkIconProps) {
  if (name === 'github') {
    return (
      <svg {...commonProps} className={className} fill="currentColor">
        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.18 1.77 1.18 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.12c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.12 3.04.73.8 1.17 1.83 1.17 3.08 0 4.42-2.7 5.4-5.28 5.69.42.36.79 1.07.79 2.16v3.24c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg {...commonProps} className={className} fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (name === 'whatsapp') {
    return (
      <svg {...commonProps} className={className} fill="currentColor">
        <path d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.16 1.6 5.97L.03 24l6.24-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.23-6.17-3.46-8.42Zm-8.46 18.34h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.87 9.87 0 0 1-1.51-5.29c0-5.45 4.42-9.88 9.87-9.88 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.97c0 5.45-4.43 9.89-9.88 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.92 8.92 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.72.23 1.36.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.31.18-1.44-.08-.12-.27-.2-.57-.35Z" />
      </svg>
    )
  }

  if (name === 'briefcase') {
    return (
      <svg {...commonProps} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7.5h16a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2Z" />
        <path d="M8.5 7.5V5.7A1.7 1.7 0 0 1 10.2 4h3.6a1.7 1.7 0 0 1 1.7 1.7v1.8M2 12.5c2.8 1.3 6.1 2 10 2s7.2-.7 10-2" />
      </svg>
    )
  }

  if (name === 'terminal') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 7 4 4-4 4M11.5 16H19" />
        <rect x="2.5" y="3.5" width="19" height="17" rx="2.5" />
      </svg>
    )
  }

  if (name === 'lock') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="10" width="16" height="11" rx="2.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
      </svg>
    )
  }

  if (name === 'sparkles') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5c.7 4.6 2.9 6.8 7.5 7.5-4.6.7-6.8 2.9-7.5 7.5C11.3 12.9 9.1 10.7 4.5 10 9.1 9.3 11.3 7.1 12 2.5Z" />
        <path d="M5.2 16.5c.3 2.1 1.3 3.1 3.3 3.4-2 .3-3 1.3-3.3 3.3-.3-2-1.3-3-3.4-3.3 2.1-.3 3.1-1.3 3.4-3.4Z" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
        <path d="m3.5 6 8.5 6 8.5-6" />
      </svg>
    )
  }

  if (name === 'copy') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    )
  }

  if (name === 'share') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
      </svg>
    )
  }

  if (name === 'check') {
    return (
      <svg
        {...commonProps}
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12.5 4.2 4L19 7" />
      </svg>
    )
  }

  return (
    <svg
      {...commonProps}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  )
}
