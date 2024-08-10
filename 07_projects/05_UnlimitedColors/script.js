//Generate a random color with random hex values 
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());
// for random values
// console.log(Math.floor(Math.random() * 16));

// we also need to stop setinterval by clear interval so we want a global variable to access it 
let intervalId;
const startChangingColor = function () {
    // intervalId = setInterval(changeBgColor, 1000)
    // for optimizing code 
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    // document.body.style.backgroundColor = randomColor();
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};


const stopChangingColor = function () {
    clearInterval(intervalId);
    // for efficient code we need to flush out the values of interval Id 
    intervalId = null;

};
// to start to change color 
document.querySelector('#start').addEventListener('click', startChangingColor);
// for stopping changing of color 
document.querySelector('#stop').addEventListener('click', stopChangingColor);