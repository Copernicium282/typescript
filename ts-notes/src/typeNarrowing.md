---
tags: [typescript, narrowing, type-guards]
topic: Type Narrowing & Guards
status: done
---

# `typeNarrowing.ts` — Type Narrowing, Guards, Custom Predicates

**Source:** `typescript/src/typeNarrowing.ts`

## Code

```typescript
function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} of chai` // kind is of type string
    }
    return `Chai order ${kind}` // kind is of type number
}

// Truthyness checking, i.e. checking if msg is returned or not and acting upon it
function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai ${msg}`
}

// Exhaustive checking based on types
function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `small cutting chai`
    }
    else if(size === "medium" || size === "large"){
        return `make extra chai`
    }

    return `chai order #${size}`
}

// TypeGuarding in different classes
class KulhadChai{
    serve(){
        return `serving kulhad chai`
    }
}

class CuttingChai{
    serve(){
        return `serving cutting chai`
    }
}

function serving(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve()
    }
    return chai.serve()
}

// Custom types
type ChaiOrder = {
    type: string
    sugar: number
}

// input obj is of any dtype but output obj is of ChaiOrder dtype
function isChaiOrder(obj: any): obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" && 
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} with ${item.sugar}` // item is of dtype ChaiOrder
    }
    return `Serving custom chai: ${item}` // item is of dtype string
}

// Types can also have custom types
type MasalaChai = {type: "masala"; spicelevel: number}
type ElaichiChai = {type: "elaichi"; amount: number}
type GingerChai = {type: "ginger"; aroma: number}

type Chai = MasalaChai | ElaichiChai | GingerChai

// switch statements in TS do not require break statements
function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `masala chai`
        case "elaichi":
            return `elaichi chai`
        case "ginger":
            return `ginger chai`
    }
    return `default cutting chai`
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        // returned when order is MasalaChai
        return `brewing masala level ${order.spicelevel}`
    } else {
        // returned when order is GingerChai
        return `brewing ginger aroma ${order.aroma}`
    }
}

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
```

## Narrowing Techniques

### `typeof` Narrowing
> [!quote] TypeScript Docs
> *"Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code."*

`typeof kind === 'string'` narrows `kind` to `string` in the `if` block.

### Truthiness Narrowing
- `if(msg)` — filters out `null`/`undefined`.

### Equality Narrowing
- `size === "small"` — comparing against a literal narrows the union.

### `instanceof` Narrowing
- `chai instanceof KulhadChai` — JS operator check.

### Custom Type Predicates
- `obj is ChaiOrder` — return type that acts as a type guard.

> [!quote] TypeScript Docs
> *"Functions returning boolean can have a type predicate. It takes the form `parameterName is Type`."*

### Discriminated Unions
- Each type has a literal `type` field (e.g., `"masala"`, `"elaichi"`, `"ginger"`). Switching/patter-matching on it narrows.

### `in` Operator Narrowing
- `"spicelevel" in order` — checks property existence, narrows to the containing type.

### Exhaustiveness
- `never` in a default case catches unhandled union members.

**See also:** [[unionAndAny]], [[interface]], [[moreTypes]], [[oop]]
