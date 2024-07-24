let score = "sahil";
// console.log(typeof score);
// console.log(typeof(score));

// you cant convert one datatype into another like this 
// score = 33;

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// const {score} = req.body;


// "33" => 33
//"33abc" => NaN (Not an Number)
// true => 1 ; false =>0 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false 
//"sahil" => true


let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******operations*******
let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " Sahil";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2 );
// console.log( 1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// use parenthesis for avoiding error in calculation 
// console.log((3 + 4) * 5 % 3);

// console.log(true);
//dont write all the codes below they are wrong method only for colg exams
// console.log(+true);
// console.log(true+);
// console.log(+"");


// these are the worst practices of writing code dont write code like this 

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
// console.log(gameCounter);

// link to study 
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 
