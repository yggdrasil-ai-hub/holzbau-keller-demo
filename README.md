# Demo-Website: Holzbau Keller AG

Statische Multi-Page-Demo (5 Seiten) für die Live-Präsentation des KellerBot-Produkts. Alle Inhalte sind frei erfunden — siehe Disclosure-Banner/Footer auf jeder Seite.

## Struktur
- `index.html` — Startseite
- `leistungen.html` — 7 Leistungen, Projektablauf, Materialien, Preise & Richtwerte
- `referenzen.html` — fiktive Projektbeispiele (Berner Oberland)
- `ueber-uns.html` — Firmengeschichte, Team, Werte
- `kontakt.html` — Kontaktformular (rein optisch, kein Versand)
- `assets/css/style.css` — Design-System (Farben, Typografie, Komponenten)
- `assets/js/main.js` — Nav, Scroll-Reveal, Magnetic-Buttons, Formular-Demo
- `assets/js/chat-config.js` — Konfiguration für den Live-Chat
- `assets/js/chat-init.js` — bindet den echten n8n-Chat (KellerBot) ein

## Inhaltsabgleich mit Knowledge Base (erledigt)
Alle 5 Seiten wurden mit dem echten KB-Inhalt abgeglichen, den der KellerBot nutzt: Standort Thun/Berner Oberland, Gründung 1987 (Hans Keller), heute Markus Keller als Geschäftsführer, 12 Mitarbeitende/8 Zimmerleute, die 7 echten Leistungen (Dachstuhl, Anbauten, Fassade, Balkone, Carport, Innenausbau, Sanierungen), die 6 KB-Preisrichtwerte, Materialien (Fichte, Tanne, Lärche, Thermoholz, Douglasie, BSP, FSC/PEFC), Projektablauf in 6 Schritten, sowie Kontaktdaten (Industriestrasse 8, 3600 Thun / +41 33 221 44 55 / info@holzbau-keller.ch). Damit widersprechen sich Bot-Antworten und Website-Inhalte nicht mehr.

## Offener Punkt — vor dem ersten Live-Einsatz
In `assets/js/chat-config.js` muss `WEBHOOK_BASE_URL` mit der öffentlichen n8n-Domain gefüllt werden (z. B. `https://n8n.deine-domain.ch`). Die Webhook-ID ist bereits eingetragen. Solange das Feld leer ist, zeigt die Seite statt eines Fehlers einen freundlichen "aktuell nicht verfügbar"-Button.

Zusätzlich ggf. CORS für die spätere GitHub-Pages-Domain im n8n Chat-Trigger-Node freigeben.

## Deployment (GitHub Pages über GitHub Desktop)
1. Diesen Ordner als neues Repository in GitHub Desktop hinzufügen ("Add Existing Repository").
2. Commit & Push.
3. Im Repository auf GitHub: Settings → Pages → Branch "main" → Save.
4. Link der Form `https://<username>.github.io/<repo-name>/` ist nach 1–2 Minuten live.

## Bildmaterial
`assets/img/` enthält 15 echte Fotos (Lizenz-Stock + 1 KI-generiertes Teamfoto), eingebaut in allen 5 Seiten und mit sprechenden Dateinamen versehen:

- `hero-start.jpg` — Hero, Startseite
- `leistung-dachstuhl.jpg` — Leistungen #01 + Referenzen (Dachstuhl-Neubau, Sturmschaden-Reparatur)
- `leistung-anbau.jpg` — Leistungen #02 + Referenzen (Wohnraumanbau)
- `leistung-fassade.jpg` — Leistungen #03 + Referenzen (Fassadensanierung)
- `leistung-terrasse.jpg` — Leistungen #04 (Balkone & Terrassen)
- `leistung-carport.jpg` — Leistungen #05 + Referenzen (Carport-Neubau)
- `leistung-innenausbau.jpg` — Leistungen #06
- `leistung-sanierung.jpg` — Leistungen #07 (Sanierungen) — Stilhinweis: Foto zeigt eine asiatisch anmutende Holzbalkon-Architektur, kein Schweizer Charakter. Auf Wunsch austauschen.
- `referenz-gartenhaus.jpg` — Referenzen, Gartenhaus-Karte (ersetzt den SVG-Platzhalter)
- `team-hero.png` — Hero, Über uns (vormals `ChatGPT Image 19. Juni 2026, 22_07_21.png` — Leerzeichen/Kommas im Namen sind damit behoben, Deployment-Risiko erledigt)
- `team-markus-keller.jpg` / `team-sandra-meier.jpg` / `team-daniel-frei.jpg` / `team-lukas-buehler.jpg` — Team-Porträts, Über uns
- `standort-kontakt.jpg` — Gebäudefoto, Kontakt

**Hinweis zur Umbenennung:** Die Originaldateien (z. B. `albert-stoynov-...-unsplash.jpg`) wurden per Google-Drive-Kopie unter den neuen Namen dupliziert — die Website nutzt jetzt ausschliesslich die neuen Namen. Die alten Originaldateien liegen weiterhin im Ordner und können bei Gelegenheit manuell gelöscht werden (kein Tool-Zugriff zum Löschen in Drive verfügbar).

## QA-Status
Struktur-Check durchgeführt: alle internen Links zwischen den 5 Seiten konsistent, alle Asset-Pfade korrekt, HTML-Grundstruktur (header/main/footer) auf jeder Seite vollständig. Visueller Cross-Browser-/Mobile-Check (siehe `responsive-qa-check` Skill) steht noch aus, sobald die Seite live oder lokal im Browser geöffnet wird.
