# `useFetch.ts` — Custom Hook with Generics (React TS)

> **Source:** `typescript/reactTs/src/hooks/useFetch.ts`

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

### Generic Custom Hook
- `function useFetch<T>(url: string): FetchState<T>` — the generic `T` specifies the shape of fetched data.
- TS Docs: *"Generics allow you to create reusable components that work with a variety of types."*

### `useState` with Generic
- `useState<FetchState<T>>(...)` — React's `useState` accepts a type parameter. TS Docs: "React hooks are heavily typed with generics."

### `FetchState<T>` Interface
- `data: T | null` — data is either the generic type or `null` (before fetch completes).
- `loading: boolean` / `error: string | null` — explicit states for loading/error.

### Type Assertion
- `(await response.json()) as T` — asserts the parsed JSON matches type `T`. TS Docs: *"Type assertions tell the compiler 'trust me, I know what I'm doing.'"*

### AbortController
- `AbortController` + `abortController.signal` — cancels fetch on cleanup. `AbortError` check prevents state updates after unmount.

### Cleanup
- `return () => abortController.abort()` — useEffect cleanup prevents memory leaks.

---
