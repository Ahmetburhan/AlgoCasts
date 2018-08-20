


function add(a, b) {
    if (b == undefined) {
        return function (b) {
            return a + b;
        }
    }
    return a + b


}


// function add(a){
//   return function(b){
//     return a+b
//   }
// }

// console.log(typeof add())


// add() ; // 0
// add(1); // 1
// add(1,2); // 3
add(1)(2); // 3

