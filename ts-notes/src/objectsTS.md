---
tags: [typescript, objects, utility-types]
topic: Object Types & Utility Types
status: done
---

# `objectsTS.ts` — Object Types, Utility Types

**Source:** `typescript/src/objectsTS.ts`

## Code

```typescript
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

// TS inference
// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// declaring object types
let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger tea",
    price: 25,
    isHot: true
}

// type arrays
let Tea: {
    name: string;
    price: number;
    ingredients: string[]
}

Tea = {
    name: "Ginger tea",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

// Structural typing vs Duck Typing
type Cup = {volume: string}
let smallCup: Cup = {volume: "200ml"}
let largeCup= {volume: "500ml", material: "string"}
smallCup = largeCup // no errors as we havent type asserted largeCup

//Splitting out dtypes
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}
type Order = {
    id: string;
    items: Item[];
    address: Address
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

// type methods
const updateChai = (updates: Partial<Chai>) => {
    console.log("updating chai with,", updates)
}
updateChai({price: 25}) // we can update the type partially
updateChai({isHot: false})
updateChai({}) // accepts empty obj also, which would wipe out existing

type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}
// placeOrder({}) //Argument of type '{}' is not assignable to parameter of type 'Required<ChaiOrder>'. Type '{}' is missing the following properties from type 'Required<ChaiOrder>': name, quantity
placeOrder({
    name: "Masala Chai",
    quantity: 2
})

type NewChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<NewChai, "name" | "price"> // From T, pick a set of properties whose keys are in the union K
const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

type ProductionChai = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[]
}
type PublicChai = Omit<ProductionChai, "secretIngredients"> // Construct a type with the properties of T except for those in type K.
```

## Breakdown

### Structural Typing
- `smallCup = largeCup` works because `largeCup` structurally satisfies `Cup`.

> [!quote] TypeScript Docs
> *"TypeScript is a structurally typed type system — only concerned with the structure and capabilities of types."*

### Utility Types (from TS Docs)

| Utility | Effect | Example |
|---------|--------|---------|
| `Partial<T>` | All properties optional | Partial updates |
| `Required<T>` | All properties mandatory | Form submission |
| `Pick<T, K>` | Pick subset of keys | `Pick<Chai, "name">` |
| `Omit<T, K>` | Exclude keys | `Omit<Chai, "secret">` |

> [!tip] Utility Types
> These are built into TypeScript. See [[interface]] for more on `Pick`/`Omit` with generics.

**See also:** [[interface]], [[generics]], [[functionTS]]
