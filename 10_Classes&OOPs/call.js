function setUserName(username) {
    // complex db calls 
    this.username = username;
}

function createUser(username, email, password) {
    // call ho raha hai lekin call hone k baad values memory sab erase ho ja raha 
    // setUserName(username);
    // hamne apna this diya ki call hone k baad jab function khatam hoga us se pehle is this me value daal dena 
    setUserName.call(this, username);
    // ye krna chahte h lekin bahar wale function ka this alag hai is functio ka this alag hai 
    // this.username = username;
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);