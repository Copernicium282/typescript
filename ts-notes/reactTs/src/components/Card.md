---
tags: [typescript, react, components, props]
topic: React Component — Card with PropsWithChildren
status: done
---

# `Card.tsx` — Props With Children & ReactNode

**Source:** `typescript/reactTs/src/components/Card.tsx`

## Code

```typescript
import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

//write optional and default val at end
export function Card({title, children, footer}: CardProps){
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    )
}
```

## Breakdown

### `PropsWithChildren`
- Automatically adds `children?: ReactNode`.

### `ReactNode`
- Any renderable: JSX, string, number, fragment, `null`, `false`.

### Conditional Rendering
- `{footer && <footer>{footer}</footer>}` — renders only when `footer` is provided.

> [!tip] Destructuring Pattern
> `function Card({title, children, footer}: CardProps)` — clean, typed destructuring.

**See also:** [[ChaiCard]], [[App]]
