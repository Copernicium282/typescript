---
tags: [typescript, unions, any-unknown]
topic: Union Types & any/unknown
status: done
---

# `unionAndAny.ts` — Union Types, `any`, `unknown`

**Source:** `typescript/src/unionAndAny.ts`

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
- `number | string` — variable can hold either type.

> [!quote] TypeScript Docs
> *"A union type is a type formed from two or more other types, representing values that may be any one of those types."*

> [!warning] Narrow Before Using
> TypeScript *"will only allow an operation if it is valid for every member of the union."* See [[typeNarrowing]].

### String Literal Unions
- `"pending" | "success" | "error"` — restricts to exact values.

> [!quote] TypeScript Docs
> *"By combining literals into unions, you can express functions that only accept a certain set of known values."*

### `any` vs `unknown`

| Type | Safe? | Can use without narrowing? |
|------|-------|---------------------------|
| `any` | ❌ | Yes — disables all checking |
| `unknown` | ✅ | No — must narrow first |

> [!quote] TypeScript Docs
> *"Using `any` disables all further type checking... The `unknown` type is the type-safe counterpart of `any`."*

### `string | undefined`
- Explicitly allows `undefined`. Without it, TS warns about using before assignment.

**See also:** [[typeNarrowing]], [[moreTypes]], [[typesInTS]]
