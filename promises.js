promise = new Promise((resolve, reject) => {
    resolve();
    reject();
})

promise.then(() => {
    console.log("finally finished")
})

promise.catch(() => {
    console.log("caught error")
})

//////


promise = new Promise((resolve, reject) => {
    resolve();
    reject();
})

promise

.then(() => {console.log("finally finished")})
.catch(() => {console.log("caught error")})


