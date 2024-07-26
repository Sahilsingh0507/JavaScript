const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "flash", "batman"];

// this inserts an array as element in an array 
//changes original array 
// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// if you want to access element inside of the array which is inserted in the array 
// console.log(marvel_heroes[3][1]);

// continate doesnot change original array 
// with concatinate you can merge two array 
// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);
// console.log(allHeroes);

// using spread and merging two arrays 
// in spread you can merge multiple arrays but in concatinate you can merge only two arrays 
// this doesnot change original array 
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);
// console.log(marvel_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// this flat function concatinate all the array into a single array 
// it simply concatinate array present iside array as element also 
// this doesnot change original array 
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
// console.log(another_array);

// this checks whether it is an array or not 
// return type bool
// console.log(Array.isArray("Sahil"));

// convert anything into array by using this .from
console.log(Array.from("sahil"));

// interesting case in array 
// this prints an empty array because it dont know which to convert in an array 
console.log(Array.from({ name: "sahil" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// this is simply a way to convert it into array 
console.log(Array.of(score1, score2, score3));