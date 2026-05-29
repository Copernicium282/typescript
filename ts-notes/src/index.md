---
tags: [typescript, basics, type-inference]
topic: TypeScript Fundamentals
status: done
---

# `index.ts` — Type Annotations & Functions

**Source:** `typescript/src/index.ts`

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
- `name: string` — declares `name` accepts only `string`.

> [!quote] TypeScript Docs
> *"When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts."*

- Calling `greet(42)` errors: `Argument of type 'number' is not assignable to parameter of type 'string'`

### Return Type Annotations
- `: string` after params declares the return type.

> [!quote] TypeScript Docs
> *"You usually don't need a return type annotation because TypeScript will infer the function's return type based on its return statements."*

### Variable Type Annotation
- `const username: string = "..."` — explicit annotation. TypeScript infers type from initializer in most cases.

> [!tip] Inference Usually Suffices
> `const username = "Chai aur typescript"` infers `string` without annotation.

**See also:** [[functionTS]], [[typesInTS]], [[typeNarrowing]]
