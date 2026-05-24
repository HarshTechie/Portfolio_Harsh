# Portfolio — Harsh Tak

A premium, minimal portfolio built in the spirit of Linear, Vercel, and Raycast — fluid type, neutral surfaces, dark/light theme with system preference, and quiet, intentional motion.

Built with **React + Vite + Tailwind CSS**. No runtime UI library, no animation library at runtime — just IntersectionObserver-driven reveals, native CSS transitions, and a single rAF-lerped mouse parallax on the hero photo.

---

## ✨ Highlights

- **Fluid typography** with `clamp()` so headings breathe from mobile to ultrawide
- **Light + Dark themes** via CSS variables, persisted to `localStorage`, follows system preference on first visit
- **Pre-paint theme script** in `index.html` to prevent FOUC
- **Command palette** (`⌘K` / `Ctrl K`) — navigate, switch theme, open resume / socials
- **Sticky navbar** with sliding active-section indicator, blur-on-scroll, full-screen mobile drawer
- **Hero**: 3-line headline, static role chip, soft photo float + subtle mouse parallax (honors `prefers-reduced-motion` and touch)
- **About**: clean paragraph + info card + minimal timeline with a live indicator on the latest milestone
- **Skills**: pill tab filter + brand-colored tech icons (react-icons/si) with a soft cursor-following glow
- **Projects**: pre-cached homepage screenshots, neutral hover vignette, Vercel-style caption strip, metadata row, Featured tag
- **Currently Exploring** strip — a small personality touch between sections
- **Contact**: minimal CTA card with email, resume, GitHub, LinkedIn, LeetCode

Bundle size: **~77 kB gzip** for the entire app.

---

## 🛠 Tech Stack

| Layer       | Tools                                         |
| ----------- | --------------------------------------------- |
| Framework   | React 18, Vite 5                              |
| Styling     | Tailwind CSS 3 (class-based dark mode)        |
| Icons       | react-icons (`fi`, `si`, `vsc`)               |
| Motion      | CSS transitions, IntersectionObserver, rAF    |
| Fonts       | Inter, Space Grotesk, JetBrains Mono (Google) |
| Hosting     | Vercel-ready (works on any static host)       |

---

## 🚀 Getting Started

```bash
# install
npm install

# dev (Vite dev server)
npm run dev

# production build → /dist
npm run build

# preview the production build locally
npm run preview
```

Node 18+ recommended.

---

## 📁 Project Structure

```
.
├── index.html                  # Pre-paint theme script + fonts
├── public/
│   ├── profile.jpg             # Hero photo
│   └── projects/               # Project preview screenshots
├── src/
│   ├── App.jsx                 # Shell — theme provider, navbar, sections
│   ├── main.jsx                # React entry
│   ├── index.css               # Tokens, theme vars, utilities
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav + drawer + active indicator
│   │   ├── ThemeProvider.jsx   # Light/dark with localStorage
│   │   ├── ThemeToggle.jsx     # Animated sun/moon
│   │   ├── CommandPalette.jsx  # ⌘K — nav, theme, external links
│   │   ├── Reveal.jsx          # IO-driven fade + rise utility
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx           # Also exports <SectionHeader />
│   │   ├── Skills.jsx
│   │   ├── CurrentlyExploring.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   └── data/
│       ├── profile.js          # ← All personal data lives here
│       └── techIcons.jsx       # Tech name → brand icon + color map
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ✏️ Customising

Almost everything that displays on the page is driven from a single file:

**[`src/data/profile.js`](src/data/profile.js)** — name, email, location, hero copy, role rotator, timeline, skills, projects, social links, "currently exploring" strip.

To add a new project:

```js
{
  title: 'My New Project',
  role: 'Full Stack',
  year: '2026',
  meta: 'Short tagline',
  summary: 'One or two sentences.',
  stack: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/.../...',
  live: 'https://...',
  image: '/projects/my-new-project.png', // drop a 1280×800 PNG here
  featured: true,
}
```

Drop the screenshot at `public/projects/<slug>.png` and the card will use it.

To swap the profile photo: replace `public/profile.jpg`. Recommended 1000×1200+, portrait orientation, head + shoulders.

### Theme tokens

Light/dark color tokens live in [`src/index.css`](src/index.css):

```css
:root  { --bg: 255 255 255; --text: 10 10 10;  --accent: 37 99 235; ... }
.dark  { --bg: 8 8 10;      --text: 250 250 250; --accent: 96 165 250; ... }
```

Tailwind reads them via `colors: { bg: 'rgb(var(--bg) / <alpha-value>)' }` in [`tailwind.config.js`](tailwind.config.js).

### Accent color

Change `--accent` in both `:root` and `.dark` blocks. That's it — everything else updates.

---

## ⌨️ Keyboard Shortcuts

| Key            | Action                          |
| -------------- | ------------------------------- |
| `⌘K` / `Ctrl K`| Open command palette            |
| `↑` `↓`        | Navigate palette items          |
| `↵`            | Activate selected command       |
| `Esc`          | Close palette / mobile drawer   |

---

## ♿ Accessibility

- Respects `prefers-reduced-motion` — disables transitions, animations, parallax, and float
- Respects `prefers-color-scheme` on first visit
- `:focus-visible` outlines on all interactive elements
- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<ol>`, `<dl>`)
- All external links use `rel="noopener"` and open in a new tab with descriptive `aria-label`

---

## 📦 Deploy

Anywhere that serves static files works. Vercel one-liner:

```bash
npx vercel
```

For Netlify / Cloudflare Pages / GitHub Pages: build with `npm run build` and deploy the `dist/` directory.

---

## 📄 License

Personal portfolio code. Feel free to draw inspiration; please don't copy verbatim with my name still in it.
