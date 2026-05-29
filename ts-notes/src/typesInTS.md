---
tags: [typescript, basics, type-inference]
topic: Type Inference & Annotations
status: done
---

# `typesInTS.ts` — Type Inference & Annotations

**Source:** `typescript/src/typesInTS.ts`

## Code

```typescript
let drink = "chai"
let cups = Math.random() > 0.5 ? 10 : '5' // cups: number | string

// Type annotation
let chaiFlavour: string = "masala chai"
chaiFlavour = "ginger tea" //  can be overrided, but not with a different datatypes
```

## Breakdown

### Type Inference
- `let drink = "chai"` → inferred as `string`.
- `let cups = Math.random() > 0.5 ? 10 : '5'` → inferred as `number | string` ([[unionAndAny|union]]).

> [!quote] TypeScript Docs
> *"Wherever possible, TypeScript tries to automatically infer the types in your code."*

### Explicit Annotations
- `let chaiFlavour: string = "masala chai"` — reassigning to non-string errors.

### Primitives

| Type | Values |
|------|--------|
| `string` | `"hello"`, `'world'` |
| `number` | `42`, `3.14` |
| `boolean` | `true`, `false` |

> [!quote] TypeScript Docs
> *"Always use `string`, `number`, or `boolean` for types (lowercase)."*

**See also:** [[index]], [[unionAndAny]], [[moreTypes]]
