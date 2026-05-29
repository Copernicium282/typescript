---
tags: [typescript, oop, classes]
topic: Object-Oriented Programming & Classes
status: done
---

# `oop.ts` — Classes, Access Modifiers, Abstract Classes

**Source:** `typescript/src/oop.ts`

## Code

```typescript
class Chai {
    flavour: string; // Property 'flavour' has no initializer and is not definitely assigned in the constructor, incase constructor is not used.
    price: number;

    constructor(flavour: string, price: number){
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("masala", 20)
masalaChai.flavour = "masala"

// public, private and protected
class ChaiDef {
    public flavour: string = "Masala"
    private secretIngredient = "Cardamom"
    
    reveal(){
        return this.secretIngredient
    }
}

const c = new ChaiDef()
c.reveal() // secretIngredient is not directly accessible

class Shop {
    protected shopName = "Chai corner" // this is accessible only in this class and classes inheriting this
}

class Branch extends Shop { 
    getname(){
        return this.shopName
    }
}
new Branch().getname

// another implementation of private
class Wallet {
    #balance = 20

    getBalance(){
        return this.#balance
    }
}
new Wallet().getBalance

// readonly properties
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// getters and setters
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value: number){
        if (value > 5) throw new Error("too sweet")
        this._sugar = value
    }
}
const c2 = new ModernChai()
c2.sugar = 3

// static members
class EkChai {
    static ShopName = "Chaicode cafe"
    constructor(public flavour: string){}
}
console.log(EkChai.ShopName) // directly accessible via class instead of object

// abstract classes
abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    // Non-abstract class 'MyChai' does not implement inherited abstract member make from class 'Drink', if the functions in abstract classes are not implemented
    make(): void {
        console.log("Brewing Chai")
    }
}

// Composition (alternative of inheritance)
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}
```

## Access Modifiers

| Modifier | Scope | Runtime? |
|----------|-------|----------|
| `public` (default) | Anywhere | ❌ TS-only |
| `private` | Same class | ❌ TS-only |
| `protected` | Class + subclasses | ❌ TS-only |
| `#field` (ES private) | Same class | ✅ Real JS private |

> [!quote] TypeScript Docs
> *"TypeScript offers full support for the `class` keyword introduced in ES2015."*

## Other Features

| Feature | Example | Note |
|---------|---------|------|
| Parameter properties | `constructor(public flavour: string)` | Declares + assigns |
| `readonly` | `readonly capacity: number` | Init-only assign |
| Getters/Setters | `get sugar()` / `set sugar()` | With validation |
| `static` | `static ShopName` | Class-level, no instance |
| Abstract classes | `abstract class Drink` | Must be extended |
| Composition | `ChaiMaker` takes `Heater` | Prefer over inheritance |

> [!tip] Composition > Inheritance
> See `ChaiMaker` taking `Heater` via constructor — flexible, testable.

**See also:** [[interfacePt2]], [[interface]]
