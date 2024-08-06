const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField').value;
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.low0rHi');
const startOver = document.querySelector('.resultParas');

