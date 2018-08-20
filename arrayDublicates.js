

var Array1 = ["a", "b", "c", "d", "e", "d", "f", "c"];
var Array2 = ["c", "x", "y", "f", "c"];



// function dublicate(array1,array2){
//   let cache = {}
//   let result = []
//   let count = 0
//     for (let i=0;i<array1.length; i++){
//       if(cache[array1[i]]){
//         result.push(array1[i])
//       } else {
//         count++
//         cache[array1[i]]=count;
//         count--
//       }
//     }


//     return result;
// }

//method 1

// Array1.filter((el,index,arr)=> arr.indexOf(el)== index)


//method 2
// let uniq = [...(new Set(Array1))]

let uniq =
    [...(new Set([...(new Set(Array1)), ...(new Set(Array2))]))]

console.log(uniq)


// console.log(dublicate(Array1));