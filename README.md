# KKL Documentation

Website dokumentasi Kuliah Kerja Lapangan (KKL) dibangun menggunakan **React + Vite + JavaScript**.

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## Struktur Project

```
kkl-documentation/
├── public/
│   ├── images/
│   │   ├── hero/         ← Foto hero/banner
│   │   ├── gallery/      ← Foto galeri kegiatan
│   │   ├── locations/    ← Foto lokasi KKL
│   │   └── members/      ← Foto anggota
│   └── videos/           ← File video kegiatan
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── Timeline.jsx
│   │   ├── Video.jsx
│   │   ├── Members.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── gallery.js    ← Data foto galeri
│   │   ├── members.js    ← Data anggota
│   │   └── timeline.js   ← Data timeline kegiatan
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## Tech Stack

- **React 19** — UI Library
- **Vite** — Build tool & dev server
- **JavaScript** — Tanpa TypeScript
