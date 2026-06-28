# openSpeakVoice — Landing Page

Landing page profesional para **openSpeakVoice**, el widget de voz a texto para Windows.

## 🚀 Stack

- **HTML5** semántico y accesible
- **CSS3** con variables, Grid, animaciones suaves
- **JavaScript vanilla** — zero dependencias, carga ultra rápida
- **i18n propio** — detección automática y cambio de idioma (ES / EN / PT)
- **Vercel** — despliegue instantáneo con headers de caché optimizados

## 📁 Estructura

```
openSpeakVoice-landing/
├── index.html              # Página principal
├── vercel.json             # Config de Vercel (caché, headers, seguridad)
├── robots.txt              # SEO
├── README.md
└── assets/
    ├── css/
    │   └── styles.css      # Todos los estilos
    └── js/
        ├── i18n.js         # Traducciones + detección de idioma
        └── main.js         # Animaciones, widget demo, interacciones
```

## 🌍 Idiomas

El sitio detecta automáticamente el idioma del navegador del usuario:
- **Español** (default)
- **English**
- **Português**

El usuario también puede cambiar manualmente con los botones ES / EN / PT en la navbar.

## 🎨 Diseño

- Fondo blanco limpio con acentos azul (`#4F6EF7`) y verde (`#22C55E`)
- Tipografía **Inter** para legibilidad óptima
- Widget animado interactivo en el hero
- Animaciones de scroll suave con `IntersectionObserver`
- Totalmente responsive (mobile, tablet, desktop)
- Respeta `prefers-reduced-motion`

## ⚡ Deploy en Vercel

### Opción 1 — Desde GitHub (recomendado)

1. Sube este repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Importa el repositorio
4. Framework: **Other** (no framework)
5. Build command: *(dejar vacío)*
6. Output directory: *(dejar vacío o `.`)*
7. Click **Deploy**

### Opción 2 — Vercel CLI

```bash
npm i -g vercel
cd openSpeakVoice-landing
vercel
```

## 📦 Performance

- Sin frameworks ni bundlers → **0ms build time**
- Fuentes Google con `preconnect` → carga rápida
- Assets con caché de 1 año en Vercel
- HTML con caché `must-revalidate` para actualizaciones inmediatas
- Animaciones con `transform` + `opacity` → 60fps sin jank

## 🔗 Links

- **Producto**: [openSpeakVoice en GitHub](https://github.com/sergio-dev1-py/openSpeakVoice)
- **Descarga**: [v1.2.0](https://github.com/sergio-dev1-py/openSpeakVoice/releases/download/v1.2.0/VoiceToText-v1.2.0.zip)
