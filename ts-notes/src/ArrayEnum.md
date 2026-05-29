# `ArrayEnum.ts` — Arrays, Tuples, Enums

> **Source:** `typescript/src/ArrayEnum.ts`

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

## Breakdown

### Arrays
- `string[]` / `Array<number>` — two equivalent syntaxes. TS Docs: *"To specify the type of an array like [1,2,3], use the syntax `number[]`; you may also see `Array<number>`."*

### `readonly` Arrays
- `readonly string[]` — prevents mutation methods (`push`, `pop`, etc.). TS Docs: *"ReadonlyArray is a special type that describes arrays that shouldn't be changed."*

### Multi-dimensional Arrays
- `number[][]` — an array of arrays of numbers.

### Tuples
- `[string, number]` — fixed-length array with fixed types per position. TS Docs: *"A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions."*
- `boolean?` — optional tuple element.
- `readonly [number, number]` — immutable tuple.
- Named tuples: `[name: string, price: number]` — more readable, recommended.

### Enums
- TS Docs: *"Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases."*
- **Numeric enums** — auto-increment from 0. Custom starting value (`PENDING = 100`).
- **String enums** — `MASALA = "masala"`. More readable at runtime.
- **Const enums** — `const enum Sugar` — completely inlined at compile time, no runtime object.
- **Heterogeneous enums** — mix of string and numeric values (not recommended).

### Tuple Caveat
- `.push()` on a tuple doesn't error because tuples are arrays at runtime. Use `readonly` tuples to prevent this.

---
