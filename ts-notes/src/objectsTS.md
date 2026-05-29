# `objectsTS.ts` — Object Types, Utility Types (Partial, Required, Pick, Omit)

> **Source:** `typescript/src/objectsTS.ts`

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

### Object Type Inference
- `const chai = {...}` — TS infers an object type with property types.

### Structural Typing (Duck Typing)
- `smallCup = largeCup` works because `largeCup` has all the properties of `Cup` (`volume: string`). TS Docs: *"TypeScript is a structurally typed type system — only concerned with the structure and capabilities."*

### Utility Types (from TS Docs)

| Utility | Effect |
|---------|--------|
| `Partial<T>` | Makes all properties optional |
| `Required<T>` | Makes all properties required |
| `Pick<T, K>` | From T, pick a set of properties K |
| `Omit<T, K>` | Construct a type excluding properties K |

- `Partial<Chai>` — all properties become optional. Useful for partial updates.
- `Required<ChaiOrder>` — makes optional properties mandatory.
- `Pick<NewChai, "name" | "price">` — creates a type with only `name` and `price`.
- `Omit<ProductionChai, "secretIngredients">` — creates a type without `secretIngredients`.

### Excess Property Checking
- Assigning an object literal with extra properties directly to a typed variable errors, but assigning an existing variable (`largeCup`) to a typed variable doesn't — due to structural typing.

---
