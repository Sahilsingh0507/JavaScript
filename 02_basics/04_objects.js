// this is a singleton object 
// const tinderUser = new Object();

// this is non singleton object 
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);

// nesting of objects 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sahil",
            lastname: "Singh"
        }
    }
}

// accessing the nested objects values using keys 

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// if we do this this gives us the nested object instead of merging objects 
// const obj3 = { obj1, obj2 };
// console.log(obj3);

// this do our work but we dont write syntax like this 
// const obj3 = Object.assign(obj1, obj2);

// chnging the syntax 
// agar empty bracket nhi denge toh saari object usme jayegi jo first me assign hoga 
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// merge multiple objects using spread operator 
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

// how we get values from the data bases these are objects inside array
const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },

    {
        id: 2,
        email: "s@gmail.com",
    }
]

// how to access these 
// console.log(users[1].email);

// console.log(tinderUser);

// return all the keys in the array ehich is easy to access 
// console.log(Object.keys(tinderUser));

// return all the values in the array ehich is easy to access 
// console.log(Object.values(tinderUser));

// return all the key and value inside nested array
// console.log(Object.entries(tinderUser));

// ask whether this property is present or not return type boolean
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
