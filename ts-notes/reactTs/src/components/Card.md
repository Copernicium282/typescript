# `Card.tsx` — React Component Props with `PropsWithChildren` & `ReactNode`

> **Source:** `typescript/reactTs/src/components/Card.tsx`

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
- `interface CardProps extends PropsWithChildren` — automatically includes `children?: ReactNode`. TS Docs: *"PropsWithChildren is a utility type that adds `children` prop."*

### `ReactNode`
- `footer?: ReactNode` — can render any JSX element, string, number, fragment, or array of these. TS Docs: *"`ReactNode` is the most general type for what can be rendered."*

### Destructuring Props
- `function Card({title, children, footer}: CardProps)` — destructures the props object with full type safety.

### Conditional Rendering
- `{footer && <footer>{footer}</footer>}` — renders the `footer` element only when `footer` prop is provided (truthiness check).

---
