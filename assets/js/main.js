/* ========================================
   openSpeakVoice — Main JS
   ======================================== */

// ── Navbar scroll effect ──
const navbar = document.querySelector(".navbar");
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
      ticking = false;
    });
    ticking = true;
  }
});

// ── Scroll reveal ──
window.observeCards = function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.style.getPropertyValue("--delay") || "0ms";
          setTimeout(() => el.classList.add("visible"), parseInt(delay));
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
};

// Initial reveal on page load
document.addEventListener("DOMContentLoaded", () => {
  observeCards();
  setTimeout(observeCards, 300);
});

// ── Widget demo interactive ──
const WIDGET_STATES = ["idle", "listening", "processing", "done"];

function initWidgetDemo() {
  const widget = document.getElementById("widget-demo");
  const label = document.getElementById("widget-label");
  if (!widget) return;

  let state = "idle";
  let autoTimer = null;

  function setState(s) {
    state = s;
    WIDGET_STATES.forEach((c) => widget.classList.remove(c));
    widget.classList.add(state);

    const t = window.i18n.t;
    const labels = {
      idle: t("hero.widgetIdle"),
      listening: t("hero.widgetListening"),
      processing: t("hero.widgetProcessing"),
      done: t("hero.widgetIdle"), // back to Inactive after done
    };
    label.textContent = labels[state] || labels.idle;
  }

  function runAutoDemo() {
    clearTimeout(autoTimer);
    setState("idle");
    autoTimer = setTimeout(() => {
      setState("listening");
      autoTimer = setTimeout(() => {
        setState("processing");
        autoTimer = setTimeout(() => {
          setState("idle");
          autoTimer = setTimeout(runAutoDemo, 2400);
        }, 1400);
      }, 2800);
    }, 1600);
  }

  // Click / touch to interact
  widget.addEventListener("click", () => {
    clearTimeout(autoTimer);
    if (state === "idle") {
      setState("listening");
      autoTimer = setTimeout(() => {
        setState("processing");
        autoTimer = setTimeout(() => {
          setState("idle");
          setTimeout(runAutoDemo, 800);
        }, 1400);
      }, 2800);
    } else if (state === "listening") {
      setState("processing");
      autoTimer = setTimeout(() => {
        setState("idle");
        setTimeout(runAutoDemo, 800);
      }, 1400);
    }
  });

  runAutoDemo();

  // Re-run labels when language changes
  window.addEventListener("langchange", () => setState(state));
}

// ── Simulation demo ──
function initSimDemo() {
  const mouse = document.getElementById("sim-mouse");
  const simInput = document.getElementById("sim-input");
  const placeholder = document.getElementById("sim-placeholder");
  const cursor = document.getElementById("sim-cursor");
  const simText = document.getElementById("sim-text");
  if (!mouse || !simInput) return;

  let simRunning = false;
  let simTimeout = null;

  function getSimResult() {
    return window.i18n.t("hero.simResult") || "Hola, esto es una transcripción automática con openSpeakVoice.";
  }

  function resetSim() {
    placeholder.style.opacity = "1";
    cursor.style.display = "none";
    simText.textContent = "";
    simInput.classList.remove("focused");
    mouse.style.opacity = "0";
    mouse.style.transition = "none";
    mouse.style.top = "50%";
    mouse.style.left = "50%";
    mouse.style.transform = "translate(-50%, -50%)";
  }

  function runSim() {
    if (simRunning) return;
    simRunning = true;
    resetSim();

    // 1. Show mouse above the input area, inside the wrapper
    mouse.style.transition = "none";
    mouse.style.top = "50%";
    mouse.style.left = "30%";
    mouse.style.transform = "translate(-50%, -50%)";
    mouse.style.opacity = "1";

    // 2. Animate mouse moving to click position
    simTimeout = setTimeout(() => {
      mouse.style.transition = "top .5s ease, left .5s ease";
      mouse.style.top = "50%";
      mouse.style.left = "45%";

      simTimeout = setTimeout(() => {
        // 3. Click effect - fade mouse, focus input
        mouse.style.opacity = "0";
        simInput.classList.add("focused");
        placeholder.style.opacity = "0";
        cursor.style.display = "inline-block";

        // 4. Trigger widget listening state
        const WSTATES = ["idle","listening","processing","done"];
        const wdg = document.getElementById("widget-demo");
        const wlabel = document.getElementById("widget-label");

        function setWidgetState(s) {
          WSTATES.forEach(c => wdg && wdg.classList.remove(c));
          wdg && wdg.classList.add(s);
          const t = window.i18n.t;
          const map = {
            idle: t("hero.widgetIdle"),
            listening: t("hero.widgetListening"),
            processing: t("hero.widgetProcessing"),
            done: t("hero.widgetIdle"),
          };
          if (wlabel) wlabel.textContent = map[s] || map.idle;
        }

        simTimeout = setTimeout(() => {
          setWidgetState("listening");

          simTimeout = setTimeout(() => {
            setWidgetState("processing");
            cursor.style.display = "none";

            simTimeout = setTimeout(() => {
              setWidgetState("idle");
              // Type out result
              const result = getSimResult();
              let i = 0;
              function typeChar() {
                if (i < result.length) {
                  simText.textContent += result[i];
                  i++;
                  simTimeout = setTimeout(typeChar, 22 + Math.random() * 18);
                } else {
                  simTimeout = setTimeout(() => {
                    simRunning = false;
                    resetSim();
                    simTimeout = setTimeout(runSim, 3000);
                  }, 3000);
                }
              }
              typeChar();
            }, 1400);
          }, 2200);
        }, 500);
      }, 600);
    }, 800);
  }

  // Auto-start when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !simRunning) {
        simTimeout = setTimeout(runSim, 800);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  const simEl = document.querySelector(".sim-demo");
  if (simEl) observer.observe(simEl);

  simInput.addEventListener("click", () => {
    if (!simRunning) {
      clearTimeout(simTimeout);
      runSim();
    }
  });

  window.addEventListener("langchange", () => {
    if (!simRunning) resetSim();
  });
}

// ── Language switcher ──
function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.i18n.setLanguage(btn.dataset.lang);
      window.dispatchEvent(new Event("langchange"));
      setTimeout(observeCards, 100);
    });
  });
}

// ── Mobile menu ──
function initMobileMenu() {
  const hamburger = document.querySelector(".nav-hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger || !navLinks) return;

  let open = false;
  hamburger.addEventListener("click", () => {
    open = !open;
    navLinks.style.display = open ? "flex" : "";
    navLinks.style.flexDirection = open ? "column" : "";
    navLinks.style.position = open ? "fixed" : "";
    navLinks.style.top = open ? "64px" : "";
    navLinks.style.left = open ? "0" : "";
    navLinks.style.right = open ? "0" : "";
    navLinks.style.background = open ? "rgba(255,255,255,.97)" : "";
    navLinks.style.padding = open ? "16px" : "";
    navLinks.style.backdropFilter = open ? "blur(16px)" : "";
    navLinks.style.zIndex = open ? "200" : "";
    navLinks.style.borderBottom = open ? "1px solid var(--border)" : "";
  });

  // Close on link click
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      open = false;
      navLinks.removeAttribute("style");
    });
  });
}

// ── Smooth scroll for nav links ──
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ── Init everything ──
document.addEventListener("DOMContentLoaded", () => {
  // Language detection & init
  window.currentLang = window.i18n.detectLanguage();
  window.i18n.setLanguage(window.currentLang);

  initWidgetDemo();
  initSimDemo();
  initLangSwitcher();
  initMobileMenu();
  initSmoothScroll();
});
