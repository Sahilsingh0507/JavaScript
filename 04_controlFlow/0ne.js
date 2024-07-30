// if
// if the condition is true the code inside if will be executed 
// if (true) {

// }

// if the condition inside if is false then the code inside if will not be executed 
// if (false) {

// }

// comparison 

const isUserLoggedIn = true

// if (isUserLoggedIn) {

// }

// comparison operators
// 3!=2 
// <, >, <=, >=, == , !=, ===, !==


// if (3!=2) {

// }

// loose equality == 
// if (2 == "2") {
//     console.log("executed");
// }

// strict equality this check value and datatype also 
// if (2 === "2") {
//     console.log("executed");
// }

// const temperature = 41;

// if (temperature < 50) {
//     console.log("less than 50");
// }

// else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score = 200;
// if (score > 100) {
//     // use const and let as variables dont use var 
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// the scope is not defined for power inside if 
// console.log(`User power: ${power}`);



const balance = 1000;
// if you want to write in single line 
// if (balance > 500) console.log("test");

// if you want to write multiline code in this 
// this is not a good practice 
// if (balance > 500) console.log("test"),
//     console.log("test2");

// if you have multiple conditions then 
// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allowed to buy courses");
}

// if one codition is also false the code will not be executed inside it 
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Not Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

