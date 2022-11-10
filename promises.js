//Functions in promises

//All - it can turn all the promisese into an array but one problem with this is that even if one promise get rejected it will show the catch statement

// let p1 = new Promise(function (resolve, reject) {
//   resolve("Promise 1 is resolved");
// });
// let p2 = new Promise(function (resolve, reject) {
//   resolve("Promise 2 is resolve");
// });
// let p3 = new Promise(function (resolve, reject) {
//   resolve("Promise 3 is resolved");
// });

// let promiseAll = Promise.all([p1, p2, p3]); // this returns a pending promise

//console.log(promiseAll);

// promiseAll
//   .then((PromsiseArr) => {
//     console.log(PromsiseArr);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//Race- it will take the array but will show only one promise whicheven when is resolved first if no promise is rejected

// let p1 = new Promise(function (resolve, reject) {
//   resolve("Promise 1 is resolved");
// });
// let p2 = new Promise(function (resolve, reject) {
//   resolve("Promise 2 is resolve");
// });
// let p3 = new Promise(function (resolve, reject) {
//   resolve("Promise 3 is resolved");
// });

// Promise.race([p1, p2, p3]).then((val) => {
//     console.log(val)
// }) 

//Allsettled - this will also take an array and return an object with status: fullfilled/rejected and value/reason  

// let p1 = new Promise(function (resolve, reject) {
//   resolve("Promise 1 is resolved");
// });
// let p2 = new Promise(function (resolve, reject) {
//   resolve("Promise 2 is resolve");
// });
// let p3 = new Promise(function (resolve, reject) {
//   resolve("Promise 3 is resolved");
// });

// let promiseAll = Promise.all([p1, p2, p3]); 

// Promise.allSettled([p1,p2,p3]).then((arr) => {
//     console.log(arr)
// })
