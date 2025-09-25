# PrintForge

PrintForge is a learning project built with Next.js to explore the App Router, TypeScript, component design, and common web app patterns for a small 3D-model browsing site.

## Project objective

The main goal is to learn and practice modern Next.js development by building a simple, opinionated storefront for 3D-printable models. Work in this project focuses on routing, layout composition, components, TypeScript types, static/mock data handling, and styles.

## What this project includes

- A small public-facing app with home, about, and 3D models pages
- App Router based layout and nested routes under `app/3d-models`
- Reusable UI components (cards, navbar, pill, grid) in `app/components`
- Mock data files in `app/data` and simple data helpers in `app/lib`
- TypeScript types in `app/types`
- Tailwind CSS utility classes for styling
- Responsive layout and simple accessibility annotations

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- react-icons

## Folder overview (key files)

- `app/` — main application routes, layouts, pages, and components
  - `app/page.tsx` — home page
  - `app/about/page.tsx` — about page and mission/vision content
  - `app/3d-models/` — models index, category pages and nested layout
  - `app/components/` — UI components like `ModelCard`, `ModelGrid`, `Navbar`, etc.
  - `app/data/` — `models.json`, `categories.json` (mock data)
  - `app/lib/` — simple helpers to read and filter mock data
- `public/` — images and logos
- `next.config.ts`, `tsconfig.json`, and Tailwind/PostCSS config files

## Run locally

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Open http://localhost:3000 in your browser

Notes:
- The app uses mock JSON data in `app/data`. Replace or connect a real data source if you want to practice fetching runtime or static data.
- Edit pages under `app/` (for example `app/page.tsx` and `app/3d-models/page.tsx`) while the dev server is running to see live updates.

## Next steps / Ideas to practice

- Connect a real API or add file-based uploads for models
- Add authentication (NextAuth) and a model upload flow
- Implement pagination, filtering, and sorting
- Add tests (Jest/Testing Library) and CI
- Deploy to Vercel for practice with deployments

## Contributing & learning notes

This repository is a personal learning project. For questions or help while developing, open an issue or add notes to your own TODOs. Keep changes small and focused to practice incremental development.

---

Generated to document the project's purpose and help you continue learning Next.js. Feel free to tell me if you want a README section added (API docs, deployment steps, or contribution guidelines).
