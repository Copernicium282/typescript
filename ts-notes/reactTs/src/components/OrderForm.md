---
tags: [typescript, react, forms, events]
topic: React Component — OrderForm with Typed Events
status: done
---

# `OrderForm.tsx` — Typed Forms & Event Handlers

**Source:** `typescript/reactTs/src/components/OrderForm.tsx`

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

## Event Types

| Event | Type |
|-------|------|
| Form submit | `React.FormEvent<HTMLFormElement>` |
| Input change | `React.ChangeEvent<HTMLInputElement>` |

## Breakdown

### Callback Prop
- `onSubmit(order: {name: string; cups: number}): void` — inline object type.

### Generic Event Types
- `React.FormEvent<HTMLFormElement>` — form submissions.
- `React.ChangeEvent<HTMLInputElement>` — input change events.

> [!quote] TypeScript Docs
> *"React provides types for all synthetic events."*

### Number Handling
- `Number(e.target.value) || 0` — `e.target.value` is always `string`.

**See also:** [[counter]], [[useFetch]], [[typeNarrowing]]
