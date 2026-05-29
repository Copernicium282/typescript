---
tags: [typescript, overview, fundamentals]
topic: TypeScript Overview & Compilation
status: done
---

# TypeScript Fundamentals — Overview

**Source:** `typescript/notes.txt`

## What is TypeScript?

> [!quote] TypeScript Docs
> *"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."*

- Superset of JS → compiles to plain JS
- Adds **static type checking** at compile time
- Never runs directly — the generated JS runs

## JS Limitations
- Freedom → unsafe code
- Loose documentation
- Poor developer tooling

## TS Advantages
- ✅ Type checking
- ✅ Code consistency
- ✅ Better editor tooling & AI suggestions

## Compilation Pipeline

```
TS Code →
  Lexer (tokenization + error checking) →
  Parser (creates AST) →
  Binder (symbol tables, parent pointers, flow nodes) →
  Checker (structural checking, 2-pass) →
  Emitter (generates .js + .d.ts, strips types)
```

## `.d.ts` Declaration Files
- Contain only type information (no runtime code)
- Types from libraries: `npm i -D @types/library-name` (DefinitelyTyped)
- If types unavailable, author a custom `.d.ts`

## Example Declaration
```typescript
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}
```

**See also:** [[tsconfig]], [[index]], [[typesInTS]]
