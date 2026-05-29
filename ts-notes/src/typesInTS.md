# `typesInTS.ts` — Type Inference & Annotations

> **Source:** `typescript/src/typesInTS.ts`

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
- `let drink = "chai"` — TypeScript infers `drink` as `string` from the initial value.
- `let cups = Math.random() > 0.5 ? 10 : '5'` — inferred as `number | string` (union) because the ternary returns either type.
- TS Docs: *"Wherever possible, TypeScript tries to automatically infer the types in your code. The type of a variable is inferred based on the type of its initializer."*

### Explicit Type Annotations
- `let chaiFlavour: string = "masala chai"` — forces the variable to type `string`. Reassigning to a non-string (e.g. `chaiFlavour = 42`) errors.

### Primitives
- TS Docs: JavaScript has three commonly used primitives: `string`, `number`, and `boolean`. *"Always use `string`, `number`, or `boolean` for types (lowercase)."*

---
