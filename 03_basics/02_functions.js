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