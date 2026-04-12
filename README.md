# Brett Photography Portfolio

A modern photographer's portfolio built with Vue 3, Vuetify, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Updating Photos

All site content is managed through **one file**: [`src/data/photos.json`](src/data/photos.json)

### To add a new gallery photo:

1. Drop your image file into `public/images/gallery/`
2. Open `src/data/photos.json`
3. Add an entry to the `"gallery"` array:

```json
{
  "id": 9,
  "src": "/images/gallery/my-new-photo.jpg",
  "alt": "Description of the photo",
  "category": "portraits",
  "featured": true
}
```

4. Commit and push — the site auto-deploys.

### To update hero/about images:

Replace the files referenced in `photos.json` under `hero.backgroundImage` and `about.profileImage`, or update the paths in the JSON.

### To add/edit categories:

Update the `"categories"` array in `photos.json`. Use the same `id` values in your gallery photo entries.

## Inquiry Form Setup

The contact form uses [Formspree](https://formspree.io/) (free tier supports 50 submissions/month).

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc`)
4. Paste it into `photos.json` under `inquiryForm.formspreeEndpoint`

## Deploying to GitHub Pages

The site auto-deploys via GitHub Actions on every push to `main`.

### First-time setup:

1. Go to your repo → Settings → Pages
2. Set Source to **GitHub Actions**
3. Update `base` in `vite.config.js` to match your repo name: `base: '/your-repo-name/'`
4. Push to `main`

## Tech Stack

- **Vue 3** — Composition API
- **Vuetify 3** — Material UI components
- **Tailwind CSS** — Utility-first styling
- **Vite** — Build tool
- **Formspree** — Form submissions (no backend needed)

## Project Structure

```
src/
├── components/
│   ├── AppHeader.vue      # Navigation bar
│   ├── HeroSection.vue    # Full-screen hero
│   ├── GallerySection.vue # Filterable photo grid + lightbox
│   ├── AboutSection.vue   # About the photographer
│   ├── InquiryForm.vue    # Contact form
│   └── AppFooter.vue      # Footer
├── data/
│   └── photos.json        # ← Edit this to update all content
├── plugins/
│   └── vuetify.js         # Vuetify theme config
├── App.vue
├── main.js
└── style.css
```
