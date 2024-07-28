// function one() {
//     const username = "sahil";

//     function two() {
//         const website = "youtube";
//         console.log(username);
//     }
//     // we cant access it here 
//     // console.log(website);

//     two();
// }

// one();

if (true) {
    const username = "sahil";
    if (username === "sahil") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username)


// ********************Interesting *******************

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// addOne(5);


// expression hai function nhi bss naam alag h kaam function wala hi h 
// gives error because we stored the value returned by function in an variable 
// addTwo(5);
const addTwo = function (num) {
    return num + 2;
}

addTwo(5);