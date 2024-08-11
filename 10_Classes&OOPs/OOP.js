// Object Literal 
const user = {
    username: "Sahil",
    logInCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database.");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// this in global context 
console.log(this);

// constructor function 
// this new keyword is constructor function 
// new keyword naya context banata hai 
// const promiseOne = new Promise();
// const date = new Date();


// function 
function User(username, logInCount, isLoggedIn) {
    this.username = username,
        this.logInCount = logInCount,
        this.isLoggedIn = isLoggedIn,

        this.greeting = function () {
            console.log(`Welcome ${this.username}`);
        }

    // yha agar return agar naa bhi kare toh bhi by default return hoga 
    return this;
}

const userOne = new User("Sahil", 12, true);
// yha user two userone k values ko overwrite kr rha hai isiliye hame constructor fucntion chaiye jo hame har baar nayi copies bana k de sake 
// isiliye ham constructor ki jarurat hai 
// constructor function har baar naya instance deta hai 
const userTwo = new User("ChaiAurCode", 11, false);
// console.log(userOne);
// console.log(userTwo);

// notes
// new keyword use karte h toh sabse pehle ek empty object create hota hai jisko instance bolte hai
// naya object create ho gya hai apne pass
//constructor function call hota hai new keyword k karan aur arguments saare pack karke new keyword me de deta hai
// this keyword k andar argument sab inject ho jaate hai
// hame mil jaate h values function k andar 

console.log(userOne.constructor);