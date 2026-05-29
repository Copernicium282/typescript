# `webReq.ts` — Axios with TypeScript

> **Source:** `typescript/src/webReq.ts`

## Code

```typescript
// Axios is used for interacting with webRequests and webResponses
import axios from "axios";
import type {AxiosResponse} from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async ()=> {
    try {
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("Todo", response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)){
            console.log("Axios error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}
```

## Breakdown

### Importing Types
- `import type { AxiosResponse } from "axios"` — `import type` is a TS-only import that is erased at runtime. TS Docs: *"`type` modifier on an import tells the compiler that this is a type-only import."*

### Generic Response Typing
- `AxiosResponse<Todo>` — Axios' response type is generic. `response.data` is typed as `Todo`.
- TS Docs (Generics): *"This pattern is common in libraries where the user specifies the shape of the response data."*

### Axios Error Handling
- `axios.isAxiosError(error)` — type guard that narrows `error` to Axios-specific error type.
- `error.response.status` — only accessible after narrowing.

### `async` Return Type
- TS Docs: *"If you want to annotate the return type of a function which returns a promise, use `Promise<T>`: `async function getData(): Promise<Todo>`"*

---
