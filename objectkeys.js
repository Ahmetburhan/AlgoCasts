const object1 = { foo: 'bar', baz: 42 };

// for (var key in object1) {
//     console.log(key, ":", object1[key]);
// }
//foo : bar
//baz: 42

// let all = Object.entries(object1);
let result = [];
object1.forEach((element)=> {
    result.push(element[0])
    
});
 console.log(result.join(", "))


// function logger(){
//     let result = []
// for (let key in object1) {
//     result.push(`${key}: ${object1[key]}`);
//     // console.log(Object.keys(object1)[1])
// } return result;
// }


// console.log(logger())
// console.log(Object.keys(object1))
// console.log(Object.values(object1))



// Object.keys(object1).forEach(function (obj) {
//     console.log(obj);
// })
// // Will show 2 logs; first with "0 = zero" and second with "1 = one"