class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        // return this._email.toUpperCase();
        this._email = value;
    }

    // agar ham password ka access nahi dena chahte hai toh gatter aur setter ka use kar sakte hai 
    // agar ham getter likhte h toh uske liye setter bhi likhna hoga ye compulsory hai 
    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        // this._password = value.toUpperCase();
        this._password = value;
    }
}

const hitesh = new User("sahil@gmail.com", "abc");
// console.log(hitesh);
console.log(hitesh.password);
console.log(hitesh.email);

