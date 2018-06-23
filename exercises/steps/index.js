// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n, row = 0, stair="") {
//     if ( n === row) {
//         return;
//     }
//     if ( n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1)
//     }
//     if ( stair.length <= row){
//         stair += "#";
//     } else {
//         stair += " ";
//     } 
//     steps (n, row, stair)   
// }
steps(9)
module.exports = steps;



// function steps(n) {
//     for (var y = 0; y < n; y++) {
//         var stair = "";
//         for (let x = 0; x < n; x++) {
//             if (x <= y) {
//                 stair += '#'
//             } else {
//                 stair += " ";
//             }

//         } console.log(stair)
//     }
// }


function steps (n) {
    for(var y = 0; y < n; y++){
        var stairs = "";
    for(var x = 0; x < n; x++){
        if (x <= y){
            stairs += "#"
        } else {
            stairs += " "
        }
        } console.log(stairs)
    }
}