// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// parseInt
// toString

function reverseInt(n) {
   
    let reverse = n.toString().split('').reverse().join('');
    
    if (n < 0) {
        return parseInt(reverse) * Math.sign(n);
    }
    
     return parseInt(reverse)
}

module.exports = reverseInt;


// function reverseInt(n) {

//     let reverse = n.toString().split('').reverse().join('');

//     if (n < 0) {
//         return parseInt(reverse) * -1;
//     }

//     return parseInt(reverse)
// }