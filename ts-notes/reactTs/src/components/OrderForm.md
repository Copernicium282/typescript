# `OrderForm.tsx` — Forms, Event Handlers, Callback Props

> **Source:** `typescript/reactTs/src/components/OrderForm.tsx`

## Code

```typescript
import React, { useState } from "react";

interface OrderFormProps {
    onSubmit(order: {name: string; cups: number}): void
}

export function OrderForm({onSubmit}: OrderFormProps){
    const [name, setName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e?.preventDefault();
        onSubmit({name, cups});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Chai Name</label>
            <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value)
            }}
            />
            <label>Cups</label>
            <input
            type="number"
            value={cups}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCups(Number(e.target.value) || 0)
            }}
            />
            <button type="submit">Place Order</button>
        </form>
    )
}
```

## Breakdown

### Callback Props with Object Parameter
- `onSubmit(order: {name: string; cups: number}): void` — inline object type for the callback parameter.

### `React.FormEvent`
- `e: React.FormEvent<HTMLFormElement>` — type for form submit events. Generic parameter specifies the element type.

### `React.ChangeEvent`
- `e: React.ChangeEvent<HTMLInputElement>` — type for input change events. Access `e.target.value` safely.

### State Initialization
- `useState<string>("Masala")` / `useState<number>(1)` — explicit generics for state hooks.

### Number Conversion
- `Number(e.target.value) || 0` — safely handles parsing. `e.target.value` is always a `string` from the input.

### Optional Chaining on Events
- `e?.preventDefault()` — optional chaining in case `e` is nullish (defensive).

---
