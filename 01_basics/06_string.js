const name = "Sahil";
const repoCount = 5;

// this is an old style of adding or concatinating strings 
// console.log(name + repoCount + " value");

// use backticks instead (string interpolation)
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sahil-hc-com');

// accessing key value pair 
// console.log(gameName[0]);

// access proto 
// console.log(gameName.__proto__);

// length of the string 
// console.log(gameName.length);

/* changing the string to uppercase 
uppercase is a function of proto so we use brackets 
this doesnot change original value of string because it is primitive data type */
// console.log(gameName.toUpperCase());

// if we want to see which character is present at your given indexthen use this function 
// console.log(gameName.charAt(2));

// if you want to know at what index the particular character is present the use this function 
// console.log(gameName.indexOf('i'));


/* this is the code to create substring you have to give start index and ending index of the substring as argument and  please note that the ending index is excluded while printing sub string */
const newString = gameName.substring(0, 4);
// console.log(newString);

/* we have another function called slice to create substring but we can pass negative values in it then the string will start from end it we give negative values in its argument */

const anotherString = gameName.slice(-6, 4);
// console.log(anotherString);

// trim function  eliminates all the spaces given inside a string 
const newStringOne = "      sahil     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


// you can replace anything by using replace function
const url = "https://sahil.com/sahil%20singh";
console.log(url);
console.log(url.replace('%20', '-'));

// to find something is present in a given url or parah use includes
console.log(url.includes('sahil'));

// here we are spliting the string based on - 

console.log(gameName.split('-'));

