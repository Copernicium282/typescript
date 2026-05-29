---
tags: [typescript, react, entry, dom]
topic: React Entry Point
status: done
---

# `main.tsx` — React DOM Entry

**Source:** `typescript/reactTs/src/main.tsx`

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
- `document.getElementById('root')!` — asserts element exists (not `null`).

> [!quote] TypeScript Docs
> *"Writing `!` after any expression is a type assertion that the value isn't `null` or `undefined`."*

### Typed `createRoot`
- Fully typed from `react-dom/client`.

**See also:** [[App]], [[notes]]
