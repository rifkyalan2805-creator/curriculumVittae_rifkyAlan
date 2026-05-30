# 🚀 Rifky Alan Maulana — Portfolio

Portfolio website personal built with React, Framer Motion, dan Tailwind-style CSS variables.

## ✨ Features

- Dark mode modern design
- Smooth animations dengan Framer Motion
- Typing animation di Hero section
- Particle field background
- Project filter by category
- Animated skill progress bars
- Vertical experience timeline
- Contact form dengan EmailJS integration
- Fully responsive (mobile-friendly)
- Particle canvas animation
- Deploy-ready ke GitHub Pages

## 📁 Struktur Project

```
src/
├── components/
│   ├── Navbar.jsx        # Navbar sticky dengan mobile menu
│   └── Footer.jsx        # Footer dengan nav links & socials
├── sections/
│   ├── Hero.jsx          # Landing dengan typing animation + particle
│   ├── About.jsx         # Bio + stats + value cards
│   ├── Skills.jsx        # Tech stack dengan animated progress bars
│   ├── Projects.jsx      # Project cards + filter tabs
│   ├── Experience.jsx    # Timeline pengalaman & pendidikan
│   └── Contact.jsx       # Form kontak + info kontak
├── App.jsx
├── index.js
└── index.css             # Global design tokens & styles
```

## 🛠️ Setup & Instalasi

### 1. Clone / Download project

```bash
git clone https://github.com/rifkyalanmaulana/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan di local

```bash
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## ✏️ Kustomisasi

### Ganti data pribadi
Edit file-file berikut sesuai informasi kamu:

| File | Yang perlu diubah |
|---|---|
| `src/sections/Hero.jsx` | Nama, tagline, link sosial, link CV |
| `src/sections/About.jsx` | Bio, stats, foto |
| `src/sections/Skills.jsx` | Tech stack dan level |
| `src/sections/Projects.jsx` | List project + link GitHub/live |
| `src/sections/Experience.jsx` | Riwayat kerja & pendidikan |
| `src/sections/Contact.jsx` | Email, lokasi, link sosial |
| `src/components/Navbar.jsx` | Email di tombol "Hire me" |
| `src/components/Footer.jsx` | Link sosial |

### Ganti foto profil
Taruh foto kamu di `public/photo.jpg` lalu update `About.jsx`:
```jsx
// Ganti bagian placeholder dengan:
<img src="/photo.jpg" alt="Rifky Alan Maulana" style={{ width: '100%', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} />
```

### Setup EmailJS (agar form contact berfungsi)
1. Daftar gratis di [emailjs.com](https://emailjs.com)
2. Buat Email Service (Gmail/Outlook)
3. Buat Email Template
4. Uncomment kode EmailJS di `src/sections/Contact.jsx`
5. Isi `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`

## 🚀 Deploy ke GitHub Pages

### 1. Update homepage di package.json
```json
"homepage": "https://USERNAME.github.io/REPO_NAME"
```
Ganti `USERNAME` dengan username GitHub kamu dan `REPO_NAME` dengan nama repository.

### 2. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 3. Push ke GitHub
```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 4. Deploy!
```bash
npm run deploy
```

Portofolio kamu akan live di: `https://USERNAME.github.io/REPO_NAME`

> **Tips:** Setiap kali ada perubahan, cukup jalankan `npm run deploy` lagi.

## 📦 Dependencies

| Package | Kegunaan |
|---|---|
| `react` + `react-dom` | Core framework |
| `framer-motion` | Animasi smooth |
| `react-icons` | Icon library (Fi, Si) |
| `react-scroll` | Smooth scroll ke section |
| `react-type-animation` | Typing effect di Hero |
| `emailjs-com` | Kirim email dari form contact |
| `gh-pages` | Deploy ke GitHub Pages |

## 🎨 Warna & Tema

Edit CSS variables di `src/index.css` untuk mengubah tema:

```css
:root {
  --accent:        #7c6fcd;  /* Warna utama (purple) */
  --accent-bright: #9d8ff5;  /* Aksen terang */
  --teal:          #2dd4bf;  /* Warna sekunder */
  /* ... */
}
```

## 📄 License

MIT — bebas dipakai dan dimodifikasi.
