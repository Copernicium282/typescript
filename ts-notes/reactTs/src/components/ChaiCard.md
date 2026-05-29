# `ChaiCard.tsx` — Component with Default Prop Values

> **Source:** `typescript/reactTs/src/components/ChaiCard.tsx`

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

### Props Interface
- `ChaiCardProp` defines the contract for props. `isSpecial` is optional.

### Default Prop Values
- `isSpecial=false` — destructuring with default value. TS infers the type from the default.
- TS Docs: *"Default-initialized parameters have their type inferred. The type annotation is optional."*

### Conditional Rendering with `&&`
- `{isSpecial && <span>⭐</span>}` — renders a star only when `isSpecial` is truthy.

---
