// interface gives shape to your data/object, are 70-80% interchangable with types in most of the cases
interface Chai {
    flavour: string;
    price: number;
    milk?: boolean
}

const masalaChai: Chai = {
    flavour: "Masala chai",
    price: 20
}

// readonly properties
interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {id: 1, name: "Chaicode caffe"}
// s.id = 2 // Cannot assign to 'id' because it is a read-only property.

// methods/functions using interfaces
interface DiscountCalculator{
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p*0.5 // usage in func

interface teaMachine{
    start(): void;
    stop(): void
}
const machine: teaMachine = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}

// index signatures
interface ChaiRatings {
    [flavour: string]: number
}
// usage
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

// from say some library
interface User { 
    name: string
}
// dev-defined interface
interface User {
    age: number
}

// interfaces get merged and both need to be satisfied
const u: User = {
    name: "Amit",
    age: 19
}

// interfaces can be extended
interface A {a: string}
interface B {b: string}
interface C extends A,B {}