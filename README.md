# AitiGuru — Product Management Dashboard

A single-page product management application built with React 19 and TypeScript.

## Features

- **Authentication** — login with token stored in `localStorage` (remember me) or `sessionStorage`
- **Product table** — paginated list with sorting by rating and price
- **Search** — debounced live search across the product catalogue
- **Add product** — modal form with validation (react-hook-form + zod)
- **Toast notifications** — custom portal-based toast system
- **Responsive** — adaptive layout for tablet (768px) and mobile (480px)

## Tech Stack

| Category | Library |
|---|---|
| UI | React 19, TypeScript 5.9 |
| Build | Vite 7 |
| Routing | react-router-dom v7 |
| State | Zustand 5 |
| Forms | react-hook-form + zod v4 |
| Styling | CSS Modules |
| API | [DummyJSON](https://dummyjson.com) |

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```

**Test credentials** (via DummyJSON):

```
login:     emilys
password:  emilyspass
```

## Scripts

```bash
npm run dev        # start dev server
npm run build      # type-check + production build
npm run lint       # ESLint
npx tsc --noEmit   # type-check only
```

## Project Structure

```
src/
├── api/               # fetch wrappers (auth, products)
├── store/             # zustand stores (auth, products)
├── types/             # shared TypeScript types
├── components/
│   ├── icons/         # inline SVG components
│   ├── ui/            # Toast, ProgressBar
│   └── products/      # ProductsTable, ProductRow, Pagination, AddProductModal
├── pages/
│   ├── LoginPage/     # auth screen
│   └── ProductsPage/  # protected product dashboard
├── router.tsx
└── main.tsx
```

## Architecture Notes

- **Routing** — `createBrowserRouter` with a `ProtectedRoute` wrapper; redirects to `/login` if no token
- **Sort state** — manually persisted to `localStorage` key `products-sort` (no zustand middleware)
- **Icons** — inline SVG React components, no icon library dependency
- **Zod v4** — use `z.string().refine()` for numeric inputs; `z.coerce.number({ invalid_type_error })` is not valid in v4
