# `functionTS.ts` — Function Types, Optional & Default Params, Return Types

> **Source:** `typescript/src/functionTS.ts`

## Code

```typescript
function MakeChai(type: string, cups: number){ // input types usage
    console.log(`Making ${cups} cups of type ${type}`)
}

MakeChai("masala chai", 2)

function getChaiPrice(): number{ // output type usage
    return 25
}

function makeOrder(order: string): string | null{
    if(!order) return null
    return order
}

function logChai(): void{ // When function returns no data
    console.log("Chai is ready")
}

// Optional and Default dtype
function orderChai1(type?: string){ // Optional
}

function orderChai2(type: string = "Masala"){ // Default
}

function createChai(order: { // custom/complex dtype
    type: string;
    sugar: number;
    size: "small" | "large"
}){
    return 2;
}
```

## Breakdown

### Parameter Type Annotations
- `type: string, cups: number` — TS Docs: *"When you declare a function, you can add type annotations after each parameter."*
- Invalid arguments caught at compile time.

### Return Type Annotations
- `function getChaiPrice(): number` — explicit return type. TS Docs: *"You usually don't need a return type annotation because TypeScript will infer it."*

### Union Return Types
- `makeOrder(order: string): string | null` — function may return either type.

### `void` Return
- `logChai(): void` — function has no return value. TS Docs: *"`void` represents the return value of functions which don't return a value."*

### Optional & Default Parameters
- `type?: string` — optional param (may be `undefined`). Must come after required params.
- `type: string = "Masala"` — default value. TS infers type from default.

### Inline Object Types
- `createChai(order: { type: string; sugar: number; size: "small" | "large" })` — anonymous object type as parameter. TS Docs: *"To define an object type, simply list its properties and their types."*

---
