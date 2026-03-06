# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, default port 5173)
npm run build     # TypeScript check + Vite production build
npm run lint      # ESLint
npx tsc --noEmit  # Type-check only, no build
```

## Architecture

Single-page app with two routes:
- `/login` — public auth screen
- `/products` — protected products list (redirects to `/login` if no token)

**Routing & entry:** `src/router.tsx` defines routes via `createBrowserRouter`. `src/main.tsx` wraps everything in `ToastProvider` + `RouterProvider`.

**State:**
- `src/store/authStore.ts` — auth token + `isAuthenticated`. Token stored in `localStorage` (rememberMe) or `sessionStorage` (session only), key `ag_token`.
- `src/store/productsStore.ts` — products list, pagination, search query, sort state. Sort state manually persisted to `localStorage` key `products-sort`.

**API layer** (`src/api/`): thin fetch wrappers over DummyJSON (`https://dummyjson.com`). Auth: `POST /auth/login`. Products: `GET /products` or `GET /products/search` with `limit`, `skip`, `sortBy`, `order` params.

**Styling:** CSS Modules (`.module.css` co-located with each component). Design tokens are CSS variables defined in `src/index.css`. No Tailwind.

**Icons:** Inline SVG React components in `src/components/icons/index.tsx` — no icon library.

**Toast:** Custom implementation in `src/components/ui/Toast/Toast.tsx` — React portal + CSS animation. Consumed via `useToast()` hook inside `ToastProvider`.

**Forms:** react-hook-form + zod v4. Note: in zod v4, `z.coerce.number({ invalid_type_error })` is invalid — use `z.string().refine(...)` for numeric inputs instead.

## Key design tokens (from Figma)

| Token | Value |
|---|---|
| Primary blue | `#242edb` |
| Rating low (< 3) | `#f11010` (red) |
| Page background | `#f6f6f6` |
| Fonts | Cairo (headings), Inter (body), Open Sans (table cells), Roboto Mono (price) |
