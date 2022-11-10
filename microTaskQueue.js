console.log("program starts")

setTimeout(()=> {
    console.log("I am set time out")
}, 1000)

Promise.resolve().then((val)=> {
    console.log("Promise output")
})

console.log("program ends")


//All the promises code never goes to callback queue it goes to microtask queue. and the prrity of MicrotaskQueue>>CallbackQueue