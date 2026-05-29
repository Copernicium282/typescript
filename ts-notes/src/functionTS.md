---
tags: [typescript, functions, parameters]
topic: Function Types & Parameters
status: done
---

# `functionTS.ts` — Function Types, Optional & Default Params

**Source:** `typescript/src/functionTS.ts`

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

### Parameter Annotations
- `type: string, cups: number` — TS checks arguments at call sites.

> [!quote] TypeScript Docs
> *"When you declare a function, you can add type annotations after each parameter."*

### Return Types
- `getChaiPrice(): number` — explicit. Usually inference suffices.

### Union Return
- `makeOrder(order: string): string | null` — see [[unionAndAny]].

### `void`
- `logChai(): void` — no return value.

> [!quote] TypeScript Docs
> *"`void` represents the return value of functions which don't return a value."*

### Optional & Default
- `type?: string` — optional (comes last).
- `type: string = "Masala"` — default value.

### Inline Object Types
- `createChai(order: { type: string; sugar: number; size: "small" | "large" })` — anonymous inline type.

**See also:** [[index]], [[typeNarrowing]], [[objectsTS]]
