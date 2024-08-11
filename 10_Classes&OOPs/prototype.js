// let myName = "sahil      ";
// let myChannel = "Chai      ";

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);

    }
}


Object.prototype.sahil = function () {
    console.log(`Sahil is present in all objects`);
}

Array.prototype.heySahil = function () {
    console.log(`Sahil says hello`);
}

// heroPower.sahil();
myHeros.sahil();
myHeros.heySahil();
// heroPower.heySahil();


// inheritance 
// old syntax 
const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user;

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUserName.trueLength();
"sahil".trueLength();
"icetea".trueLength();