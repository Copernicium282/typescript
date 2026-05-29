---
tags: [typescript, react, config, node]
topic: Node Config tsconfig
status: done
---

# `tsconfig.node.json` — Node-Side Config

**Source:** `typescript/reactTs/tsconfig.node.json`

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

## Differences from `tsconfig.app.json`

| Aspect | `app.json` | `node.json` |
|--------|-----------|-------------|
| `lib` | + `"DOM"` | `"ES2023"` only |
| `types` | `["vite/client"]` | `["node"]` |
| Scope | `src/` | `vite.config.ts` |

**See also:** [[tsconfig-app]], [[tsconfig]], [[vite-config]]
