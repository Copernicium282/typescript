---
tags: [typescript, vite, build-tool, config]
topic: Vite Configuration
status: done
---

# `vite.config.ts` — Vite Build Config

**Source:** `typescript/reactTs/vite.config.ts`

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

### `defineConfig` Typing
- Provides full type intellisense for the config object.

### Plugin Typing
- `@vitejs/plugin-react` ships its own type definitions.

**See also:** [[tsconfig-app]], [[tsconfig-node]]
