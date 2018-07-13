// let firstName = "john";
// let lastName = "smith";
// const yearOfBirth = 1990;
// function calcAge(year){
//     return 2016 - year;
// }

// console.log("this is " + firstName + "")

// //es6

// console.log(`this is ${firstName}`)

// const n = `${firstName} ${calcAge(1990)}`;

// const m = `${firstName} ${lastName}`;
// console.log(n)
// it check that starts with or not returns trues or false
// console.log(n.startsWith("j"))
// // console.log(m.endsWith("j"))
// console.log("-----------")
// console.log(m.startsWith("j"))
// console.log(m.endsWith("th"))
// console.log("-----------")

// console.log(m.includes("mi"));

// console.log(`${firstName} `.repeat(5));

// const years = [ 1990,1996,2000,2003];

// var ages5 = years.map(function(el){
//     return 2016 - el;
// })

// console.log(ages5);
// console.log("-----------")
// const nums = [1, 2, 3, 4];
// let reduced = nums.reduce((prev, val) => { return prev + val;

// },0)
// console.log(reduced)

// const years = [ 1990,1996,2000,2003];

// const ages = years.map(el => 2018 - el);

// console.log(ages);

// ages6 = ages.map((age,index) => {
//     return `Ages by order ${index + 1 }: ${age}`
// });
// console.log(ages6);

// var box5 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//           var str = 'This is box number'  + self.position + 'and it is ' + self.color;
//           alert(str);
//         })
//     }

// }
// box5.clickMe();

// const box6 = {
//     color: "green",
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', ()=> {
//             var str = 'This is box number ' + this.position + 'and it is ' + this.color;
//             alert(str);
//         })
//     }

// }
// box6.clickMe();

// const box66 = {
//     color: "green",
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + 'and it is ' + this.color;
//             alert(str);
//         })
//     }

// }
// box66.clickMe();

// function Person(name) {
//     this.name = name;

// }

// Person.prototype.myfriends5 = function(friends) {
//     var arr = friends.map(function (el) {
//         return this.name + ' is friends with ' + el;
        
//     }.bind(this))
//     console.log(arr);
// }

// var friends = ["john", "benjamin", "aisha"];

// new Person("ali").myfriends5(friends)


// function Person(name) {
//     this.name = name;

// }

// Person.prototype.myfriends6 = function (friends) {
//     var arr = friends.map((el) => {
//         return this.name + ' is friends with ' + el;

//     })
//     console.log(arr);
// }

// var friends = ["john", "benjamin", "aisha"];

// new Person("ali").myfriends6(friends)


// function Person(name) {
//     this.name = name;

// }

// Person.prototype.myfriends6 = function (friends) {
//     var arr = friends.map((el) => {
//         return `${this.name} is friends with ' + ${el}`

//     })
//     console.log(arr);
// }

// var friends = ["john", "benjamin", "aisha"];

// new Person("veli").myfriends6(friends)


//destructring

//es5

// var john = ['john', 26];
// var name = john[0];
// var age = john[1];

//es6

// const [name, year] = ['john', 26];

// const obj = {
//     firstName : 'john',
//     lastName : 'smith'
// }

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const{firstName: a, lastName: b} = obj
// console.log(a);
// console.log(b);


// function calcAgeRetirment (year) {
//     const age = new Date().getFullYear()- year;
//     return [age, 65 - age];
// }

// const [age2,retirement] = calcAgeRetirment(1990);
// console.log(age2);
// console.log(retirement);


// const boxes = document.querySelectorAll(".box");

// //es5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(el){
//     el.style.backgroundColor = 'dodgerblue';
// })



//es6
// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach((el) =>{
//     el.style.backgroundColor = "red";
// }, this);


//final super short
// Array.from(boxes).forEach((el) => {
//     el.style.backgroundColor = "red";
// }, this);

//es6
// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach((el) =>{
//     el.style.backgroundColor = "red";
// }, this);


// //final super short
// // Array.from(boxes).forEach((el) => {
// //     el.style.backgroundColor = "red";
// // }, this);

// //es6
// const boxes = document.querySelectorAll(".box");
// const boxesArr6 = Array.from(boxes);

// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(el){
//     el.style.backgroundColor = 'dodgerblue';
// })


// Array.from(boxes).forEach((el) => {
//     el.style.backgroundColor = "red";
// }, this);

//  for(var i = 0; i < boxesArr5.length; i++) {
//      if(boxesArr5[i].className === "box blue"){
//         continue;
//         // break;
//      }
//      boxesArr5[i].textContent = "i changed to red/"
//  }

// for(let cur of boxesArr6) {
//     if (cur.className.includes("blue")){
//         continue;
//     }
//     cur.textContent = "i changed to blue";
// }

var ages = [12,15,6,21,12,33];

var full = ages.map((age)=>{
    return age >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)])


//es6

let es6way = ages.findIndex((cur) => {
    return cur >= 18;
})
console.log(es6way)

console.log(ages.find(cur => cur >= 18))



















































