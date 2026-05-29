---
tags: [typescript, react, composition]
topic: React App — Component Composition
status: done
---

# `App.tsx` — Parent Component

**Source:** `typescript/reactTs/src/App.tsx`

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

## Key Points

- `menu: Chai[]` — typed array checked against the [[types]] interface.
- Props on all child components are **type-checked** against their interfaces.
- `onSubmit={(order) => ...}` — `order` inferred via **contextual typing** from `OrderFormProps`.

> [!quote] TypeScript Docs
> *"The context that a function occurred within informs what type it should have."*

**See also:** [[main]], [[ChaiList]], [[OrderForm]], [[Card]], [[ChaiCard]], [[counter]]
