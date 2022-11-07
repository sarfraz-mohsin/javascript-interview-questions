//READ LIMITED FILES - PARALLELY/SERIALLY

//PARALLELY FOR LIMITED FILES

import ofg from "fs";
let fs = ofg.promises;

// let fileRead1 = fs.promises.readFile("./f1.txt");
// let fileRead2 = fs.promises.readFile("./f2.txt");
// let fileRead3 = fs.promises.readFile("./f3.txt");

// fileRead1.then((data) => {
//   console.log("" + data);
// });
// fileRead2.then((data) => {
//   console.log("" + data);
// });
// fileRead3.then((data) => {
//   console.log("" + data);
// });

//SERIALLY FOR LIMITED FILES

// let fileRead1 = ofg.readFile("./f1.txt");

// function cb1(data) {
//   console.log("" + data);
//   let fileRead2 = ofg.readFile("./f2.txt");
//   return fileRead2;
// }
// function cb2(data) {
//   console.log("" + data);
//   let fileRead3 = ofg.readFile("./f3.txt");
//   return fileRead3;
// }
// function cb3(data) {
//   console.log("" + data);
// }

// fileRead1
//   .then(cb1)
//   .then(cb2)
//   .then(cb3)
//   .catch((err) => {
//     console.log(err);
//   });

//PARALLELY FOR UNLIMITED FILES

// let arr = ["./f1.txt", "f2.txt", "f3.txt"];

// for (let i = 0; i < arr.length; i++) {
//   let fileReadPromise = fs.readFile(arr[i]);
//   fileReadPromise.then(cb);
// }

// function cb(data) {
//   console.log("" + data);
// }

//SERIALLY FOR UNLIMITED FILES

let arr = ["./f1.txt", "f2.txt", "f3.txt"];

let fileReadPromise = fs.readFile(arr[0]);
for (let i = 1; i < arr.length; i++) {
  fileReadPromise = fileReadPromise.then((data) => {
    console.log("" + data);
    return fs.readFile(arr[i]);
  });
}

fileReadPromise.then((data) => {
  console.log("" + data);
});
