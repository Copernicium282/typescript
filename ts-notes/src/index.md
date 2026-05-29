# `index.ts` — TypeScript Basics: Functions & Type Annotations

> **Source:** `typescript/src/index.ts`

## Code

```typescript
function greet(name: string): string {
    return `Hello, welcome to ${name}`
}

const username: string = "Chai aur typescript"
console.log(greet(username));
```

## Breakdown

### Parameter Type Annotations
- `name: string` — declares `name` accepts only `string`. From TS Docs: *"When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts."*
- TypeScript ensures arguments passed match declared types — e.g. calling `greet(42)` would error: *"Argument of type 'number' is not assignable to parameter of type 'string'."*

### Return Type Annotations
- `: string` after params declares the return type. TS Docs: *"You usually don't need a return type annotation because TypeScript will infer the function's return type based on its return statements."*

### Variable Type Annotation
- `const username: string = "..."` explicitly annotates the variable. TS Docs: *"You can optionally add a type annotation to explicitly specify the type of the variable. Type annotations go after the thing being typed."*
- In most cases inference suffices — `const username = "Chai aur typescript"` would infer `string` without annotation.

---
