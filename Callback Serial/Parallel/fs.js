import fs from "fs";

//BASIC ARCHITECTURE

//console.log("before");

//fs.readFile("./f1.txt", cb);

// function cb(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("content" + data);
//   }
// }

//console.log("after");

//COMPLEX - How to read files parallely

//console.log("before");

//fs.readFile("f1.txt", cb);
//fs.readFile("f2.txt", cb1);
//fs.readFile("f3.txt", cb2);

// function cb(err, data) {
//   //console.log("content " + data);
// }

// function cb1(err, data) {
//   //console.log("content " + data);
// }

// function cb2(err, data) {
//   //console.log("content " + data);
// }

//console.log("After");

//COMPLEX - how to read files serially

console.log("before");

fs.readFile("f1.txt", cb);

function cb(err, data) {
  console.log("content " + data);
  fs.readFile("f2.txt", cb1);
  function cb1(err, data) {
    console.log("content " + data);
    fs.readFile("f3.txt", cb2);
    function cb2(err, data) {
      console.log("content " + data);
      console.log("After");
    }
  }
}
