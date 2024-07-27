function calculateCartPrice(num1) {
    return num1;
}

// if we give one argument it works fine 
// console.log(calculateCartPrice(2));
// but if we give multiple arguments it prints only the first argument 
console.log(calculateCartPrice(200, 400, 600));

// we use rest operator and modify the function
// the syntax of rest and spread is same it depends on the use case where you using it according to that it chnages 
function calculateCheckoutPrice(...num1) {
    return num1;
}

// it stores all the values in an array which we can easilt access 
console.log(calculateCheckoutPrice(200, 400, 600));

// here in the function the value goes in first val1 and val2 then in ...num1 
function calculateNumber(val1, val2, ...num1) {
    return num1;
}

console.log(calculateNumber(200, 400, 600, 2000));


// objects 
const user = {
    username: "sahil",
    price: 199
}

// how to pass these objects in functions and use them
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// passing objects in argument 
handleObject({
    username: "sam",
    price: 390
})

const myNewArray = [100, 200, 300, 400];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));