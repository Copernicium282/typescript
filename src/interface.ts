type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serveChai(order: ChaiOrder){
    console.log(order)
}

interface TeaRecipe{
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe{
    water = 100
    milk = 50
}

// type CupSize = "small" | "large"
// class Chai implements CupSize{} // A class can only implement an object type or intersection of object types with statically known members.

// To fix this, we use interfaces, whose syntax is a little different from literal types
interface CupSize{
    size: "small" | "large"
}
class Chai implements CupSize{
    size: "small" | "large" = "large"
}

type TeaType = "masala" | "ginger" | "lemon" // Union
function orderChai(t: TeaType){
    console.log(t)
}

type BaseChai = {teaLeaves: number}
type Extra = {aroma: number}

type GingerChai = BaseChai & Extra // Intersection

const cup: GingerChai = {
    teaLeaves: 2,
    aroma: 1
}

// Optional types addition during creation of custom datatypes
type User = {
    username: string,
    bio?: string
}
const u1: User = {username: "Amit"}
const u2: User = {username: "Amit", bio: "Copernicium282.github.io"}

// Type Modifiers
type Config = {
    readonly appName: string,
    version: number
}

// Initialiation
const cfg: Config = {
    appName: "Masterji",
    version: 1
}

cfg.version = 2 // changeable
// cfg.appName = "Newapp" // Cannot assign to 'appName' because it is a read-only property.