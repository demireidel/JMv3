# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Pinned Stack
- Node 24.x LTS
- Next.js 16.2.0
- React 19.2.4
- Tailwind CSS 4.0.7 (DO NOT upgrade to 4.1.x or 4.2.x — both have Turbopack build bugs)
- TypeScript 5.9.3 (DO NOT upgrade to 6.0 RC — breaking defaults, wait for GA)
- Motion 12.38.x (import from "motion/react", NOT "framer-motion")

## Key Breaking Changes
- `params` and `searchParams` are Promises — must use `await`
- Server Components by default — only add `"use client"` when needed
- Import motion from `motion/react` (with "use client") or `motion/react-client` (RSC-friendly)
- `onLoadingComplete` on Image is deprecated — use `onLoad`
- View transitions enabled via `experimental.viewTransition: true`
