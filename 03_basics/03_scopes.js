// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300;
let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner: ", a);
}

// let cannot be accessed outside of the block scope 
console.log(a);
// const also cannot be accessed outside of block scope 
// console.log(b);
// console.log(c);

for (let i = 0; i < array.length; i++) {
    const element = array[i];

}

// if we check scope in browser console and if we check it in node the scope is different 

