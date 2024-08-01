// for of 
// strings inside array 
// ["", "", ""];

// objects inside array 
// [{}, {}, {}];

// const array = [1, 2, 3, 4, 5];

// for (const num of array) {
//     console.log(num);
// }

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// maps 
// unique valus k liye jane jaate h ek value do baar repeat nhi hoga 
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

// console.log(map);
// this prnts one map in one array and separtes it 
// for (const key of map) {
//     console.log(key);
// }

// we have to change syntax for printing key and value in map 
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// object 
const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// for of loop dont work for objects 
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }



