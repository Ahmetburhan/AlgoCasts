// Data structures and algorithm questions
// Given the following, how would I group the item, so that I can get the result below
var foodItems = [
    { type: "chinese", name: "chow mein" },
    { type: "american", name: "burgers" },
    { type: "chinese", name: "wontons" },
    { type: "indian", name: "chicken" },
];

let result = foodItems.reduce((groups,food)=> {
    const val = food["type"]
    groups[val] = groups[val] || []
    let count = 0;
    if (groups[val]){
        count++
    }
    groups[val].push(`${food},count:${count}`)
    return groups
}, {})
console.log(result)


let num = [1,2,5,6];
let num2 = [1,2,5,6];

let arser = num.concat(num2);
let es5 = [...num, ...num2]
console.log("jjjj",arser)
console.log("jjjj", es5)


// foodItems.forEach(food => result[food.type] ? result[food.type].push({type: food.type, name: food.name}) : (result[food.type] = [], result[food.type].push({type: food.type, name: food.name}) ))

// console.log(result)

// const cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }];

// let newcars = {}

// cars.forEach(car => {
//     newcars[car.make] ? // check if that array exists or not in newcars object
//         newcars[car.make].push({ model: car.model, year: car.year })  // just push
//         : (newcars[car.make] = [], newcars[car.make].push({ model: car.model, year: car.year })) // create a new array and push
// })

// console.log(newcars);



// Output
// result = [
//     { type: "chinese", name: ["chow mein", "wontons"], count: 2 },
//     { type: "america", name: ["burgers"], count: 1 },
//     { type: "indian", name: "chicken", count: 1 }
// ];
