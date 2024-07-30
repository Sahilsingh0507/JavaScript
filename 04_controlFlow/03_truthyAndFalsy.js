const userEmail = "Sahil@gmail.com";
// if we dont give any value in the user email then we get output as dont have an user email 
// we cant pass empty string 
const userEmail1 = "";


const userEmail2 = []

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value 
// "0", 'false', " ", [], {}, function(){}

// if (userEmail2.length === 0) {
//     console.log("Array is Empty");
// }


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// check krta hai pehli jo value milti hai wahi return kr deta hai 
val1 = 5 ?? 10;
console.log(val1);

//pehli value null aaya toh usne dusri value check krke return kr diya 
val1 = null ?? 10;
console.log(val1);

// isme bhi pehle undefined pe gya toh usne check kiya next me jo value tha wo return kr diya 
val1 = undefined ?? 20;
console.log(val1);

// isme check kiya usne null lekin next value usne check kiya toh usko mil gya isiliye second value return hua 
val1 = null ?? 10 ?? 20;
console.log(val1);

// often we get confused between these two 
// ternary operator 

condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");
