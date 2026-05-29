---
tags: [typescript, react, shared-types]
topic: Shared Type Definitions
status: done
---

# `types.ts` — Shared Type Definitions

**Source:** `typescript/reactTs/src/types/types.ts`

## Code

```typescript
export interface Chai {
    id: number;
    name: string;
    price: number
}
```

## Breakdown

### Shared Types Pattern
- Centralized `types/` directory for types used across components.
- Reimported via `import type { Chai } from "../types/types"`.

### Why Export?
> [!quote] TypeScript Docs
> *"You can export interfaces and types to reuse them across files."*

**See also:** [[ChaiList]], [[App]]
