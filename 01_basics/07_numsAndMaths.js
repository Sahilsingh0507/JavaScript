const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// we have certain functions in number let see few of them 
// converting number to string 

// console.log(balance.toString());
// console.log(typeof (balance));

// now we can use all the function of string in it 
// console.log(balance.toString().length);

// toFixed function is the precision upto how many decimal points 
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;
// toPrescision function just round off to nearest depending on precision 
// console.log(otherNumber.toPrecision(3));

// round off 
const anotherNumber = 123.8966;
// console.log(anotherNumber.toPrecision(3));

// tolocalestring gives the commas to the numbers in international standard  
const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// if we want to do it according to indian standards then simply pass argument 'en-IN'
// console.log(hundreds.toLocaleString('en-IN'));


// ************ Math ***************
// console.log(Math);

// absolute function works just like mod function in maths convert negative values to positive 
// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// if you dont want to work in decimals you can use round function it will round off the decimal and give output without decimal 
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));


// ceiling function gives the next value if decimal value is given to number 
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.9));

// floor function gives the same value if decimal is given to the number 
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.9));

// for min element in an array we use the min function in math 
// console.log(Math.min(4, 3, 6, 8));

// for max element in an array we use the max function in math 
// console.log(Math.max(4, 3, 6, 8));

// value always lie between 0 and 1 
// console.log(Math.random());

// if we multiply it with 10 we get value between 0 to 10 
// console.log(Math.random()*10);

// if we dont want value of 0 then simply add 1 to this code 
// console.log(Math.random()*10 + 1);

// if you want the number to be present in int then wrap the code in math floor it pick the floor value 
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

// min value 10 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);