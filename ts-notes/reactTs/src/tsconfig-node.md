# `tsconfig.node.json` — Node/Config TypeScript Config

> **Source:** `typescript/reactTs/tsconfig.node.json`

## Config

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## Key Differences from `tsconfig.app.json`

- `lib: ["ES2023"]` — no DOM types (Node.js context)
- `types: ["node"]` — Node.js type definitions instead of Vite client types
- Only includes `vite.config.ts` (Node-side config file), not the React `src/`

---
