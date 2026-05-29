---
tags: [typescript, react, hooks, useState]
topic: React Component — Counter with Typed State
status: done
---

# `counter.tsx` — Typed useState

**Source:** `typescript/reactTs/src/components/counter.tsx`

## Code

```typescript
import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <p>Cups ordered: {count}</p>
            <button onClick={() => setCount((c) => c+1)}>Order one more</button>
        </div>
    )
}
```

## Breakdown

### Generic `useState<T>`
- `useState<number>(0)` — explicit generic. Inference also works from `useState(0)`.

> [!quote] TypeScript Docs
> *"React's type definitions use generics extensively."*

### Functional Update
- `setCount((c) => c+1)` — `c` inferred as `number`.

**See also:** [[OrderForm]], [[useFetch]]
