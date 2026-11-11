# Upupa · upupa.life

> **Two Dimensions, One Journey: Horizon & Diary**

Il portale e spazio digitale di Sebastiano Licciardello (`upupa.life`).

---

## 🌟 Le Due Dimensioni

### 🧭 Horizon (`/horizon/`)
Lo spazio dedicato allo sguardo in avanti: rotte future, progetti creativi, esplorazioni e visione di vita.

### 📖 Upupa Diary (`/diary/`)
Il diario riflessivo e intimo (derivato da *The Nomad Upupa*): racconti, luoghi, musica (YouTube Music player) e memorie raccolte con calma e condivise solo quando hanno trovato la loro forma compiuta.

---

## 🛠️ Stack Tecnologico
- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Contenuti**: Collezioni Markdown/MDX con supporto bilingue (IT/EN)
- **Audio**: Embed automatico YouTube Music Player sincronizzato
- **Deployment**: GitHub Actions su GitHub Pages per il dominio personalizzato `upupa.life`

---

## 🚀 Comandi Utili

Tutti i comandi vanno eseguiti all'interno della cartella `upupa`:

```bash
# Installazione dipendenze
npm install

# Avvio server di sviluppo locale (http://localhost:4321)
npm run dev

# Build di produzione per GitHub Pages (output in dist/)
npm run build

# Preview del build di produzione
npm run preview
```

---

## 🌐 Deploy su GitHub Pages
Il progetto include il workflow `.github/workflows/deploy.yml` che effettua automaticamente il build e deploy su GitHub Pages su ogni push sul branch `main` (o `master`).
Il dominio personalizzato `upupa.life` è configurato in `public/CNAME` e `astro.config.mjs`.
