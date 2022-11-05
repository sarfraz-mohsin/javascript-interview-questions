//Types of functions
//function statement
//define

function sayHello(param) {
  //console.log("hello world", param) //if we do not give any parameter while function call it will return undefined
}

let rVal = sayHello(); // If we do not return anything it will return undefined by default

//functions are called first class citizens because they are treated as a variable.

let a = [1, 2, 3, 4, 5];
let b = a; //Just like we can transfer a's value in b we can do that in a function as well

//function expression and example for above statement

let fnContainer = function () {
  //console.log(" I am Expression") //when we donot give any name to a function it is called anonymous function
  //console.log("Anonymous function")
};
fnContainer();

//IIFE- Immediately Invoked Function expression

(function iffi() {
  //console.log("I am IIFE");
  //console.log("I will run on my own"); //iife were made so that it presents whatever we want the user to see on the first go.
})();

//Arrow function -> syntax, react, this

let arrow = (num) => {
  return num * num; // let arrow = (num) => return num*num
};

//First class citizen
//1 = it can be treated as a variable
//2 = assignment -> fn expression
//3 = functions can be passed as parameters (callbacks)
//4 = a function can be returned inside a function or from a fucntion

function sayHelllo(param) {
  //console.log("whatsup", param);
  param();
  return "bhej diya wapis";
}

function smaller() {
  //console.log("I am smaller");
}

sayHelllo(smaller);

function outer() {
  console.log("I am outer returning inner");
  return function inner() {
    console.log("i am inner");
  };
}

let rValu = outer();
console.log(rValu);
rValu();
