const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        // for grey color 
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
            // you can also hard code the value 
            // body.style.backgroundColor = 'grey';
        }
        // for white color 
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
        }
        // for blue color 
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        }
        // for yellow color 
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        // for purple color 
        if (event.target.id === 'purple') {
            body.style.backgroundColor = event.target.id;
        }
    })
});