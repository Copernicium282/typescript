# `oop.ts` — Classes, Access Modifiers, Getters/Setters, Abstract Classes, Composition

> **Source:** `typescript/src/oop.ts`

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

## Breakdown

### Class Property Declarations
- TS requires properties to be declared and initialized (in constructor or inline). TS Docs: *"TypeScript offers full support for the `class` keyword."*

### Access Modifiers

| Modifier | Access |
|----------|--------|
| `public` (default) | Anywhere |
| `private` | Only within the class |
| `protected` | Within the class and subclasses |

### ECMAScript `#` Private Fields
- `#balance` — native JS private fields (`#` prefix). Hard private (enforced at runtime, not just TS compile-time).

### `readonly`
- `readonly capacity: number` — can only be assigned during declaration or in constructor.

### Getters/Setters
- `get sugar()` / `set sugar(value)` — accessor methods. TS Docs: *"TypeScript supports getters/setters as a way of intercepting accesses to a member of an object."*
- Setter can include validation logic.

### Parameter Properties
- `constructor(public flavour: string)` — shorthand that both declares and assigns a property. Saves boilerplate.

### `static` Members
- `static ShopName` — accessed on the class itself, not instances. TS Docs: *"Static members are visible on the class itself rather than on the instances."*

### Abstract Classes
- `abstract class Drink` — cannot be instantiated directly. TS Docs: *"Abstract classes are base classes from which other classes may be derived."*
- `abstract make(): void` — subclasses must implement.

### Composition over Inheritance
- `ChaiMaker` takes a `Heater` via constructor. TS Docs: *"Favor composition over inheritance"* is a common OOP design pattern.

---
