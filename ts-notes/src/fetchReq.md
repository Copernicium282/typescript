---
tags: [typescript, fetch, api]
topic: Fetch API with TypeScript
status: done
---

# `fetchReq.ts` — Type-Safe Fetch

**Source:** `typescript/src/fetchReq.ts`

## Code

```typescript
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async ()=> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }

        const data: Todo = await response.json()
    } catch (error: any) {
        
    }
}
```

## Breakdown

### `response.json()` Typing
- `const data: Todo = await response.json()` — `response.json()` returns `Promise<any>`. The annotation asserts the shape. Alternative: `as Todo`.

### Response Validation
- `if(!response.ok)` — checks HTTP 200-299 before parsing.

> [!tip] Use `error instanceof Error`
> `catch (error: any)` skips type safety. Narrow with `instanceof Error` instead. See [[typeNarrowing]].

**See also:** [[webReq]], [[generics]], [[typeNarrowing]]
