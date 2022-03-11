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

//arrow function

const friends = () => {
  const friend1: string = "khairul islam Tusar(Imran)";

  console.log(friend1);
};
friends();

//function declarations

function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(8, 6));

//Array methods
let fruits = ["apple", "orange", "banana"];
fruits.push("mango");
console.log(fruits);

let mixed = ["apple", 3, false];
mixed.push(true);
console.log(mixed);

//Object methods
let person = {
  name: "John",
  age: 65,
  isCaptain: false,
};

person.name = "Mashrafi";
person.isCaptain = true;

console.log(person);
