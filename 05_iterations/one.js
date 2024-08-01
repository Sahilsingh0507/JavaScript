// for 
// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         console.log("5 is the best number");
//     }
//     console.log(i);
// }
// // i is not accessible outside 
// console.log(i)



// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner Loop value is ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue

// break 
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is Detected");
//         break;
//     }
//     console.log(`Value of i is ${index}`);

// }


// continue 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Detected");
        continue;
    }
    console.log(`Value of i is ${index}`);

}