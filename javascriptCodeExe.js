//There is no main in javascript, so everything works in an executin context(wrapper which provieds the area to run js and given 2 things initially i.e. global and this)

//console.log(global);
//console.log(this);

//The code which is not inside any function is in the global area or global code for this we have global execution context(wrapper)

//Creation phase before even execution of code, the memory allocation for variables is set to be undefined

//console.log("a is ",a)
var a;
//console.log("a is ", a)
a = 10;
//console.log("a is ",a)

//Memory allocation for function is done even before calling it or its evecution

fn();
function fn() {
  //console.log(" i can be called before my declaration");
}
fn();

//The execution context which provide us the global this and the memory for our code would be allocated which is called as {{{ HOISTING }}}

function real() {
  console.log("I am real. always run me");
}
function real() {
  console.log("No I the real one");
}
function real() {
  console.log("You both are wasted");
}
//real();

//Trick interview question
//varname undef; varname undef; varname captain america; hello from fn; hello from fn; i am an expression ; i am an expression

console.log("varName", varName);
var varName;
console.log("varName", varName);
varName = " capain america";
console.log("varname", varName);
fnn();
function fnn() {
  console.log(" Hello from fn");
}
fnn();

//fnContainer(); This part here will give an error because it's a variable while initialization the execution context doen't understand this is a function ititially.

var fnContainer = function () {
  console.log(" I am an expression");
};
fnContainer();
