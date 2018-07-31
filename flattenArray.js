const multiDimensionalArray = [[1,3,[6, 2],5], [3, 4], [5, 6]];

let flattenArray = (array) => array.reduce((prev,val) => prev.concat(Array.isArray(val) ? flattenArray(val) : val), [])


// let flattenArray = (array) => array.reduce((prev,val)=> prev.concat(Array.isArray(val) ? flattenArray(val) : val), [])


// //es5
// let flattenArray = function(array) { 
//     return array.reduce((prev, val) =>  prev.concat(Array.isArray(val) ? flattenArray(val) : val), []) 
// }


// console.log(flattenArray(multiDimensionalArray))



// const flattenedArray = [].concat(...multiDimensionalArray);
// // console.log(flattenedArray) // [1, 2, 3, 4, 5, 6] 


// // ES6
// const flatten = list => list.reduce(
//     (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
// );

// // ES5
// var flatten2 = function flatten2(list) {
//     return list.reduce(function (a, b) {
//         return a.concat(Array.isArray(b) ? flatten2(b) : b);
//     }, []);
// };



// console.log(flatten(multiDimensionalArray)) // [1, 2, 3, 4, 5, 6] 


const double = [1, 3, [6, 2], 5, [3, 4], [5, 6]];


let flatten = (array) => array.reduce((prev,val)=> prev.concat(Array.isArray(val)? flatten(val) : val),[])

console.log(flatten(double))