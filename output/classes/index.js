console.log("Hello Developer,I live in Bangladesh");
//number
const num1 = 5;
const num2 = 10;
const result = num1 + num2;
console.log("result:", result);
//string
const name1 = " Md. Mahfuz";
const name2 = " Alam";
const fullName = name1 + name2;
console.log("fullName:", fullName);
//Array methods
let fruits = ["apple", "orange", "banana"];
fruits.push("mango");
console.log(fruits);
let mixed = ["apple", 3, false];
mixed.push(true);
console.log(mixed);
//array methods
let num = [];
num.push("mango");
num.push(25);
num.push("apple");
num.push(80);
console.log(num);
//Object methods
let person = {
    name: "John",
    age: 65,
    isCaptain: false,
};
person.name = "Mashrafi bin mortuza";
person.isCaptain = true;
console.log(person);
//Object
let people;
people = {
    name: "mahfuz",
    age: 25,
    adult: true,
};
console.log(people);
//any type of array
let a = [];
a.push("bangladesh");
a.push(34);
a.push(true);
console.log(a);
//any type of Object
let cricketer;
cricketer = {
    name: "sakib all hasan",
    age: 35,
    country: "bangladesh",
};
console.log(cricketer);
//function declarations
function multiply(a, b) {
    return a * b;
}
console.log(multiply(8, 6));
//function[c value optional]
const myFunc = (a, b, c) => {
    console.log(`${a},${b}`);
};
myFunc("Hello", "World");
//function [c value default]
const myFunction = (a, b, c = "bangladesh") => {
    console.log(`${a},${b} ${c}`);
};
myFunction("I", "Love");
//return type function
const isFunc = (a, b, c = "true") => {
    console.log(a + b);
    return a + b;
};
isFunc(4, 5);
let userDetails = (id, user) => {
    console.log(`User id is ${id},name: ${user.name},age: ${user.age}`);
};
userDetails(5, {
    name: "Ahmed Hridoy",
    age: 80,
});
let sayHello = (user) => {
    // console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
sayHello({
    name: "Taki Kauser",
    age: 55,
});
//function signature
let addNumber;
addNumber = (a, b) => {
    return a + b;
};
console.log(addNumber(10, 50));
let calculate;
calculate = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculate(20, 5, "minus"));
const sakib = new player("sakib all hasan", 36, "Bangladesh");
const mashrafi = new player("mashrafi bin mortuza", 39, "bangladesh");
const babar = new player("babar azom", 26, "pakistan");
const osman = new player("osman kajha", 29, "australia");
osman.age = 30;
//private property not be access and modified
// osman.name = "Md. Osman Kajha";
//readonly property only access not be modified
// osman.country = "england";
//public property anytime access and modified
console.log(sakib.country);
console.log(osman.country);
const players = [];
players.push(babar);
players.push(osman);
players.push(mashrafi);
players.push(sakib);
export {};
