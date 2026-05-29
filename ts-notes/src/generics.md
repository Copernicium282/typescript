# `generics.ts` — Generics: Functions, Interfaces, Utility Patterns

> **Source:** `typescript/src/generics.ts`

## Code

```typescript
// Generics are used to make ur code reusable

function wrapInArray<T>(item: T): T[]{ // T has no Symbolic meaning, it can be any data type such as string, array
    return [item]
}
// Usage, usually in libraries and frameworks
wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})

function pair<A, B>(a: A, b: B): [A, B]{ // returns an array having a, b, where a is of dtype A and b is of dtype B
    return [a, b]
}
// Usage, usually in libraries and frameworks
pair("masala", "test")
pair("masala", 20)
pair("masala", {})

// Interfaces can also be made into generics
interface Box<T> {
    content: T
}
// Usage
const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

// Partial, Pick and Omit also work

// IRL usecases in API responses and form states in react, axios
interface APIpromise<T>{
    status: number,
    data: T
}
// usage
const res: APIpromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}

// Generics usually come predefined
```

## Breakdown

### Generic Functions
- `function wrapInArray<T>(item: T): T[]` — TS Docs: *"Generics provide a way to make components work with any data type and not restrict to one data type."*
- `T` is a type parameter — inferred from usage: `wrapInArray("masala")` → `T = string`.

### Multiple Type Parameters
- `function pair<A, B>(a: A, b: B): [A, B]` — two independent type parameters.

### Generic Interfaces
- `interface Box<T> { content: T }` — TS Docs: *"You can use generics in interfaces."*
- Specified at usage: `Box<number>`, `Box<string>`.

### Real-world Pattern
- `interface APIpromise<T>` — common pattern for API response wrappers. `data` field is generic.
- Predefined generics appear in libraries like Axios, React (`useState<T>`, `useEffect`), etc.

### Generic Constraints (not shown but related)
- TS Docs: *"You can constrain a type parameter with `extends`: `function loggingIdentity<T extends Lengthwise>(arg: T): T`."*

---
