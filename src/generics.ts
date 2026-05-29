// Generics are used to make ur code reusable

function wrapInArray<T>(item: T): T[]{ // T has no Symbolic meaning, it can be any data type such as string, array
    return [item]
}
// Usage, usually in libraries and frameworks
wrapInArray("masala")
wrapInArray(42)
wrapInArray({flavour: "Ginger"})

function pair<A, B>(a: A, b: B): [A, B]{ // returns an array having a, b, where a is of dtype A and b is of dtype B
    return [a, b]
}
// Usage, usually in libraries and frameworks
pair("masala", "test")
pair("masala", 20)
pair("masala", {})

// Interfaces can also be made into generics
interface Box<T> {
    content: T
}
// Usage
const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

// Partial, Pick and Omit also work

// IRL usecases in API responses and form states in react, axios
interface APIpromise<T>{
    status: number,
    data: T
}
// usage
const res: APIpromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "masala"}
}

// Generics usually come predefined