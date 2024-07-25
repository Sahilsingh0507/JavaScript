// Data Type 
// Primitive
// call by value not by reference 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
// let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// bigint 
const bigNumber = 1664466164464464646156648949165156498489n;


// in typescript we have to define datatype also 
// const score:number = 100;


// Reference type (or) Non Primitive data type 

// Arrray, Objects , Functions 

// array 
const heroes = ["shaktimaan", "naagraj", "doga"];

// objects 
let myObj = {
    name: "sahil",
    age: "22",
}


// function 
const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heroes);
// console.log(typeof anotherId);


// memory 
// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom";
// let anotherName = myYoutubeName;
let anotherName = "ChaiaurCode";
console.log(myYoutubeName);
console.log(anotherName);


// in heap we give the memory location not the copy of the data so if we change data in other it will change the original value 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "sahil@google.com";

console.log(userOne.email);
console.log(userTwo.email);
