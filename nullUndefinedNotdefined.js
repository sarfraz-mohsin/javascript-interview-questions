//Undifined is when a variable is declared but not initilized

//Not defined is when we console a variable which is not defined

//null is when we want it to not have any value

//falsy values 
//----> false, null, undefined, 0, '', NaN

//SHALLOW COPY & DEEP COPY

//array copying with ... spread operator this is called shallow copy

// let sports = ['cricket', 'football', 'swimming']
// let copySports = [...sports] // but this is not good for nested objects inside array it will change the reference like earlier
// let copySports2 = Array.from(sports);
// let copySports3 = sports.slice(0);

//deep copies

let sports = ["cricket", "football", "swimming" , {a: 'hocket', b: 'tennis'}];
let copySports = JSON.parse(JSON.stringify(sports))

//for objects we have one more thing which is 
// obj2 = Object.assign({}, obj1)


