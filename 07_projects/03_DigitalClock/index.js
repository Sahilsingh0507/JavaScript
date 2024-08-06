const clock = document.getElementById('clock');

// let date = new Date();
// console.log(date.toTimeString());

setInterval(function () {
    let date = new Date();
    // console.log(date.toTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);