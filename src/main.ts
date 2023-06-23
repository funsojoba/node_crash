let username = "John"
console.log(username)


let a = 12
let b = '6'
let c = 3

console.log(a/c)

let myName :string = "Funso Joba"

myName = "32"

let bands: string[]
let rand: any[]


// type
type Guiterist = {
    name: string,
    active: boolean,
    album: (string | number)[]
}

interface Transaction {
    name: string,
    age: number,
    date: Date
}


let evh: Guiterist = {
    name: "Kingly",
    active: true,
    album: ["my soul"]
}

interface GuiteristTwo {
    name: string,
    age?: number,
    active: boolean,
    album: any[]
}


const sum = (a: number, b:number) =>{
    return a + b
}


let year = document.getElementById("year") as HTMLSpanElement
let thisYear: string = new Date().getFullYear().toString()

year.setAttribute("datetime", thisYear)
year.textContent = thisYear


class Singer {
    // public workId: number
    static count: number = 0
    public id: number

    constructor(public name:string, public workId: string) {
        // this.workId = workId
        this.name = name
        this.workId = workId
        this.id = ++Singer.count
    }

    getName = ()=>{
        return this.name + this.id
    }
}


const Tunde = new Singer("Tunde", "1")
const Tolu = new Singer("Tolu", "1")
const Tide = new Singer("Tide", "1")

console.log(Tunde.getName())
console.log(Tunde.id)
console.log(Tide.id)
console.log(Tolu.id)


let names: string[] = ["David", "Tunde", "Mattew", "John"]

for (const el in names){
    console.log("Hi, my name is "+ names[el])
}


// Index Signature

interface TransactionToday {
    [index: string]: number
}