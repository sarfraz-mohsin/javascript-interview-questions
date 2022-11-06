//var Scope if function defined, it doesn't matter how many times we declare this it will only create a variable on fec

//Interview Trick Question 1

var a = 10;
console.log("line number 2", a);
function fn() {
  console.log("line number 4", a);
  var a = 20;
  a++;
  console.log("line number 7", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }
  console.log("line number 13", a);
}
fn();
console.log("line number 2", a);

//Interview trick question 2
//orange orange; apple apple; orange apple;

let letFruit = "orange";
var varFruit = "orange";
console.log("leftFruit", letFruit, "varFruit", varFruit);
{
  let letFruit = "apple";
  var varFruit = "apple";
  console.log("letfruit", letFruit, "varFruit", varFruit);
}
console.log("leftFruit", letFruit, "varFruit", varFruit);
