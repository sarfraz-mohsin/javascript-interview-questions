//Synchronous Callbacks

function greet(personName, age, callback1, callback2) {
  let msg = "hello " + personName;
  let PersonAge = "your age is : " + age;
  callback1(msg);
  callback2(PersonAge);
}

function logGreeting(msg) {
  console.log(msg);
}

function logAge(age) {
  console.log(age);
}

//greet("steve", 25, logGreeting, logAge);

//Asynchronous Callbacks

console.log("hello");

setTimeout(function st1() {
  console.log("I am st1");
}, 2000);

setTimeout(function st2() {
  console.log("I am st2");
}, 1000);

function sayBye() {
  console.log("bye");
}

sayBye();

//The working of the above code = we have basically 4 things call-stack(it creates a global execution context of our code or it keeps our main-thread), node-api(the settimeout isn't a js function it's a node's function so the st1 goes to node api same with st2 ), collback-queqe(after that it will store the st1 and st2) and event loop(this keeps the track of all the events which has to happen when so it sees that we have st1 and st2 but the sayBye function is still waiting so it would run that first)
