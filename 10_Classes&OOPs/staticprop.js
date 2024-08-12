class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // agar hame is create id ka access sabko nhi dena chahte toh static aage laga dete hai 
    static createId() {
        return `123`;
    }
}


const sahil = new User("sahil");
// console.log(sahil.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
// console.log(iphone.createId());
