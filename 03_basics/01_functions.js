// console.log("S");
// console.log("A");
// console.log("H");
// console.log("I");
// console.log("L");

// creating a function 
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// function calling when we want to execute it 
// sayMyName();

// function reference 
// sayMyName

// the values which we pass in function are called parameters 
function addTwoNumbers(number1, number2) {
    const sum = (number1 + number2);
    console.log(sum);
}

// the values we pass while calling function are called arguments
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "a");
// addTwoNumbers(3, null);

// if we try to store the result in another vaiable 
// const result = addTwoNumbers(3, 4);
// printing is different and function return type is different 
// console.log("Result: ", result);


function subTwoNumbers(number1, number2) {
    let subtract = (number1 - number2);
    return subtract;
    // by default return statement function ka end hota h uske neeche jo bhi likhe wo unreachable hai execute nhi hoga 
    console.log("sahil");
}

const result2 = subTwoNumbers(5, 3);
// console.log("Result is: ", result2);

function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
}

const result3 = multiplyTwoNumbers(3, 4);
// console.log("Result: ", result3);


function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }

    // another way of writing condition inside if in the above code 
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// ye krne pe value print nhi hogi kyuki function execute hoke value jisne call kiya usko de diya lekin hamne use print krne nhi bola 
// loginUserMessage("sahil");

// console.log(loginUserMessage("sahil"));
// console.log(loginUserMessage(""));

// undefined when we dont pass argument 
console.log(loginUserMessage());