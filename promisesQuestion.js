//Question 1

// setTimeout(() => {
//   console.log(4);
// });
// setTimeout(() => {
//   console.log(5);
// });

// let p = new Promise(function (resolve, reject) {
//   resolve();
// });

// console.log(1);

// p.then(function () {
//   console.log(2);
// });

// p.then(function () {
//   console.log(3);
// });

// setTimeout(() => {
//   console.log(6);
// });

//Question 2

// let p = new Promise(function(resolve, reject) {
//     reject(new Error("some error"));
//     setTimeout(() => {
//         reject(new Error("some error"))
//     }, 1000);
//     reject(new Error("some error"))
// })

// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function(err){
//     console.log(2);
//     console.log(err);
// })

//Question 3

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("runs after 3 seconds"));
