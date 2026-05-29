---
tags: [typescript, config, tsconfig]
topic: TypeScript Compiler Configuration
status: done
---

# `tsconfig.json` (Root) — Compiler Options

**Source:** `typescript/tsconfig.json`

## Config

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "nodenext",
    "target": "esnext",

    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## Key Options

> [!quote] TypeScript Docs
> *"The tsconfig.json file specifies the root files and the compiler options required to compile the project."*

| Option | Effect |
|--------|--------|
| `rootDir` | Input source root |
| `outDir` | Output directory |
| `module: "nodenext"` | Node.js ESM/CJS resolution |
| `target: "esnext"` | Latest ECMAScript |
| `sourceMap` | `.js.map` for debugging |
| `declaration` | Emit `.d.ts` files |
| `strict: true` | All strict checks enabled |
| `noUncheckedIndexedAccess` | Index access → `T \| undefined` |
| `exactOptionalPropertyTypes` | `?` props can't have explicit `undefined` |
| `verbatimModuleSyntax` | Preserve import syntax |
| `isolatedModules` | Safe for transpilers (Vite, Babel) |
| `skipLibCheck` | Skip `.d.ts` checking (faster) |

**See also:** [[notes]], [[tsconfig-app]], [[tsconfig-node]]
