const coding = ["js", "ruby","java","python","cpp"];

// coding.forEach( function (val){
//    console.log(val); 
// })

// writing arrow function 
// coding.forEach((item)=> {
//    console.log(item);
// })

// we can also write a separate function and pass in it 
function printMe(item){
   console.log(item);
}

// we are not calling the function we are giving reference 
// coding.forEach(printMe);

// we dont have only one parameter in for each call back function we have multiple parameters 
// coding.forEach((item, index, arr)=>{
//    console.log(item,index,arr)
// })

const myCoding = [
   {
      languageName: "Javascript",
      languageFileName: "js"
   },
   {
      languageName: "java",
      languageFileName: "java"
   },
   {
      languageName: "python",
      languageFileName: "py"
   }
]

myCoding.forEach( (item)=> {
   console.log(item.languageName);
})