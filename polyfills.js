// Polyfill of map aka custom map

let myArr = [1, 2, 3, 4];

function myPolyfillMap(arr, cb) {
  let newArr = [];

  for (let i = 0; i < arr.lenght; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function square(x) {
  return x * x;
}

//console.log(myArr);
//console.log(myPolyfillMap(myArr, square));

//Polyfill of Bind - for this we use function prototypes just like we used the array prototypes in HOC's

let person1 = {
  name: "sarfraz",
  age: 14,
};

let showDetails = function (city, state) {
  console.log(`${this.name} is ${this.age} years old ${city} ${state}`);
};

let showDetailBind = showDetails.bind(person1); //this is bind method
//showDetailBind();

//now polyfill method

Function.prototype.myBind = function (...args) {
  //args is an array that take any number of arguments we want to give we don't have to define them in the function definition
  let obj = this;
  param = args.slice(1); //to receive the remaining paramerters from the args

  return function () {
    obj.apply(args[0], param);
  };
};

let showDetailsMyBind = showDetails.myBind(person1, "noida", "up");
showDetailsMyBind();
