/*
 * anagramPalindrome
 *
 * Write a function which accepts an input word and returns
 * true or false if there exists an anagram of that input 
 * word that is a palindrome.
 *
 * "noon" === palindrome
 *
 * "cat" => "act", "tca", etc.
 */

function anagramPalindrome(word) {

    // your code here
    //   let objectOne = {
    //     c:{2},
    //     a:{2},
    //     r:{2},
    //     e:{1}
    //   }

    //charRep will be represnting chars on word and its repeated qtys
    let charRep = {}


    for (let char of word) {

        if (charRep[char]) {
            charRep[char]++

        } else {
            charRep[char] = 1;
        }


    }

    let oddKeys = 0;
    for (let key in charRep) {
        if (charRep[key] % 2 !== 0) {
            oddKeys++;
        }
        if (oddKeys >= 2) {
            return false;
        }



    } return true;

    // let arry2 = word.split("")reverse().

}

console.log(anagramPalindrome("carrace")); // true
console.log(anagramPalindrome("cutoo")); // false