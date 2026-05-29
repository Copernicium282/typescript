let numOfSubs: number | string = '1M' // union

// Use Cases : while interacting with an API, there can be custom dtypes for status
let apiReqStatus: "pending" | "success" | "error" = "pending"
// Now, it cannot be overrided using any other string/dtype other than these 3

let planeSeat: "aisle" | "middle" | "window" = "aisle"

const orders = ['12', '20', '30', '28']
// Avoid (: any) dtype to the maximum extent possible
// (: unknown) dtype can be used during init as it is somewhat more safer than (: any)
let currentorder: string | undefined // without undefined, it complains in the end that the var is being used before being assigned

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
}

console.log(currentorder) // string | undefined