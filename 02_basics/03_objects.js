// singleton
//literals ki tarah declare karte hai toh singleton nhi banta hai 
//constructor se banega toh hamesha singleton banega  

// object literals 

// singleton constructor se bana hua object 
// Object.create

// declaring a symbol iske bina object me symbol use nhi kr sakte 
const mysym = Symbol("key1");

const JsUser = {
    // by default ye jo name likha h hamne usko string me store krta hai 
    name: "Sahil",
    // ham string ab apne se likha h ab isko .(dot) lagake koi chance nhi hai access krne ka 
    "full name": "Sahil Singh",
    // using symbol in object but it is converted into string
    mysym: "mykey1",
    // syntax to use symbol in object [sym] and for using symbol in object declare it first on top outside of object scope
    [mysym]: "mykey1",
    age: 21,
    location: "Vizag",
    email: "sahil@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
};

// accessing a object 
// console.log(JsUser.email);

// another way to access object is 
// here we write email in string because by default object stores all these in string 
// console.log(JsUser["email"]);

// you cannot access this full name using . in object 
// console.log(JsUser.Full name)
// console.log(JsUser["full name"]);

// this is not symbol 
// console.log(JsUser.mysym);
// ye string ki tarah use ho rha hai 
// console.log(typeof JsUser.mysym);

// agar hame symbol ko use krna hai object k andar to square bracket use krna hoga 
// accessing symbol can be done by []
// console.log(JsUser[mysym]);


// manipulating the value of object 
JsUser.email = "sahil@chatgpt.com";
// console.log(JsUser.email);

// if you want the value should not be changed of the object then use freeze
// Object.freeze(JsUser);
// JsUser.email = "sahil@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

// console.log(JsUser.greeting); 
// executing function  
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}
// executing function 
console.log(JsUser.greetingTwo());