# Daydream Improv

A Vue 3 website for improv activities, with an agenda, activity cards and individual event pages.

## Project status

This repository preserves the 2023 site and its event content. Dates and activities are historical; they are not a current event schedule.

## Local development

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run test:unit -- --run
```

Activity pages are in `src/components/activities/`, the landing page is in `src/views/HomeView.vue`, and routing is defined in `src/router/index.js`.

Dependencies are installed from `package-lock.json`; `node_modules/` is not source code and is no longer tracked. The existing commit history is retained.
