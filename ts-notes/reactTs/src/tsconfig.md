---
tags: [typescript, react, config, references]
topic: Root React tsconfig with Project References
status: done
---

# `tsconfig.json` (React TS) — Project References

**Source:** `typescript/reactTs/tsconfig.json`

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

> [!quote] TypeScript Docs
> *"Project references allow a TypeScript program to be split into smaller pieces."*

- `files: []` — no direct compilation
- Delegates to [[tsconfig-app]] (React app) and [[tsconfig-node]] (config files)

**See also:** [[tsconfig]], [[tsconfig-app]], [[tsconfig-node]]
