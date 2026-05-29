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

function isStringArray(arr: unknown): arr is string[]{ // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}