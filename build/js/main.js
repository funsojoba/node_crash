"use strict";
let username = "John";
console.log(username);
let a = 12;
let b = '6';
let c = 3;
console.log(a / c);
let myName = "Funso Joba";
myName = "32";
let bands;
let rand;
let evh = {
    name: "Kingly",
    active: true,
    album: ["my soul"]
};
const sum = (a, b) => {
    return a + b;
};
let year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
class Singer {
    constructor(name, workId) {
        this.name = name;
        this.workId = workId;
        this.getName = () => {
            return this.name + this.id;
        };
        // this.workId = workId
        this.name = name;
        this.workId = workId;
        this.id = ++Singer.count;
    }
}
// public workId: number
Singer.count = 0;
const Tunde = new Singer("Tunde", "1");
const Tolu = new Singer("Tolu", "1");
const Tide = new Singer("Tide", "1");
console.log(Tunde.getName());
console.log(Tunde.id);
console.log(Tide.id);
console.log(Tolu.id);
let names = ["David", "Tunde", "Mattew", "John"];
for (const el in names) {
    console.log("Hi, my name is " + names[el]);
}
