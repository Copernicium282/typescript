# `App.tsx` — Parent Component with Typed Data & Props

> **Source:** `typescript/reactTs/src/App.tsx`

## Code

```typescript
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { Counter } from './components/counter'
import { OrderForm } from './components/OrderForm'
import { Card } from './components/Card'

import type { Chai } from './types/types'

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]

function App() {
  return (
    <>
      <div>
        <ChaiCard name='Headphones' price={5000} />
        <ChaiCard name='Iphone' price={80000} />
      </div>
      <br></br>
      <div>
        <Counter />
      </div>
      <br></br>
      <div>
        <ChaiList items={menu} />
      </div>
      <br></br>
      <div>
        <OrderForm
        onSubmit={(order) => {
          console.log("Placed", order.name, order.cups)
        }}
        />
      </div>
      <br></br>
      <div>
        <Card
        title='Chai aur Typescript'
        footer={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
```

## Breakdown

### Typed Array Declaration
- `const menu: Chai[] = [...]` — typed array of `Chai` objects. Each element must match the `Chai` interface.

### Component Composition
- All components are composed in `App`. Props are type-checked against their respective prop interfaces.

### Inline Callback
- `onSubmit={(order) => { ... }}` — TS infers `order` type from `OrderFormProps.onSubmit`. This is **contextual typing** — TS Docs: *"The context that the function occurred within informs what type it should have."*

### `footer` as `ReactNode`
- `footer={<button>Order Now</button>}` — passing JSX as a prop of type `ReactNode`.

---
