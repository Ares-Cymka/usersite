# Portfolio — Tatsuya Kuroda Clone

A clone of the [Tatsuya Kuroda](https://stealthemoon0331-tatusya.vercel.app/) portfolio with the **Deep Blue Serenity** theme. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Sections

- **Hero** — Name, title, tagline, CTA
- **自己紹介 (About)** — Avatar, bio, values, personal highlights
- **経歴 (Experience)** — Stats, timeline, expertise areas
- **制作実績 (Projects)** — Project cards and categories
- **スキル (Skills)** — Skill categories, levels, learning goals
- **実績・資格 (Achievements)** — Awards and certifications
- **推薦の言葉 (Testimonials)** — Client testimonials
- **お問い合わせ (Contact)** — Form, contact info, social links

## Run locally (see updates in real time)

Use the **development server** so code and style changes appear without rebuilding:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Edit files and save — the browser will update automatically (Fast Refresh).

For faster refresh, you can use Turbopack: `npm run dev:turbo`.

## Production build (no live reload)

Only when you want to test the production build:

```bash
npm run build
npm start
```

Note: `npm start` serves a pre-built app. You will **not** see edits in real time. Use `npm run dev` for development.

Images and assets are loaded from the original site where possible. You can replace URLs in `lib/data.ts` with your own assets.
