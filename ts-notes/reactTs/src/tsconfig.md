# `tsconfig.json` (React TS) — Project References

> **Source:** `typescript/reactTs/tsconfig.json`

## Config

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## Breakdown

### Project References
- TS Docs: *"Project references allow a TypeScript program to be split into smaller pieces."*
- The main config uses `files: []` (no direct compilation) and delegates to referenced sub-configs.
- `tsconfig.app.json` — for the React app source (`src/`)
- `tsconfig.node.json` — for Node-side config files (`vite.config.ts`)

---
