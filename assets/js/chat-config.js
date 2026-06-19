/* ============================================================
   Holzbau Keller AG — Demo Website — Chat-Widget Konfiguration
   ============================================================

   WICHTIG (Dennis): Diese eine Zeile muss noch ergänzt werden,
   bevor der Live-Chat (KellerBot) auf der Demo-Seite funktioniert.

   Trage hier die öffentliche Basis-URL deiner n8n-Instanz ein,
   z. B. "https://n8n.deine-domain.ch" oder die von n8n Cloud
   vergebene URL (z. B. "https://deinprojekt.app.n8n.cloud").

   Die Webhook-ID (67caeecb-3963-4eb9-b641-df4aef61ec51) stammt
   aus dem Workflow-Backup und ist bereits eingetragen.

   Solange WEBHOOK_BASE_URL leer ist, zeigt der Chat-Button auf
   der Website einen freundlichen "vorübergehend nicht verfügbar"
   Hinweis statt eines Fehlers (siehe assets/js/chat-init.js).
   ============================================================ */

window.YGG_CHAT_CONFIG = {
  WEBHOOK_BASE_URL: "https://n8n.yggdrasil-ai.ch",
  WEBHOOK_ID: "67caeecb-3963-4eb9-b641-df4aef61ec51",
  TITLE: "Kundenservice",
  SUBTITLE: "Antwortet meist innerhalb von Minuten",
  WELCOME: "Guten Tag! Wie kann ich Ihnen bei Ihrem Holzbau-Projekt helfen?",
  PLACEHOLDER: "Ihre Nachricht…",
};
