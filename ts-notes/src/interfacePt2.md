---
tags: [typescript, interfaces, index-signatures, merging]
topic: Interfaces — Advanced Features
status: done
---

# `interfacePt2.ts` — Interfaces: Index Signatures, Merging, Extension

**Source:** `typescript/src/interfacePt2.ts`

## Code

```typescript
// interface gives shape to your data/object, are 70-80% interchangable with types in most of the cases
interface Chai {
    flavour: string;
    price: number;
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "Masala chai",
    price: 20
}

// readonly properties
interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {id: 1, name: "Chaicode caffe"}
// s.id = 2 // Cannot assign to 'id' because it is a read-only property.

// methods/functions using interfaces
interface DiscountCalculator{
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p*0.5 // usage in func

interface teaMachine{
    start(): void;
    stop(): void
}
const machine: teaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}

// index signatures
interface ChaiRatings {
    [flavour: string]: number
}
// usage
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

// from say some library
interface User { 
    name: string
}
// dev-defined interface
interface User {
    age: number
}

// interfaces get merged and both need to be satisfied
const u: User = {
    name: "Amit",
    age: 19
}

// interfaces can be extended
interface A {a: string}
interface B {b: string}
interface C extends A,B {}
```

## Breakdown

### Method Signatures
- `interface DiscountCalculator { (price: number): number }` — callable interface.
- `interface teaMachine { start(): void; stop(): void }` — object with methods.

### Index Signatures
- `[flavour: string]: number` — when property names are dynamic but value types are known.

> [!quote] TypeScript Docs
> *"Sometimes you don't know all the names of a type's properties, but you do know the shape of the values."*

### Declaration Merging
- Two `interface User` declarations **merge** automatically. All properties required.

> [!quote] TypeScript Docs
> *"Interfaces are open to extension — you can add new fields to an existing interface."*

### Interface Extension
- `interface C extends A, B` — inherits all properties.

### `type` vs `interface` Quick Comparison

| Feature | `type` | `interface` |
|---------|--------|-------------|
| Unions | ✅ | ❌ |
| Merging | ❌ | ✅ |
| Extends | `&` | `extends` |
| Constraint | `T extends U` | Same |

**See also:** [[interface]], [[generics]], [[oop]]
