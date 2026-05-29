# `fetchReq.ts` — Fetch API with TypeScript

> **Source:** `typescript/src/fetchReq.ts`

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

### Type Annotations for `fetch`
- `const data: Todo = await response.json()` — `response.json()` returns `Promise<any>`. Type annotation asserts the shape.
- Type assertion alternative: `const data = await response.json() as Todo`.

### Response Validation
- `if(!response.ok)` — checks HTTP status before parsing. The `ok` property is `true` for status 200-299.

### Error Handling
- `catch (error: any)` — `error` in `catch` defaults to `unknown`. Using `any` skips type checking — prefer `error instanceof Error` narrowing.

---
