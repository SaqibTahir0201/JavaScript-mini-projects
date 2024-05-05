let secondsElapsed = 0;
let interval = null;

let time = document.getElementById("time");

function setTime() {
  time.innerHTML = secondsElapsed
}
function timer() {
  secondsElapsed ++ 
  setTime()
}
function startWatch() {
  interval = setInterval( timer , 1000 ) 
}
function stopWatch() {}
function resetWatch() {}
