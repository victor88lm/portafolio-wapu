# Portafolio — Victor Flores · Desarrollador Web (Angular & WordPress)

Portafolio personal construido con **React + TypeScript + Tailwind CSS v4 + Motion (Framer Motion)** sobre **Vite**.

## Stack

| Capa | Tecnología |
| --- | --- |
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS v4 (tokens vía `@theme`) |
| Animaciones | Motion (`motion/react`) — sutiles, con soporte de `prefers-reduced-motion` |
| Tipografía | Inter Variable (texto) · Sora Variable (display), autoalojadas con Fontsource |
| Build | Vite 8 |

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # build de producción en /dist
npm run lint    # linter (oxlint)
```

## Estructura

```
src/
├── components/
│   ├── layout/      # ProgressBar, Header (menú overlay a pantalla completa), Footer-contacto
│   ├── sections/    # Hero (plano técnico), StackStrip, Trayectoria (timeline),
│   │                # Services (catálogo de módulos), Projects, Wapuclub
│   └── ui/          # Design System: Container, Section, SectionHeading, Button, Tag
├── data/            # ✏️ CONTENIDO EDITABLE: site, nav, projects, services, stack, trayectoria
├── hooks/           # useScrollSpy
├── lib/             # cn (clases), motion (variantes de animación compartidas)
└── styles/          # tokens.css (Design System) + base.css (estilos globales)
```

## Identidad visual

Hero oscuro a pantalla completa con **tipografía cinética** (la palabra clave rota:
e-commerce → plugins → themes → interfaces) sobre azul profundo con resplandores
animados; **nav flotante tipo píldora** de cristal que cambia de tema al salir del
hero (overlay de pantalla completa en móvil); **servicios como acordeón** de
tipografía gigante; trayectoria como historial vertical estilo git-log. Acentos
monoespaciados en todo el sitio (`~/victor88lm`, eyebrows con `//`, franja
`$ stack`). Paleta azul/blanco sobre tokens `brand-*` / `ink-*`.

No hay sección de contacto: el footer concentra el CTA ("¿Trabajamos juntos?"),
email, WhatsApp y tarjetas de redes sociales (configurables en `src/data/site.ts`).
Los proyectos e-commerce se muestran con atribución explícita a Ailynmss
(colaboración en desarrollo).

## Design System

Todos los colores, sombras, radios y tipografías viven en
[`src/styles/tokens.css`](src/styles/tokens.css) como tokens de Tailwind v4 (`@theme`).
Los componentes consumen los tokens vía utilidades (`bg-brand-600`, `text-ink-500`,
`shadow-(--shadow-card)`, etc.). **No usar valores hex sueltos en componentes.**

- `brand-*` — escala de azules de marca (50–950)
- `ink-*` — escala de texto sobre fondos claros
- `surface / ice-* / line` — superficies, fondos y bordes
- `--shadow-card`, `--shadow-btn`, `--radius-card`… — elevación y forma

## Editar contenido

Todo el contenido se edita en `src/data/` sin tocar componentes:

- **`site.ts`** — nombre, rol, email, ubicación, dominio y redes. ⚠️ Contiene
  `TODO`s: actualizar el nombre completo y el dominio real al publicar.
- **`projects.ts`** — tiendas mostradas en "Proyectos" (con atribución a Ailynmss).
- **`services.ts`** / **`stack.ts`** / **`nav.ts`** — servicios, tecnologías y navegación.

## SEO

- Meta title/description, Open Graph, Twitter Card y JSON-LD (`Person`, `WebSite`,
  `ProfilePage`) en [`index.html`](index.html).
- `robots.txt` en `public/`.
- ⚠️ El dominio `https://victor88lm.dev` es un **placeholder**: reemplazarlo en
  `index.html`, `public/robots.txt` y `src/data/site.ts` al publicar. Falta también
  generar una imagen OG de 1200×630 (hay un bloque comentado listo en `index.html`).

## Atribución de proyectos

Las tiendas mostradas en la sección Proyectos pertenecen a **Ailyn Montes (Ailynmss)**;
la participación fue como **colaborador técnico en el desarrollo**, igual que en el
ecosistema **WapuClub**. El sitio lo comunica explícitamente en la sección de
proyectos y en el footer.
