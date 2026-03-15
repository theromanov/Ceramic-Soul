# Ceramic Soul 🏺

Ceramic Soul is a modern multi-page website for a handmade pottery studio.
The project showcases ceramic products, pottery workshops, and blog content about traditional ceramic craftsmanship.

The website is built with **HTML, SCSS, and JavaScript**, bundled with **Vite** for fast development and optimized production builds.

---

## ✨ Features

- Multi-page website
- Responsive layout
- Product catalog with categories
- Blog section
- Contact forms with validation
- Image slider (Swiper)
- Image optimization during build
- Modern SCSS architecture
- Clean and modular project structure

---

## 🛠 Tech Stack

Frontend:

- HTML5
- CSS, SCSS (Sass)
- JavaScript

Build Tools:

- Vite
- SASS Compiler
- PostCSS
- vite-plugin-imagemin

Libraries:

- Pure
- Swiper
- JustValidate

---

## 🧩 CSS Architecture

The project uses the **BEM (Block Element Modifier)** methodology for structuring CSS classes.
This approach helps keep styles modular, readable, and easy to maintain.

Example:

```html
<div class="catalog__card">
  <div class="catalog__card-img">
    <img src="image.jpg" alt="ceramic" />
  </div>

  <div class="catalog__card-bottom">
    <h2 class="catalog__card-name">Terracotta Whisper</h2>
    <div class="catalog__card-price">19.99 €</div>
  </div>
</div>
```

---

## 📂 Project Structure

```
ceramic_soul/
│
├── dist/                # Production build
├── node_modules/
│
├── src/
│   ├── fonts/
│   ├── icons/
│   ├── img/
│   ├── js/
│   │   └── script.js
│   │
│   ├── logo/
│   │
│   ├── scss/
│   │   ├── base/
│   │   │   ├── basic.scss
│   │   │   ├── mixins.scss
│   │   │   └── variables.scss
│   │   │
│   │   ├── blocks/
│   │   │   ├── header.scss
│   │   │   ├── footer.scss
│   │   │   ├── catalog.scss
│   │   │   ├── blog.scss
│   │   │   ├── about.scss
│   │   │   └── ...
│   │   │
│   │   ├── ui/
│   │   │   ├── buttons.scss
│   │   │   └── titles.scss
│   │   │
│   │   └── style.scss
│   │
│   └── libs/
│       ├── grids-min.css
│       └── modern-normalize.min.css
│
├── index.html
├── catalog.html
├── blog.html
├── about.html
│
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 📄 Pages

- **Home** – introduction to the studio and featured works
- **Catalog** – ceramic products categorized by purpose
- **Blog** – articles about pottery and materials
- **About** – studio story and location

---

## 🚀 Getting Started

### 1 Install dependencies

```bash
npm install
```

### 2 Run development server

```bash
npx vite
```

### 3 Build for production

```bash
npx vite build
```

---

## 📦 Image Optimization

The project uses **vite-plugin-imagemin** to automatically optimize images during the build process.

Supported formats:

- JPEG
- PNG
- GIF
- SVG

---

## 📱 Responsive Design

The layout adapts to different screen sizes using:

- Flexible grid system
- SCSS media queries
- Responsive images
