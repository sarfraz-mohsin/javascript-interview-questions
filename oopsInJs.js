//OOPS JS

//THIS

// ==> non-strict mode with(globally, inside-function, inside-object, inside-object-function-function)

//console.log(this); // in node js globally return en empty object {} in STRICT MODE - it will remain same
function showThis() {
  //console.log(this); //It returns a global object, in STRICT MODE - it will be undefined
}
showThis();

let obj = {
  name: "sarfraz",
  f: function () {
    //console.log(this); //It will return the object itself in which it is, in STRICT MODE- it will reamain same
  },
};
obj.f();

let obj2 = {
  name: "sarfraz",
  f: function () {
    function g() {
      //console.log(this); //It returns a global object, in STRICT MODE -  it will be in undefined
    }
    g();
  },
};
obj2.f();

/*This in browser in non-strict mode/strict mode -
optoin 1 = it will return the window object/window object
option 2 = it will again return the window object/undefiend
option 3 = it will return the object itself/objec t itself
option 4 = it will return the window object/undefined*/

//CONSTRUCTOR FUNCTIONS
//--> these were introduced to stop the code repetition if we want to make same type of objects, we use new keyword to make a constructor and when we create a constructor with new the 'this' inside the function does'nt return global function but an empty object

function car(brand, model, color) {
  this.brand = brand; //this inside funciton would give an emptyy object
  this.model = model;
  this.color = color;
  this.drive = function () {
    console.log("I am driving " + this.model);
  };
}

let car1 = new car("mercedes", "s-class", "black");
let car2 = new car("bmw", "x5", "white");
//car1.drive();
//console.log(car2);

//CALL APPLY BIND = these were introduced so the code repetition doesn't happen because, suppose we make 2 objects and both the objects have a same fucntion which we want to call it will be hectic and repetition.

let person1 = {
  name: "sarfraz",
  age: 21,
};

let person2 = {
  name: "Asif",
  age: 28,
};

let f = function (city, car) {
  //console.log(
  //`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`
  //);
};

f.call(person2, "Delhi", "lambo"); //function borrowing
f.apply(person1, ["ghazaibad", "bugatti"]); //it is same as call but it takes arguments in an array
let bindDetails = f.bind(person2, "upeda", "cycle"); //bind stores the value and not call, so we have to call it according to our need whenever we want and store it in a variable
//console.log(bindDetails);

//FUNCTION CURRYING

function add1(a, b) {
  //console.log(a + b);
}

//let addwith2 = add.bind(this, 2); //In the statement this keyword referes to the function add and 2 is the fixed parameter in a
//addwith2(5);

/* Currying with closures */
function addX(x) {
  return function (y) {
    //console.log(x + y);
  };
}

let addY = addX(2);
addY(5);

//PROTOTYPAL INHERITENCE - when we set object1's __proto__ in object2, it takes(inherits) all the keys from object1 expect the ones defined by us.

let object1 = {
  name: "sareen",
  age: 20,
  showDetails: function () {
    console.log(this.name + " " + this.age);
  },
};

let object2 = {
  name: "sarfraz",
};

object2.__proto__ = object1; // prototypal inhertance

object2.showDetails();
