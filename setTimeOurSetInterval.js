//setTimeOut and setInterval are not js functions these are provided by browser and node

//SET-TIMEOUT- it executes a function after a certain tiem

function greet() {
  console.log("hiii");
}

setTimeout(greet, 3000);

//SET-INTERVAL- it keeps repeating a funciton after a certain time, but we can destroy this using clearinterval and it's id so it does not stuck in infinite loop

let count = 0;
let intervalId;

function greet2() {
  console.log("hiii there");
  count++;
  if (count >= 3) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(greet2, 1000);


//POLYFILL OF SETINTERVAL - Ultra Pro Max level


