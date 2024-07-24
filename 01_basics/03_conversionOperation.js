let score = "sahil";
console.log(typeof score);

// you cant convert one datatype into another like this 
// score = 33;

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// const {score} = req.body;


// "33" => 33
//"33abc" => NaN (Not an Number)
// true => 1 ; false =>0 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false 
//"sahil" => true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);