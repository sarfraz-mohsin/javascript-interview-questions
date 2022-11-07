//A child functions always have the lexical scope of it's the parents function variables in closures

//Prototype functions are used to implements HOC like map filter reduce and many many more to all the kinds of browsers.

Array.prototype.myMap = function (cb) {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }

  return newArr;
};

function square(x) {
  return x * x;
}

let arr = [1, 2, 3, 4];

let mappedArr = arr.myMap(square);

console.log(mappedArr);
