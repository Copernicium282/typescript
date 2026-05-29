# `counter.tsx` — `useState` with Type Parameter

> **Source:** `typescript/reactTs/src/components/counter.tsx`

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

### `useState` Generic
- `useState<number>(0)` — explicit type parameter. TS Docs: "React's type definitions use generics extensively."
- In this case inference works too: `useState(0)` infers `number`.

### State Update with Callback
- `setCount((c) => c+1)` — functional update. TS infers `c` as `number` from the state type.

---
