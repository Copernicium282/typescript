# `main.tsx` — React Entry Point with `createRoot`

> **Source:** `typescript/reactTs/src/main.tsx`

## Code

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Breakdown

### Non-null Assertion (`!`)
- `document.getElementById('root')!` — TS Docs: *"Writing `!` after any expression is effectively a type assertion that the value isn't `null` or `undefined`."*
- `getElementById` returns `HTMLElement | null`. The `!` asserts the element exists.

### `createRoot` Typed API
- `createRoot` from `react-dom/client` is fully typed. Returns `Root` with `.render()` method.

### `.tsx` Import Extension
- `import App from './App.tsx'` — bundler config allows `.tsx` extensions (configured in `tsconfig.app.json` with `allowImportingTsExtensions`).

---
