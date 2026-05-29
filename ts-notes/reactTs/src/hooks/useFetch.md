---
tags: [typescript, react, hooks, generics]
topic: Custom Hook with Generics
status: done
---

# `useFetch.ts` — Generic Type-Safe Fetch Hook

**Source:** `typescript/reactTs/src/hooks/useFetch.ts`

## Code

```typescript
import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = (await response.json()) as T;
                setState({ data, loading: false, error: null });
            } catch (error) {
                if (error instanceof Error) {
                    if (error.name === "AbortError") return;
                    setState({ data: null, loading: false, error: error.message });
                }
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url]);

    return state;
}
```

## Breakdown

### Generic Hook (`useFetch<T>`)
- `T` specifies the shape of `data`.

> [!quote] TypeScript Docs (Generics)
> *"Generics allow you to create reusable components that work with a variety of types."*

### State Interface
| Field | Type | Meaning |
|-------|------|---------|
| `data` | `T \| null` | Fetched data or null |
| `loading` | `boolean` | In-flight indicator |
| `error` | `string \| null` | Error message |

### Type Assertion
- `(await response.json()) as T` — tells TS the shape.

### AbortController
- Cancels fetch on unmount. Checks `AbortError` to avoid updating unmounted state.

### `instanceof Error` Narrowing
- See [[typeNarrowing]] for narrowing patterns.

**See also:** [[generics]], [[typeNarrowing]], [[webReq]]
