//Procedural Programming - line by line coding , we had to think and implement stuff and logic after every line. "HOW TO DO? after every line".

//OOPS programming - we started to break things in the form of object and classes and than run our code accoring to this methodology

// Functional Programming - now this brings us to imperative and declaratie code writing

//Imperative code writing

const x = 4;
const xSquared = x * x;
let isEven;

if (xSquared % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}

//console.log(isEven);

//Declarative code witing

const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false);
//console.log(isSquareEven(4));

//Impure/Pure functions and their side effects
//Impure functions - these are those functions which depend upon external factors and not on own like the example below we are passing the same no 2 but due to external a the value is always different

let a = 9;
function addNum(b) {
  //console.log("the sum is ", a+b)
}
addNum(2);

//Pure function

function addNums(a, b) {
  //console.log("The sum is ", a + b);//This is a side effect
  return a + b;
}
//console.log(addNums(2, 5));

//Mutability and Immutability

//Mutability is when the reference is copies for ex below
const person1 = {
  name: "john",
  age: 25,
};

const person2 = person1;
person2.name = "steve"; //This is mutability name would change is both the persons

const personA = {
  name: "john",
  age: 25,
};

const personB = Object.assign({}, personA); // or we can use the spread operator to make new reference const personB = {...personA}
personB.name = "Carter";

//Higher Order functions(map, filter, reduce)

let myArr = [1, 2, 3, 4, 5];
let newArr = myArr.map(function (x) {
  return x * x;
});
console.log(newArr);

let filterArr = myArr.filter(function (x) {
  return x % 2 === 0;
});
console.log(filterArr);

let reduceArr = myArr.reduce(function (accumulator, x) {
  return accumulator + x;
}, 0); //this 0 at the end is the initial value given for the accumulator

//Polyfils - how the HOF's work behind the scene
