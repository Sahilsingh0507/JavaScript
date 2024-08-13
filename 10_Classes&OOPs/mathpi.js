// console.log(Math.PI);
// // you cannot overwrite the value of Math.PI 
// Math.PI = 5;
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);


// const mynewObject = Object.create(null);
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nahi bani");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// if you want to change property of the above object 
// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// iske object me kuch error aa raha hai 
// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);
// }


for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    // console.log(`${key} : ${value}`);
}