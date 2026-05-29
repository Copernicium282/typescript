# `vite.config.ts` — Vite Build Tool Configuration

> **Source:** `typescript/reactTs/vite.config.ts`

## Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

## Breakdown

### `defineConfig`
- Vite's `defineConfig` helper provides full TypeScript intellisense for the config object.
- TS Docs: *"Library authors ship comprehensive type definitions to provide editor tooling."*

### Plugin Typing
- `@vitejs/plugin-react` is fully typed — Vite validates the plugins array structure.

---
