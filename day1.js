// Day 1: Variables and Data Types
// Activity 1: Variable Declaration
// Task 1
var height=50;
console.log("My current height is:",height);

// Task 2
let Name ="Pinnacle";
console.log("My Name is :",Name);

// Activity 2:Constant Declaration
// Task 3
const task3=true
console.log(task3);

// Activity 3: Data Types
// Task 4
let height2=2
console.log(typeof(height));

let Name2="alpha"
console.log(typeof(Name2));

let value=false
console.log(typeof(value));

let object={
    language:"Javascript",
    day:1
}
console.log(typeof(object));

let arr=["10","20","30","40"]
console.log(typeof(arr));

// Activity 4:Reassigning Variables
// Task 5
let color="green";
color="black"
console.log(color)

// Activity 5: Understanding const
// Task 6
// const email="abc@google.com";
// email="xyz@yahoo.com"
// console.log(email);

// Feature Request
// 1
// Declare variables of Different data types
let num=81;
let str="Namaste";
let bool=true;
let array = [1, 2, 3, 4, 5];
let obj={
    name:"pineapple",
    age:5
};
let und;
let nul = null;
let sym = Symbol("symbol");

// Log the value and type of each variable to the console
console.log(`Value: ${str}, Type: ${typeof str}`);
console.log(`Value: ${num}, Type: ${typeof num}`);
console.log(`Value: ${bool}, Type: ${typeof bool}`);
console.log(`Value: ${obj}, Type: ${typeof obj}`);
console.log(`Value: ${array}, Type: ${typeof array}`);
console.log(`Value: ${und}, Type: ${typeof und}`);
console.log(`Value: ${nul}, Type: ${typeof nul}`);
console.log(`Value: ${sym.toString()}, Type: ${typeof sym}`);

// 2
// let bike="HONDA";
// bike="hero"

// console.log(bike);

const bike="HONDA";
bike="hero"

console.log(bike);

// Variables declared with let can be reassigned.
// Variables declared with const cannot be reassigned, and attempting to do so will result in a TypeError.






