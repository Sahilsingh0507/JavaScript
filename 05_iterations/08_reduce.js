const myNums = [1, 2, 3, 4];

// this function prints the value of the accumulator 
// the accumulator doesnot know where to start from so we initialize it with zero which is declared at the end 
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);

const totalSum = myNums.reduce((accumulator, currentValue) => {
    // this is not function if we write any print statement inside it it will get executed without function calling 
    // console.log(`acc: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0)

// console.log(totalSum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);