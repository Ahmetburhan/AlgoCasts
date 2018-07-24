// let starter =function (callback){
//     console.log("do this")
//     callback(name);
// }

// function callback(name){
//     console.log(`my name is ${name}`)
// }

// starter("ahmet");
let a = 5;
let b = [];
let c = {};
let d = false;
let e = function() {

}
let sum = function (a, b) {
    return a + b;
}

function sayMyName(name,teller = "veli"){
    let empty = null
    // let five = 5;
    console.log(name);
    console.log(teller);
 return sum
}
console.log("saymy name stuff",sayMyName("aho"))

if(sayMyName("aho")) {
    console.log("Am I gonna work?");
} else {
    console.log("im here?");
}

// sayMyName("Ahmet");

// //vari 2
// sayMyName("Ayse");



let total = sum(3, 5);

// console.log(total)

function myFunction(first, second, cb) {
    console.log("first", first)
    console.log("second", second)
    console.log("third", cb(first + second))
}

myFunction("BIR", "IKI", function(name){
    return name;
});