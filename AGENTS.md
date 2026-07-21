# machbar.tech

AI-Powered Consumer Products Community Marketplace — buy, sell, and discover smart hardware designs and components. Community-powered with badge system (Member → Contributor → Maker).

## Trajectory
Key checkpoints: 2026-07 — Crystal Ball Navigation, badge system, Airtable integration | Next: maker tools

## Paths
- Specs: `~/projects/docs/specs/`
- Plans: `~/projects/docs/plans/`
- Backlog: `~/projects/docs/backlog.md`

## Tech Stack
| Layer | Choice |
|-------|--------|
| Frontend | React 18 + Vite + Tailwind CSS + Framer Motion |
| State | Zustand + @tanstack/react-query |
| Data | Airtable |
| Router | react-router-dom |

## Running
```bash
npm run dev          # Vite dev server on :3000
npm run build        # Production build
npm run preview      # Preview production build
```

## Working Rules
- Commit before reporting done
- Evidence: file paths, line numbers, errors
- Test on running service