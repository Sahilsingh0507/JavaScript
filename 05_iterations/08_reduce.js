const myNums = [1, 2, 3, 4];

// this function prints the value of the accumulator 
// the accumulator doesnot know where to start from so we initialize it with zero which is declared at the end 
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);

const totalSum = myNums.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0)

console.log(totalSum);