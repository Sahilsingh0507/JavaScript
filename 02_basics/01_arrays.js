// ARRAYS 

const myArr = [0, 1, 2, 3, 4, 5];

// accessing an array in js 
// console.log(myArr[0]);

const myHeros = ["shaktimaan", "naagraj"];

// the square brackets are added by default if you declare an array like this 
const myArr2 = new Array(1, 2, 3, 4);


// ARRAY METHODS 

// this add the element at the last index of the array 
// myArr.push(6);
// myArr.push(7);
// print whole array
// console.log(myArr);

// pop simply removes the element at the last index of the array 
// myArr.pop();
// console.log(myArr);

// unshift method add the element at index 0 all the elements in the array need to be shifted by 1 index 
// this is a bad practice because if there are 10000 elements we need to shift the position of 10000 elements 
// myArr.unshift(9);
// console.log(myArr);

// this removes the element at the index 0 of an array and all the element sget shifted by on eto their left side 
// myArr.shift();
// console.log(myArr);

// there are some questionare in array which gives value in true or false 
// include function gives us that the particular element is present in array or not
// console.log(myArr.includes(9));

// index of gives the value in int not in Boolean 
// if not present this gives value as -1 
// gives the index at which the element is present pass argument is element of array not argument 
// console.log(myArr.indexOf(9));


// join function converts the array into string 
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


// slice and splice 
console.log("A", myArr);

// using slice function in array 
// slice creats a sub array including first index argument given and last argument excluded and doesnot change the original array 
const myn1 = myArr.slice(1, 3);

console.log(myn1);

// for seeing the array is changed or not while using slice 
console.log("B", myArr);

// using splice creates a sub array including first and last index of argument passed and it make changes in the original array 
const myn2 = myArr.splice(1, 3);

console.log(myn2);

// printing original array for seeing the changes made by the splice in original array 
// splice removes the elements from the original array for the indexes passed as argument 
console.log("C", myArr);




