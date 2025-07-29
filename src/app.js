import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['My sidepiece', 'My grandma', 'My A1', 'My lizard'];
let action = ['ate', 'peed on', 'crushed', 'deystroyed'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['right before class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}


window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    "<h1>Man what had happened was " +
    getRandom(who) + " " +
    getRandom(action) + " " +
    getRandom(what) + " " +
    getRandom(when) + ".</h1>";
};
