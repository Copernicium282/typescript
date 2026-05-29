---
tags: [typescript, type-assertions, never, unknown]
topic: Type Assertions, unknown, never
status: done
---

# `moreTypes.ts` — Type Assertions, `unknown`, `never`

**Source:** `typescript/src/moreTypes.ts`

## Code

```typescript
let response: any = "42"

// Forceful type assertion
let numericLength: number = (response as string).length

type Book = {
    name: string
}
let bookString = '{"name": "who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

// React usage
const inputElement = document.getElementById("username") as HTMLInputElement

let value: any
value = "chai"
value = [1,2,3]
value = 32
value.toUpperCase() // does not give any error here as dtype is init to any

let newValue: unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 32
// newValue.toUpperCase() // gives error here
if(typeof newValue === "string"){
    newValue.toUpperCase(); // here we type asserted
}

// try catch blocks are a bit more complex
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message) // again, type assertion
    }
    console.log("Error", error)
}

// if variables is init to unknown, we need to do type assertion during usage
const data: unknown = "chai aur code"
const strData: string = data as string

// "never" dtype
type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirect to user dashboard")
        return
    }
    role; // (parameter) role: never, as this should not be accessible as we have gone through all Edge Cases, useful to catch un-evaluated Edge Cases
}

function neverReturn(): never{ // functions that never end / infinite loop
    while(true){}
}
```

## Breakdown

### Type Assertions (`as`)
- `(response as string).length` — asserts `response` is `string`.

> [!quote] TypeScript Docs
> *"Sometimes you will have information about the type of a value that TypeScript can't know about."*

> [!warning] No Runtime Effect
> *"Type assertions are removed by the compiler and won't affect the runtime behavior."*

Angle bracket syntax: `<HTMLCanvasElement>document.getElementById(...)` — but doesn't work in `.tsx`.

### `any` vs `unknown`

| Aspect | `any` | `unknown` |
|--------|-------|-----------|
| Access methods | ✅ Any method | ❌ Must narrow first |
| Type safety | ❌ None | ✅ Must check before use |
| Use case | Migration | Unknown API data |

> [!quote] TypeScript Docs
> *"When a value is of type `any`, you can access any properties of it."*

### `catch` with `unknown`
- `error` is `unknown`. Must narrow: `error instanceof Error` before `error.message`.

### `never` Type
- After exhaustive `if`/`else` checks, remaining type is `never`.

> [!quote] TypeScript Docs
> *"The `never` type represents values which are never observed — for functions that never return."*

**See also:** [[unionAndAny]], [[typeNarrowing]], [[interface]]
