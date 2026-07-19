const translations = {
  es: {
    nav: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      languages: "Idiomas",
      download: "Descargar",
    },
    hero: {
      badge: "Gratis y Open Source",
      title: "Tu voz,",
      titleAccent: "texto instantáneo.",
      subtitle:
        "Presiona F8, habla, y el texto aparece donde lo necesitas — con transcripción y traducción automática. Compatible con cualquier aplicación de Windows.",
      cta: "Descargar Gratis",
      ctaSub: "Windows 10/11 · ~100 MB · v1.4.0",
      github: "Ver en GitHub",
      translateBadge: "✦ También traduce automáticamente a cualquier idioma",
      widgetIdle: "Inactivo",
      widgetListening: "Escuchando...",
      widgetProcessing: "Procesando...",
      simLabel: "Míralo en acción",
      simPlaceholder: "Haz clic aquí y prueba...",
      simResult: "Hola, esto es una transcripción automática con openSpeakVoice. ¡Funciona en cualquier app!",
      widgetDone: "¡Texto pegado!",
    },
    stats: {
      languages: "Idiomas",
      languagesLabel: "soportados",
      speed: "Ultra",
      speedLabel: "rápido con Groq",
      offline: "100%",
      offlineLabel: "modo offline disponible",
      free: "Open",
      freeLabel: "Source & Gratis",
    },
    features: {
      sectionLabel: "Características",
      title: "Todo lo que necesitas para dictar sin esfuerzo",
      subtitle:
        "Diseñado para ser invisible mientras trabajas y poderoso cuando lo necesitas.",
      items: [
        {
          title: "Atajo Global F8",
          desc: "Activa la grabación desde cualquier aplicación con una sola tecla. Sin cambiar de ventana.",
        },
        {
          title: "Groq Whisper API",
          desc: "Transcripción en la nube ultra rápida con el modelo whisper-large-v3 de alta precisión.",
        },
        {
          title: "Modo Offline",
          desc: "Usa modelos Whisper locales (tiny → large-v3) sin internet. Tu privacidad, tu control.",
        },
        {
          title: "Modo Traducción",
          desc: "Habla en tu idioma y obtén el texto traducido automáticamente al idioma destino.",
        },
        {
          title: "Widget Flotante",
          desc: "Siempre visible sobre tus ventanas. Diseño compacto que no interrumpe tu flujo.",
        },
        {
          title: "Doble API Key",
          desc: "Rotación automática entre 2 claves Groq para hasta 40 peticiones por minuto.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "Cómo Funciona",
      title: "Tres pasos y ya estás dictando",
      steps: [
        {
          step: "1",
          title: "Abre el widget",
          desc: "Ejecuta VoiceToTextWidget.exe. Aparece un pequeño widget flotante siempre visible.",
        },
        {
          step: "2",
          title: "Presiona F8",
          desc: "Pulsa la tecla F8 o el botón del widget desde cualquier aplicación para empezar a grabar.",
        },
        {
          step: "3",
          title: "Texto al instante",
          desc: "Habla y el texto se transcribe y pega automáticamente donde tengas el cursor.",
        },
      ],
    },
    languages: {
      sectionLabel: "Idiomas",
      title: "Habla en 99+ idiomas",
      subtitle: "Transcripción y traducción en los más de 99 idiomas soportados por Whisper.",
      moreChip: "+87 idiomas más",
    },
    platforms: {
      sectionLabel: "Próximamente",
      title: "Linux y macOS vienen pronto",
      subtitle: "Estamos trabajando para llevar openSpeakVoice a todas las plataformas.",
      linux: "Linux",
      linuxDesc: "Soporte nativo para distribuciones principales",
      mac: "macOS",
      macDesc: "Compatible con Apple Silicon y Macs Intel",
      badge: "En desarrollo",
    },
    download: {
      sectionLabel: "Descarga",
      title: "Empieza a dictar hoy",
      subtitle: "Gratis, sin suscripciones, sin límites de uso básico.",
      cta: "Descargar v1.4.0",
      ctaSub: "Windows 10/11 · x64 / x86 / arm64",
      size: "~100 MB",
      sizeLabel: "Ejecutable autocontenido",
      noInstall: "Sin instalación de .NET",
      noInstallLabel: "Todo incluido",
      github: "Ver código en GitHub",
      requirements: "Requisitos: Windows 10 o superior",
    },
    footer: {
      tagline: "Convierte tu voz en texto, instantáneamente.",
      rights: "Todos los derechos reservados.",
      links: {
        github: "GitHub",
        issues: "Reportar Bug",
        releases: "Versiones",
      },
    },
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      languages: "Languages",
      download: "Download",
    },
    hero: {
      badge: "Free & Open Source",
      title: "Your voice,",
      titleAccent: "instant text.",
      subtitle:
        "Press F8, speak, and the text appears right where you need it — with automatic transcription and translation. Works with any Windows application.",
      cta: "Download Free",
      ctaSub: "Windows 10/11 · ~100 MB · v1.4.0",
      github: "View on GitHub",
      translateBadge: "✦ Also auto-translates to any language",
      widgetIdle: "Inactive",
      widgetListening: "Listening...",
      widgetProcessing: "Processing...",
      widgetDone: "Text pasted!",
      simLabel: "See it in action",
      simPlaceholder: "Click here and try...",
      simResult: "Hello, this is an automatic transcription with openSpeakVoice. Works in any app!",
    },
    stats: {
      languages: "Languages",
      languagesLabel: "supported",
      speed: "Ultra",
      speedLabel: "fast with Groq",
      offline: "100%",
      offlineLabel: "offline mode available",
      free: "Open",
      freeLabel: "Source & Free",
    },
    features: {
      sectionLabel: "Features",
      title: "Everything you need to dictate effortlessly",
      subtitle:
        "Designed to be invisible while you work and powerful when you need it.",
      items: [
        {
          title: "Global F8 Shortcut",
          desc: "Activate recording from any application with a single key. No window switching.",
        },
        {
          title: "Groq Whisper API",
          desc: "Ultra-fast cloud transcription using the high-accuracy whisper-large-v3 model.",
        },
        {
          title: "Offline Mode",
          desc: "Use local Whisper models (tiny → large-v3) without internet. Your privacy, your control.",
        },
        {
          title: "Translation Mode",
          desc: "Speak in your language and get the text automatically translated to the target language.",
        },
        {
          title: "Floating Widget",
          desc: "Always visible above your windows. Compact design that doesn't interrupt your flow.",
        },
        {
          title: "Dual API Key",
          desc: "Automatic rotation between 2 Groq keys for up to 40 requests per minute.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "How It Works",
      title: "Three steps and you're dictating",
      steps: [
        {
          step: "1",
          title: "Open the widget",
          desc: "Run VoiceToTextWidget.exe. A small floating widget appears, always on top.",
        },
        {
          step: "2",
          title: "Press F8",
          desc: "Press the F8 key or the widget button from any application to start recording.",
        },
        {
          step: "3",
          title: "Instant text",
          desc: "Speak and the text is transcribed and pasted automatically where your cursor is.",
        },
      ],
    },
    languages: {
      sectionLabel: "Languages",
      title: "Speak in 99+ languages",
      subtitle: "Transcription and translation in 99+ languages, powered by Whisper.",
      moreChip: "+87 more languages",
    },
    platforms: {
      sectionLabel: "Coming Soon",
      title: "Linux and macOS are on the way",
      subtitle: "We're working to bring openSpeakVoice to every platform.",
      linux: "Linux",
      linuxDesc: "Native support for major distributions",
      mac: "macOS",
      macDesc: "Compatible with Apple Silicon and Intel Macs",
      badge: "In development",
    },
    download: {
      sectionLabel: "Download",
      title: "Start dictating today",
      subtitle: "Free, no subscriptions, no basic usage limits.",
      cta: "Download v1.4.0",
      ctaSub: "Windows 10/11 · x64 / x86 / arm64",
      size: "~100 MB",
      sizeLabel: "Self-contained executable",
      noInstall: "No .NET required",
      noInstallLabel: "Everything included",
      github: "View code on GitHub",
      requirements: "Requirements: Windows 10 or higher",
    },
    footer: {
      tagline: "Turn your voice into text, instantly.",
      rights: "All rights reserved.",
      links: {
        github: "GitHub",
        issues: "Report Bug",
        releases: "Releases",
      },
    },
  },
  pt: {
    nav: {
      features: "Recursos",
      howItWorks: "Como Funciona",
      languages: "Idiomas",
      download: "Baixar",
    },
    hero: {
      badge: "Grátis e Open Source",
      title: "Sua voz,",
      titleAccent: "texto instantâneo.",
      subtitle:
        "Pressione F8, fale e o texto aparece exatamente onde você precisa — com transcrição e tradução automática. Compatível com qualquer aplicativo Windows.",
      cta: "Baixar Grátis",
      ctaSub: "Windows 10/11 · ~100 MB · v1.4.0",
      github: "Ver no GitHub",
      translateBadge: "✦ Também traduz automaticamente para qualquer idioma",
      widgetIdle: "Inativo",
      widgetListening: "Ouvindo...",
      widgetProcessing: "Processando...",
      simLabel: "Veja em ação",
      simPlaceholder: "Clique aqui e experimente...",
      simResult: "Olá, esta é uma transcrição automática com openSpeakVoice. Funciona em qualquer app!",
      widgetDone: "Texto colado!",
    },
    stats: {
      languages: "Idiomas",
      languagesLabel: "suportados",
      speed: "Ultra",
      speedLabel: "rápido com Groq",
      offline: "100%",
      offlineLabel: "modo offline disponível",
      free: "Open",
      freeLabel: "Source & Grátis",
    },
    features: {
      sectionLabel: "Recursos",
      title: "Tudo que você precisa para ditar sem esforço",
      subtitle:
        "Projetado para ser invisível enquanto você trabalha e poderoso quando precisa.",
      items: [
        {
          title: "Atalho Global F8",
          desc: "Ative a gravação de qualquer aplicativo com uma única tecla. Sem trocar de janela.",
        },
        {
          title: "Groq Whisper API",
          desc: "Transcrição em nuvem ultra rápida com o modelo whisper-large-v3 de alta precisão.",
        },
        {
          title: "Modo Offline",
          desc: "Use modelos Whisper locais (tiny → large-v3) sem internet. Sua privacidade, seu controle.",
        },
        {
          title: "Modo Tradução",
          desc: "Fale em seu idioma e obtenha o texto traduzido automaticamente para o idioma destino.",
        },
        {
          title: "Widget Flutuante",
          desc: "Sempre visível sobre suas janelas. Design compacto que não interrompe seu fluxo.",
        },
        {
          title: "Dupla Chave API",
          desc: "Rotação automática entre 2 chaves Groq para até 40 requisições por minuto.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "Como Funciona",
      title: "Três passos e você está ditando",
      steps: [
        {
          step: "1",
          title: "Abra o widget",
          desc: "Execute VoiceToTextWidget.exe. Um pequeno widget flutuante aparece sempre visível.",
        },
        {
          step: "2",
          title: "Pressione F8",
          desc: "Pressione a tecla F8 ou o botão do widget de qualquer aplicativo para iniciar a gravação.",
        },
        {
          step: "3",
          title: "Texto instantâneo",
          desc: "Fale e o texto é transcrito e colado automaticamente onde seu cursor estiver.",
        },
      ],
    },
    languages: {
      sectionLabel: "Idiomas",
      title: "Fale em 99+ idiomas",
      subtitle: "Transcrição e tradução em mais de 99 idiomas suportados pelo Whisper.",
      moreChip: "+87 idiomas a mais",
    },
    platforms: {
      sectionLabel: "Em breve",
      title: "Linux e macOS estão a caminho",
      subtitle: "Estamos trabalhando para levar o openSpeakVoice para todas as plataformas.",
      linux: "Linux",
      linuxDesc: "Suporte nativo para distribuições principais",
      mac: "macOS",
      macDesc: "Compatível com Apple Silicon e Macs Intel",
      badge: "Em desenvolvimento",
    },
    download: {
      sectionLabel: "Download",
      title: "Comece a ditar hoje",
      subtitle: "Grátis, sem assinaturas, sem limites de uso básico.",
      cta: "Baixar v1.4.0",
      ctaSub: "Windows 10/11 · x64 / x86 / arm64",
      size: "~100 MB",
      sizeLabel: "Executável autocontido",
      noInstall: "Sem .NET necessário",
      noInstallLabel: "Tudo incluído",
      github: "Ver código no GitHub",
      requirements: "Requisitos: Windows 10 ou superior",
    },
    footer: {
      tagline: "Transforme sua voz em texto, instantaneamente.",
      rights: "Todos os direitos reservados.",
      links: {
        github: "GitHub",
        issues: "Reportar Bug",
        releases: "Versões",
      },
    },
  },
};

function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage || "es";
  const code = lang.toLowerCase().split("-")[0];
  if (code === "pt") return "pt";
  if (code === "en") return "en";
  return "es";
}

function t(path) {
  const keys = path.split(".");
  let val = translations[window.currentLang] || translations["es"];
  for (const k of keys) val = val?.[k];
  return val ?? path;
}

function setLanguage(lang) {
  window.currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  renderTranslations();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function renderTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (typeof text === "string") {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const text = t(key);
    if (typeof text === "string") el.innerHTML = text;
  });
  renderDynamicSections();
}

function renderDynamicSections() {
  // Features
  const featuresGrid = document.getElementById("features-grid");
  if (featuresGrid) {
    const items = translations[window.currentLang].features.items;
    const icons = ["⌨️", "⚡", "🔒", "🌐", "🪟", "🔄"];
    const iconSvgs = [
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 2v4M8 2v4M2 11h20"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>`,
    ];
    featuresGrid.innerHTML = items
      .map(
        (item, i) => `
      <div class="feature-card" style="--delay:${i * 80}ms">
        <div class="feature-icon">${iconSvgs[i]}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>`
      )
      .join("");
    observeCards();
  }

  // Steps
  const stepsContainer = document.getElementById("steps-container");
  if (stepsContainer) {
    const steps = translations[window.currentLang].howItWorks.steps;
    const stepIcons = [
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    ];
    stepsContainer.innerHTML = steps
      .map(
        (s, i) => `
      <div class="step-card" style="--delay:${i * 120}ms">
        <div class="step-number">${s.step}</div>
        <div class="step-icon">${stepIcons[i]}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`
      )
      .join("");
    observeCards();
  }
}

window.i18n = { setLanguage, detectLanguage, t, translations };
