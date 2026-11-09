# IRIS Pang — personal editorial site

Personal editorial platform. Not a résumé, employer portfolio, or services landing page.

**IRIS PANG · Technology · Media · Community**  
**Where Consciousness Creates the World.**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run typecheck
npm run build
```

## Sprint 1

Homepage art direction, site shell, and live routes. Content is typed data in `src/content`. Only published, verified items are linked as real work. Layout slots on the homepage are marked **Prototype layout**.

The homepage portrait is a motif, not a likeness. Replace it with an approved photograph before any public launch.

Search engines are asked not to index the site until launch (`src/app/robots.ts` and metadata `noindex`).

## What is not here

- Employer names, clients, fabricated guests, fake metrics
- A working contact inbox until an address is confirmed
- Arbor Lux as an equal homepage pillar

## Archive

`legacy/` holds the previous static résumé-style pages. They are not served. `docs/` holds the design and sprint documents.
