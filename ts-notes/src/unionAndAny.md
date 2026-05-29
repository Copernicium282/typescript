# `unionAndAny.ts` — Union Types & `any` / `unknown`

> **Source:** `typescript/src/unionAndAny.ts`

## Code

```typescript
let numOfSubs: number | string = '1M' // union

// Use Cases : while interacting with an API, there can be custom dtypes for status
let apiReqStatus: "pending" | "success" | "error" = "pending"
// Now, it cannot be overrided using any other string/dtype other than these 3

let planeSeat: "aisle" | "middle" | "window" = "aisle"

const orders = ['12', '20', '30', '28']
// Avoid (: any) dtype to the maximum extent possible
// (: unknown) dtype can be used during init as it is somewhat more safer than (: any)
let currentorder: string | undefined // without undefined, it complains in the end that the var is being used before being assigned

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
}

console.log(currentorder) // string | undefined
```

## Breakdown

### Union Types (`|`)
- `number | string` — variable can hold either type. TS Docs: *"A union type is a type formed from two or more other types, representing values that may be any one of those types."*
- TS Docs: TypeScript *"will only allow an operation if it is valid for every member of the union."* You must narrow before using type-specific methods.

### String Literal Unions
- `"pending" | "success" | "error"` — a union of specific string literals. TS Docs: *"By combining literals into unions, you can express functions that only accept a certain set of known values."*
- Assigning any value outside these three causes a type error.

### `any` vs `unknown` vs `undefined`
- **`any`** — disables all type checking. TS Docs: *"Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript."* Avoid whenever possible.
- **`unknown`** — safer than `any`. You must narrow/assert before use. TS Docs: *"The `unknown` type represents any value. This is the type-safe counterpart of `any`."*
- **`string | undefined`** — explicitly allows `undefined`. Without `undefined`, TS complains about using a variable before it's definitely assigned.

### `noImplicitAny`
- TS Docs: *"Use the compiler flag `noImplicitAny` to flag any implicit `any` as an error."*

---
