/*
  You're working on a secret team solving coded transmissions.
  Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

  Write a method reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴
  
  When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
*/
console.log('Practice makes Perfect!');

let sample = ['b', 'e', 'a', 'u', 't', 'i', 'f', 'u', 'l', ' ', 'r', 'e', 'a', 'l', 'l', 'y', ' ', 'i', 's', ' ', 'c', 'a', 'k', 'e'];
// -> cake is beautiful

// ['d','o','g', ' ', 'a'] -> a dog

//beautiful is cake

let dogArray = ['d', 'o', 'g', ' ', 'a']

let resolve = function (arr) {

    //let words = arr.join("")
let result = []
    arr = arr.join("").split(' ')

   for(let i = arr.length-1; i >=0; i--){
    result.push(arr[i])


   }

    return result.join(" ")
}


let resolve = function (arr) {

   
    arr = arr.join("").split(' ').reverse().join(" ")
    return arr
}
console.log(resolve(sample))


// function reverseCharacters(message) {

//     var leftIndex = 0;
//     var rightIndex = message.length - 1;

//     // walk towards the middle, from both sides
//     while (leftIndex < rightIndex) {

//         // swap the left char and right char
//         var temp = message[leftIndex];
//         message[leftIndex] = message[rightIndex];
//         message[rightIndex] = temp;
//         leftIndex++;
//         rightIndex--;
//     }

//     return;
// }




// function reverseWords(message) {

//     // first we reverse all the characters in the entire message
//     reverseCharacters(message, 0, message.length - 1);
//     // this gives us the right word order
//     // but with each word backward

//     // now we'll make the words forward again
//     // by reversing each word's characters

//     // we hold the index of the *start* of the current word
//     // as we look for the *end* of the current word
//     var currentWordStartIndex = 0;
//     for (var i = 0; i <= message.length; i++) {

//         // found the end of the current word!
//         if (i === message.length || message[i] === ' ') {

//             // if we haven't exhausted the string our
//             // next word's start is one character ahead
//             reverseCharacters(message, currentWordStartIndex, i - 1);
//             currentWordStartIndex = i + 1;
//         }
//     }
// }

// function reverseCharacters(message, leftIndex, rightIndex) {

//     // walk towards the middle, from both sides
//     while (leftIndex < rightIndex) {

//         // swap the left char and right char
//         var temp = message[leftIndex];
//         message[leftIndex] = message[rightIndex];
//         message[rightIndex] = temp;
//         leftIndex++;
//         rightIndex--;
//     }
// }