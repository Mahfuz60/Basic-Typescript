console.log("Hello Developer,I live in Bangladesh");
//number
const num1: number = 5;
const num2: number = 10;
const result: number = num1 + num2;
console.log("result:", result);

//string

const name1: string = " Md. Mahfuz";
const name2: string = " Alam";
const fullName: string = name1 + name2;
console.log("fullName:", fullName);

//Array methods
let fruits = ["apple", "orange", "banana"];
fruits.push("mango");
console.log(fruits);

let mixed = ["apple", 3, false];
mixed.push(true);
console.log(mixed);

//array methods

let num: (string | number)[] = [];
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
let people: {
  name: string;
  age: number;
  adult: boolean;
};
people = {
  name: "mahfuz",
  age: 25,
  adult: true,
};
console.log(people);

//any type of array
let a: any[] = [];
a.push("bangladesh");
a.push(34);
a.push(true);
console.log(a);

//any type of Object

let cricketer: {
  name: any;
  age: any;
  country: any;
};

cricketer = {
  name: "sakib all hasan",
  age: 35,
  country: "bangladesh",
};
console.log(cricketer);

//function declarations

function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(8, 6));

//function[c value optional]
const myFunc = (a: string, b: string, c?: string) => {
  console.log(`${a},${b}`);
};
myFunc("Hello", "World");

//function [c value default]
const myFunction = (a: string, b: string, c: string = "bangladesh") => {
  console.log(`${a},${b} ${c}`);
};
myFunction("I", "Love");

//return type function

const isFunc = (a: number, b: number, c: string = "true") => {
  console.log(a + b);
  return a + b;
};

isFunc(4, 5);

//Aliases Type
type idType = number | string;
type userType = { name: string; age: number };

let userDetails = (id: idType, user: userType) => {
  console.log(`User id is ${id},name: ${user.name},age: ${user.age}`);
};

userDetails(5, {
  name: "Ahmed Hridoy",
  age: 80,
});

let sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
sayHello({
  name: "Taki Kauser",
  age: 55,
});

//function signature
let addNumber: (a: number, b: number) => number;

addNumber = (a: number, b: number) => {
  return a + b;
};
console.log(addNumber(10, 50));

let calculate: (a: number, b: number, c: string) => number;
calculate = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else  {
    return a - b;
  }
};
console.log(calculate(20, 5, "minus"));
