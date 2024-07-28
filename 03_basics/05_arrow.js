const user = {
    username: "sahil",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// changing the value of username
// user.username = "sam";
// user.welcomeMessage();


// console.log(this);

// function chai() {
//     let username = "sahil";
//     // this object me value de rha tha lekin function me undefined ho raha 
//     console.log(this.username);
//     // console.log(this);
// }

// chai();

// function 
// const chai = function() {
//     let username = "sahil";
//     console.log(this.username);
// }

// chai();

// another way of writing it (function)
// arrow function 
// const chai = () => {
//     let username = "sahil";
//     // console.log(this.username);
//     //undefined 
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));

// another way of writing it 
// implicit return 
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(3, 4));

// another way of representing it 
// curly bracket k andar likha toh return keyword likhna hi padega 
// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(3, 4));

// how to implicitlty return objects 
// object return krne k liye parenthesis me wrap krna jaruri hai 
const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));


