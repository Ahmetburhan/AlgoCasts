// // function constructor
// // var john = {
// //     naem : "john",
// //     yearOfBirth: 1990,
// //     job: "teacher"
// // }

// var Person = function (name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.graduated = "SFSU";

// // var john = new Person ("john", 1990, "teacher")

// // console.log(john)
// // john.calculateAge();

// // let jane = new Person ("jane", 1988, "designer");
// let mark = new Person("MArk", 1998, "engineer")
// // john.calculateAge();
// // jane.calculateAge();
// // mark.calculateAge();

// // console.log(john.graduated);
// // console.log(jane.graduated);
// // console.log(mark.graduated);


// let personProto = {
//     calculateAge: function(){
//         console.log(2018-this.yearOfBirth)
//     }
// }

// let john = Object.create(personProto);

// // console.log(john);

// let jane = Object.create(personProto, {
//     name: {value: "Jane"},
//     yearOfBirth: {value: "1998"},
//     job: {value: "designer"},

// })


// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var years = [2005,1913,1924,1945,1967];

// function arrayCalc(arr,fn){
//     var arrRes = [];
//     for (var i=0; i< arr.length; i++){
//         arrRes.push(fn(arr[i]))
//     } return arrRes;
// }
// function calculateAge(el) {
//     return 2018 - el
    
// }

// function isFullAge(el) {
//     return el >= 18;

// }

// function macHeartRate(el) {
//     if(el >= 18 && el <= 120){
//     return Math.round(206.9 - (0.67 * el));
//     } else {
//     return -1;
//     }
// }


// let ages = arrayCalc(years, isFullAge);
// console.log(ages);

//     let heartRate = arrayCalc(ages, macHeartRate);
//     console.log(heartRate);


// let births = arrayCalc(years, calculateAge);
// console.log(births)




// function interviewQuestion(job) {
//     if (job === "designer"){
//         return function(name){
//             console.log(name + ", can you please explain what UX design is?");
//         }
//     } else if (job === "teacher") {
//         return function (name) {
//             console.log(name + ", what subject do you teach");
//         }
//     } else {
//         return function (name) {
//             console.log(name + ",Hello What do you do?");
//         }

// }
// }

// let engineerint = interviewQuestion("engineer");
// console.log(engineerint("john"))



// let teacherq = interviewQuestion("teacher");
// console.log(teacherq("mark"))

// console.log(interviewQuestion("designer")("janet"))


// //iife (function)()

// (function game(good) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - good);
// })(5)
// // game();


//Closures

// function retirement(retirementAge) {
//     return function(yearOfBirth) { var age = 2016 - yearOfBirth;
//         var a = " years left for retirement";
//         console.log((retirementAge - age) + a)
// }
    
// }

// let retirementUS = retirement(66);
// retirementUS(1990);
// retirement(66)(1990);

// let retirementGermany = retirement(65);

function interviewQuestion(job) {
    if (job === "designer"){
        return function(name){
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function (name) {
            console.log(name + ", what subject do you teach");
        }
    } else {
        return function (name) {
            console.log(name + ",Hello What do you do?");
        }

}
}