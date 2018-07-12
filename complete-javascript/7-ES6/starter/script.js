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

const years = [ 1990,1996,2000,2003];

var ages5 = years.map(function(el){
    return 2016 - el;
})

console.log(ages5);
console.log("-----------")
const nums = [1, 2, 3, 4];
let reduced = nums.reduce((prev, val) => { return prev + val;

},0)
console.log(reduced)