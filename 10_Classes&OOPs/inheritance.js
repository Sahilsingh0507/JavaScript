class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// if you want to extend class 
class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse();

const masalaChai = new User("masalachai");

// masalaChai.addCourse();
masalaChai.logMe();

// instance create ho raha hai same nhi h dono 
console.log(chai === masalaChai);
console.log(chai === Teacher);

// agar hame use instance hai ki nhi ye puchenge toh 
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
