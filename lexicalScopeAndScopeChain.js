//When we run the code, the execution context will form a global ec in the stack memory and than when we call a  function the execution context will form a  fec in the stack memory. For below example the gec will have a global, this and varName(undefined) fnn() -> heap memory (pointing to heap memory) in the stack after the fnn call it will have a golbar, this and varName for the fec in the stack memory.

var varName = 10;
function fnn() {
  varName = 20;
  console.log(varName);
}
fnn();

//Trick interview question

//console.log("line number 1", varName);
var varName = 10;

function b() {
  //console.log("line number 5", varName);
}

//console.log("line number 7", varName);

function fn() {
  //console.log("line number 9", varName);
  var varName = 20;
  b();
  //console.log("line number 13", varName);
}
fn();

//SCOPE - The area where a function or a variable can be found

//LEXICAL SCOPE - We will only see outside of the function definition and not outside of the function call

//SCOPE CHAIN - the pattern when of finding a varibale lexically outside in the stack is called scope chain
