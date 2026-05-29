# `interfacePt2.ts` — Interfaces: Readonly, Method Signatures, Index Signatures, Merging, Extension

> **Source:** `typescript/src/interfacePt2.ts`

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

### Interface Basics
- TS Docs: *"An interface declaration is another way to name an object type."*
- Interfaces and type aliases are ~80% interchangeable. Key differences:
  - Interfaces can be **merged** (declaration merging)
  - Interfaces can be **extended**
  - Types can represent unions, primitives, and intersections

### `readonly` in Interfaces
- Same as types — `readonly id: number` prevents reassignment.

### Function/Method Signatures
- `interface DiscountCalculator { (price: number): number }` — describes a callable.
- `interface teaMachine { start(): void; stop(): void }` — describes an object with methods.

### Index Signatures
- `[flavour: string]: number` — when you don't know property names but know the value type. TS Docs: *"Sometimes you don't know all the names of a type's properties, but you do know the shape of the values."*

### Declaration Merging
- Two interfaces with the same name in the same scope **merge** automatically.
- TS Docs: *"One of the key differences between type and interface is that interfaces are open to extension — you can add new fields to an existing interface."*
- The merged interface requires ALL properties from both declarations.

### Interface Extension
- `interface C extends A, B` — inherits all properties of both A and B. TS Docs: *"Interfaces can extend other interfaces, extracting all members."*

---
