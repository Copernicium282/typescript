# `moreTypes.ts` — Type Assertions, `unknown`, `never`

> **Source:** `typescript/src/moreTypes.ts`

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
- `(response as string).length` — asserts `response` is `string` to access `.length`. TS Docs: *"Sometimes you will have information about the type of a value that TypeScript can't know about."*
- `JSON.parse(bookString) as Book` — tells TS the parsed object is of type `Book`.
- `document.getElementById("username") as HTMLInputElement` — common in React/DOM code to narrow `HTMLElement` to `HTMLInputElement`.
- TS Docs: *"Type assertions are removed by the compiler and won't affect the runtime behavior of your code."*

### Angle Bracket Syntax
- Alternatively: `const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")` — but this doesn't work in `.tsx` files.

### `any` vs `unknown`
- **`any`** — `value.toUpperCase()` works without error even when `value` is a `number`. TS Docs: *"When a value is of type `any`, you can access any properties of it."*
- **`unknown`** — must be narrowed before use. `newValue.toUpperCase()` errors unless we check `typeof newValue === "string"`.

### `unknown` with `catch`
- `error` in `catch` is `unknown`. Narrow with `error instanceof Error` before accessing `error.message`.

### `never` Type
- `role` after exhaustive `if` checks becomes `never` — all possible types have been handled.
- TS Docs: *"The `never` type represents values which are never observed. `never` is assigned to a function's return type when it never returns."*
- `neverReturn(): never` — a function that never reaches the end (infinite loop, throws always).
- Useful for exhaustiveness checking: if a new union member is added without updating checks, the `never` variable errors.

---
