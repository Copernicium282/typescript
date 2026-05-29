function MakeChai(type: string, cups: number){ // input types usage
    console.log(`Making ${cups} cups of type ${type}`)
}

MakeChai("masala chai", 2)

function getChaiPrice(): number{ // output type usage
    return 25
}

function makeOrder(order: string): string | null{
    if(!order) return null
    return order
}

function logChai(): void{ // When function returns no data
    console.log("Chai is ready")
}

// Optional and Default dtype
function orderChai1(type?: string){ // Optional
}

function orderChai2(type: string = "Masala"){ // Default
}

function createChai(order: { // custom/complex dtype
    type: string;
    sugar: number;
    size: "small" | "large"
}){
    return 2;
}
