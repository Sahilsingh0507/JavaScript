const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// this is for printing only key 
// for (const key in myObject) {
//     console.log(key);
// }

// this is for printing objects key pair value 
// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// now if you want both key and value together then 
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// for in in  array 

const programming = ["cpp", "js", "py", "rb", "java"];

// this is for printing only key 
// for (const key in programming) {
//     console.log(key);
// }

// printing values in array 
for (const key in programming) {
    console.log(programming[key]);
}
