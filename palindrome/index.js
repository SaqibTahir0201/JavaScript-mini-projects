const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const valued = input.value;
  const reversed = reverseString(valued);

  input.value = "";
  valued = reversed ? alert("P A L E N D R O M E") : alert("Nah bro !!!");
  
}
