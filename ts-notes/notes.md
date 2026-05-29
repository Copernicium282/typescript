# `notes.txt` — TypeScript Fundamentals Overview

> **Source:** `typescript/notes.txt`

## Content

```
TS is an extension of JS that focuses on types/data types

JS limitations:
Freedom leads to unsafe code
Loose Docs
Developer Tooling issues, AI issues

TS never runs, it undergoes a process and the end-generated JS is ran
TS Advantages:
Type Checking
Code Consistency

How It Works:
TS Code -> 
Lexer (tokenization and error checking) -> 
Parser (creates an Abstract Syntax Tree, aka keywords+data tree) -> 
Binder (Creates specialized symbol tables, parent pointers(child to parent nodes linkage), Flow nodes) -> 
Checker (repeats twice, structural checking and _ checking, checks if types are properly matched in defn and init, basically does syntax check and short circuits for repeated init vars) -> 
Emitter (Generates .js, .d.ts files and omits types)

types are inferenced easily for almost all datatypes from JS, and can even tell if 2 different data types can be returned during init

TS gives hints and errors using type declarations, which are in .d.ts declaration files
some files have reference files that take and keep references of other files

eg:
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
}

usually only have interfaces defined for various type declarations
when installing some package, eg: npm i some-library, incase type declarations are not available, then usually executing npm i -D @types/some-library can get the types for that library. Incase not available, make a new .d.ts file using docs of that library
```

## Breakdown

### What is TypeScript?
- TS Docs: *"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."*
- TS is a **superset** of JS that compiles to plain JS. It adds static type checking.

### Compilation Pipeline
1. **Lexer** — tokenizes source code into tokens
2. **Parser** — builds an Abstract Syntax Tree (AST)
3. **Binder** — creates symbol tables, parent pointers, flow nodes
4. **Checker** — performs structural type checking (two passes)
5. **Emitter** — generates `.js` and `.d.ts` (declaration) files, strips type annotations

### Type Declarations (`.d.ts`)
- `.d.ts` files contain only type information (no runtime code).
- TS Docs on `@types`: *"You can get type declarations for many libraries through `@types/` scope packages via DefinitelyTyped."*

### DefinitelyTyped
- When a library doesn't ship its own types, community-maintained types are available as `@types/library-name`.

---
