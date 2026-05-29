---
tags: [typescript, arrays, tuples, enums]
topic: Arrays, Tuples & Enums
status: done
---

# `ArrayEnum.ts` — Arrays, Tuples, Enums

**Source:** `typescript/src/ArrayEnum.ts`

## Code

```typescript
// Basic dtype arrays
const chaiFlavours: string[] = ["masala", "ginger"]
const chaiPrices: number[] = [20, 25]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number;
}

// Arrays of custom dtypes
const menu: Chai[] = [
    {name: "Masala", price: 20},
    {name: "Ginger", price: 25}
]

// readonly array
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune") // Property 'push' does not exist on type 'readonly string[]'.

// Multidimensional Arrays
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

// Tuples
let chaiTuple: [string, number]
chaiTuple = ["Masala", 2] // order should strictly be same

let userInfo: [string, number, boolean?]
userInfo = ["Amit", 100] // boolean is optional

const location: readonly [number, number] = [23.45, 12.24] // readonly tuple
const chaiItems: [name: string, price: number] = ["Masala", 20] // named tuples, more preferred

// enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

// customizing enums
enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}
function MakeChai(type: ChaiType){
    console.log(`Making ${type}`)
}

MakeChai(ChaiType.GINGER)
// MakeChai("masala") // Argument of type '"masala"' is not assignable to parameter of type 'ChaiType'.

// Heterogenous values, not used in production
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

// Constant enums
const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugar.HIGH

// Unexpected Behavior
let t: [string, number] = ["chai", 10]
t.push("Extra") // Here it gives no error as tuple is an array itself and items can be pushed into an array
```

## Arrays

| Syntax | Example |
|--------|---------|
| `type[]` | `string[]` |
| `Array<type>` | `Array<number>` |
| `readonly type[]` | `readonly string[]` |

> [!quote] TypeScript Docs
> *"To specify the type of an array like [1,2,3], use the syntax `number[]`; you may also see `Array<number>`."*

## Tuples

- Fixed-length, typed-per-position arrays.
- Named tuples: `[name: string, price: number]` — preferred.

> [!warning] Tuple `.push()` Caveat
> `t.push("Extra")` doesn't error! Tuples are arrays at runtime. Use `readonly` to prevent this.

## Enums

| Enum Type | Starting Value | Example |
|-----------|---------------|---------|
| Numeric | 0 (auto) | `SMALL = 0` |
| Numeric (custom) | User-set | `PENDING = 100` |
| String | User-set | `MASALA = "masala"` |
| Const | Inlined | `const enum Sugar` |

> [!quote] TypeScript Docs
> *"Enums allow a developer to define a set of named constants."*

**See also:** [[interface]], [[generics]], [[objectsTS]]
