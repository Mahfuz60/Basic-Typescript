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
  // console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
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
  } else {
    return a - b;
  }
};
console.log(calculate(20, 5, "minus"));

//classes(module system)
import { player } from "./classes/players.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

//interface classes used property
let sakib: IsPlayer;
sakib = new player("sakib all hasan", 36, "Bangladesh");
//

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

const players: IsPlayer[] = [];
players.push(babar);
players.push(osman);
players.push(mashrafi);
players.push(sakib);

//interface
interface recTangleOption {
  width: number;
  length: number;
}

function drawRectangle(options: recTangleOption) {
  let width = options.width;
  let length = options.length;
}

let twoDOptions = {
  width: 20,
  length: 30,
};
let threeDOptions = {
  width: 20,
  length: 30,
  height: 20,
};
drawRectangle(twoDOptions);
drawRectangle(threeDOptions);

//Generics
//T detect this type of data
const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
let user = addID({
  name: "Tamim",
  age: 40,
  country: "Bangladesh",
});

console.log(addID(user));

//interface and Generics

interface ApiResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: ApiResponse<string> = {
  status: 200,
  type: "good",
  data: "test case",
};

console.log(response1);

//ENUMS used Generics
enum ResponseType {
  SUCCESS,
  FAILURE,
  AUTHENTICATION,
  FORBIDDEN,
  ERROR,
}

interface ApiResponse2<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const response2: ApiResponse2<string> = {
  status: 200,
  type: ResponseType.SUCCESS,
  data: "authentication",
};

console.log(response2);
