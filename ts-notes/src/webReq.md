---
tags: [typescript, axios, api, generics]
topic: Axios with TypeScript
status: done
---

# `webReq.ts` — Type-Safe API Calls with Axios

**Source:** `typescript/src/webReq.ts`

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

### Type-only Import
- `import type { AxiosResponse }` — erased at runtime.

> [!quote] TypeScript Docs
> *"`type` modifier on an import tells the compiler that this is a type-only import."*

### Generic Response Typing
- `AxiosResponse<Todo>` — `response.data` is typed as `Todo`.

### Axios Error Guards
- `axios.isAxiosError(error)` — narrows to Axios error type, enabling access to `error.response.status`.

**See also:** [[fetchReq]], [[generics]]
