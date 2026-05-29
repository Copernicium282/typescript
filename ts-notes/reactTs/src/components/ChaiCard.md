---
tags: [typescript, react, components, defaults]
topic: React Component — ChaiCard with Default Props
status: done
---

# `ChaiCard.tsx` — Component with Default Prop

**Source:** `typescript/reactTs/src/components/ChaiCard.tsx`

## Code

```typescript
interface ChaiCardProp {
    name: string;
    price: number;
    isSpecial?: boolean
}

export function ChaiCard({name, price, isSpecial=false}: ChaiCardProp){
    return (
        <article>
            <h2>
                {name} {isSpecial && <span>⭐</span>}
            </h2>
            <p>{price}</p>
        </article>
    )
}
```

## Breakdown

### Default Destructured Value
- `isSpecial=false` — TS infers type from default. No annotation needed.

> [!quote] TypeScript Docs
> *"Default-initialized parameters have their type inferred."*

### Conditional Star
- `{isSpecial && <span>⭐</span>}` — renders when `isSpecial` is true.

**See also:** [[Card]], [[ChaiList]]
