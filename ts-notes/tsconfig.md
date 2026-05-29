# `tsconfig.json` (Root) — TypeScript Compiler Configuration

> **Source:** `typescript/tsconfig.json`

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

## Key Options (from TS Docs)

| Option | Purpose |
|--------|---------|
| `rootDir` | Root directory of input source files |
| `outDir` | Output directory for compiled JS |
| `module: "nodenext"` | Node.js module resolution (ESM/CJS aware) |
| `target: "esnext"` | Target ECMAScript version |
| `sourceMap` | Generate `.js.map` source maps |
| `declaration` | Generate `.d.ts` declaration files |
| `declarationMap` | Generate `.d.ts.map` source maps |
| `strict: true` | Enable all strict type-checking options |
| `noUncheckedIndexedAccess` | Accessing index signature properties yields `T | undefined` |
| `exactOptionalPropertyTypes` | Optional properties can't have `undefined` explicitly assigned |
| `verbatimModuleSyntax` | Preserve import/export syntax as-is (no elision) |
| `isolatedModules` | Ensure each file can be transpiled independently |
| `moduleDetection: "force"` | Treat all files as modules |
| `skipLibCheck` | Skip type-checking `.d.ts` files (faster compilation) |

---
