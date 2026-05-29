# `ChaiList.tsx` — Typed Props with Array of Objects

> **Source:** `typescript/reactTs/src/components/ChaiList.tsx`

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

### Typed Array Props
- `items: Chai[]` — an array of `Chai` objects. TS ensures each object has `id`, `name`, `price`.

### `import type`
- `import type { Chai }` — type-only import, erased at runtime.

### `key` Prop
- `key={chai.id}` — React requires a unique `key` for list items. TS ensures it matches the `id` type (`number`).

### Conditional Logic in Template
- `isSpecial={chai.price > 30}` — TS ensures both sides of `>` are numbers.

---
