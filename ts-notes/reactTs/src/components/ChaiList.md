---
tags: [typescript, react, lists, typed-arrays]
topic: React Component — ChaiList with Typed Array
status: done
---

# `ChaiList.tsx` — Typed Array Props

**Source:** `typescript/reactTs/src/components/ChaiList.tsx`

## Code

```typescript
import type { Chai } from "../types/types"
import { ChaiCard } from "./ChaiCard"

interface ChaiListProps {
    items: Chai[];
}

export function ChaiList({items}: ChaiListProps){
    return (
        <div>
            {items.map((chai) => (
                <ChaiCard
                    key={chai.id}
                    name={chai.name}
                    price={chai.price}
                    isSpecial={chai.price > 30}
                />
            ))}
        </div>
    )
}
```

## Breakdown

### Typed Array Prop
- `items: Chai[]` — array of `Chai` objects.

### Contextual Typing in `.map()`
- `items.map((chai) => ...)` — TS infers `chai` as `Chai` from context.

> [!quote] TypeScript Docs
> *"Contextual typing occurs when the context informs what type it should have."*

### Conditionally Passing Props
- `isSpecial={chai.price > 30}` — TS validates both sides of `>` are `number`.

**See also:** [[ChaiCard]], [[types]]
