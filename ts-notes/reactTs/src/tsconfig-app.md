---
tags: [typescript, react, config, vite]
topic: React App tsconfig
status: done
---

# `tsconfig.app.json` — React App Config (Bundler Mode)

**Source:** `typescript/reactTs/tsconfig.app.json`

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
| `lib: ["ES2023", "DOM"]` | Browser + ES2023 types |
| `types: ["vite/client"]` | Vite client types (env, imports) |
| `moduleResolution: "bundler"` | Vite/bundler compatible resolution |
| `noEmit: true` | Vite handles compilation |
| `jsx: "react-jsx"` | New JSX transform (no `import React`) |
| `erasableSyntaxOnly` | Only erasable TS syntax |

**See also:** [[tsconfig]], [[tsconfig-node]], [[vite-config]]
