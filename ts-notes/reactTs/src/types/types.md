# `types.ts` — Shared Type Definitions (React TS)

> **Source:** `typescript/reactTs/src/types/types.ts`

## Code

```typescript
export interface Chai {
    id: number;
    name: string;
    price: number
}
```

## Breakdown

### Shared Types
- A dedicated `types/` directory for shared type definitions. Reused across components via `import type { Chai } from "../types/types"`.

### `export` for Reusability
- Exported interfaces can be imported in multiple components. TS Docs: *"You can export interfaces and types to reuse them across files."*

---
