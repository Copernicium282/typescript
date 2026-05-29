# `tsconfig.app.json` — React App TypeScript Config (Bundler Mode)

> **Source:** `typescript/reactTs/tsconfig.app.json`

## Config

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## Key Options

| Option | Purpose |
|--------|---------|
| `lib: ["ES2023", "DOM"]` | Include type definitions for ES2023 and browser DOM |
| `types: ["vite/client"]` | Include Vite's client-side type definitions |
| `moduleResolution: "bundler"` | Module resolution strategy compatible with bundlers (Vite) |
| `allowImportingTsExtensions` | Allow `.ts`/`.tsx` extensions in imports |
| `noEmit: true` | Don't emit compiled JS — bundler handles it |
| `jsx: "react-jsx"` | Use the new JSX transform (no need to `import React`) |
| `noUnusedLocals` | Error on unused local variables |
| `noUnusedParameters` | Error on unused function parameters |
| `erasableSyntaxOnly` | Only allow TS syntax that can be erased (no enums/namespaces) |

---
