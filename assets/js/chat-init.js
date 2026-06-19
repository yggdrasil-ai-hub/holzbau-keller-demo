/* ============================================================
   Holzbau Keller AG — Demo Website — Chat-Widget Initialisierung
   Nutzt das offizielle n8n Chat-Widget (@n8n/chat), gebunden an
   den Chat-Trigger-Webhook aus dem KellerBot-Workflow.
   Theming erfolgt über CSS-Variablen in assets/css/style.css.
   ============================================================ */
(function () {
  "use strict";
  var cfg = window.YGG_CHAT_CONFIG || {};

  function showFallbackBubble() {
    var fab = document.createElement("button");
    fab.className = "chat-fallback-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", cfg.TITLE || "Kundenservice");
    fab.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
    Object.assign(fab.style, {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "#7C5430",
      color: "#fff",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 26px -8px rgba(36,31,26,0.4)",
      cursor: "pointer",
      zIndex: "999",
    });

    var tooltip = document.createElement("div");
    tooltip.textContent = "Kundenservice aktuell nicht verfügbar — bitte Kontaktformular nutzen.";
    Object.assign(tooltip.style, {
      position: "fixed",
      bottom: "92px",
      right: "24px",
      maxWidth: "240px",
      background: "#241F1A",
      color: "#fff",
      fontSize: "0.82rem",
      padding: "10px 14px",
      borderRadius: "10px",
      boxShadow: "0 10px 26px -8px rgba(36,31,26,0.4)",
      opacity: "0",
      transform: "translateY(6px)",
      transition: "opacity .3s, transform .3s",
      zIndex: "999",
      pointerEvents: "none",
    });

    fab.addEventListener("click", function () {
      tooltip.style.opacity = tooltip.style.opacity === "1" ? "0" : "1";
      tooltip.style.transform = tooltip.style.opacity === "1" ? "translateY(0)" : "translateY(6px)";
    });

    document.body.appendChild(fab);
    document.body.appendChild(tooltip);
  }

  function initRealChat() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    var script = document.createElement("script");
    script.type = "module";
    script.textContent =
      "import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';\n" +
      "createChat({\n" +
      "  webhookUrl: '" + cfg.WEBHOOK_BASE_URL + "/webhook/" + cfg.WEBHOOK_ID + "/chat',\n" +
      "  mode: 'window',\n" +
      "  showWelcomeScreen: false,\n" +
      "  initialMessages: ['" + (cfg.WELCOME || "Guten Tag! Wie kann ich Ihnen helfen?") + "'],\n" +
      "  i18n: { en: { title: '" + (cfg.TITLE || "Kundenservice") + "', subtitle: '" + (cfg.SUBTITLE || "") + "', inputPlaceholder: '" + (cfg.PLACEHOLDER || "Ihre Nachricht…") + "', footer: '', getStarted: 'Chat starten', closeButtonTooltip: 'Schliessen' } },\n" +
      "  defaultLanguage: 'en'\n" +
      "});";
    document.body.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (cfg.WEBHOOK_BASE_URL && cfg.WEBHOOK_BASE_URL.trim().length > 0) {
      initRealChat();
    } else {
      showFallbackBubble();
    }
  });
})();
