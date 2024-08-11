// syntax of promise when stored in a variable 
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB Calls, cryptography, network 
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(function () {
    console.log("Promise Consumed");

})

// syntax of promise without storing in variable 
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ usename: "Sahil", email: "sahil@gmail.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Sahil", email: "sahil@gmail.com" });
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
});

// async function consumerPromiseFive() {
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumerPromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumerPromiseFive();


// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = response.json();
//     console.log(data);
// }

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         // json response bhi time leta h execute hone me toh iske await kra dete h 
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// now writing the above function in .then .catch 
fetch('https://api.github.com/users/hiteshchoudhary').then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
})
