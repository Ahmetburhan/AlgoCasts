// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 


function vowels(str) {
    let count = 0;
    const checker = ["a", "e", "i", "o", "u"]
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}
module.exports = vowels;

/*
 * reverseVowels
 *
 * Write a function which accepts an input word in character array format
 * and returns that word with all of its vowels reversed
 */

 var reverseVowels = function (s) {
     //create an array of just vowels, pop into place
     let v = 'aeiouAEIOU';

     let str = s.split('');

     let st = 0;
     let end = s.length - 1;

     while (st < end) {
         while (st < end && !v.includes(s[end])) {
             end--;
         }
         while (st < end && !v.includes(s[st])) {
             st++;
         }
         //similar to quick sort, swap
         let tmp = str[end];
         str[end] = str[st];
         str[st] = tmp;

         st++;
         end--;
     }

     return str.join('')
 }

function reverseVowels(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let wordArray = word.split('').toLowerCase();
    let start = 0;
    let end = word.length - 1;
    while (start < end) {
        while (start < end && !vowels.includes(word[end])) {
            end--;
        }
        while (start < end && !vowels.includes(word[start])) {
            start++;
        }

        let temp = word[end];
        wordArray[end] = wordArray[start];
        wordArray[start] = temp;
        
        start++;
        end--
    }
    return wordArray.join("")
    
}


console.log(reverseVowels(['d', 'a', 'v', 'i', 'd', 'o', 'p', 'e']));
// ['d','e','v','o','d','i','p','a']