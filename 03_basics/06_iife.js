// IIFE - Immediately Invoked Function Expressions 

// function chai() {
//     console.log(`DB CONNECTED`);
// }

// chai();

// to avoid global variable pollution in function 
// ek parenthesis se function ka scope define kiya dusre parenthesis se usko call kiya kyuki pura function parenthesis me h 
// (function)()
// ham funtion ko immediate invoke kr toh rahe h lekin isko rokne k liye last me semicolon lagana padega nhi toh dusra aise function likhne pe error dega 
// this is a named iife as name is given as chai 
(function chai() {
    console.log(`DB CONNECTED`);
})();

// how to pass parameter in iife
((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})('sahil');
