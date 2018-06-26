
// david@outco.io

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
    let charRep = {};


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


}

console.log(anagramPalindrome("carrace")); // true
console.log(anagramPalindrome("cutoo")); // false


/*
 * reverseVowels
 *
 * Write a function which accepts an input word in character array format
 * and returns that word with all of its vowels reversed
 */

function reverseVowels(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let wordArray = word.toLowerCase().split('');
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
        end--;
    }
    return wordArray.join("")

}
console.log(reverseVowels("adasdadas"));


// ## 10. Anagram Palindrome

// *Given a string, determine if the string can be rearranged to form a palindrome.*

// A palindrome is a word that is the same as its reversed. For example: "racecar" and "noon" are palindromes because they match their reversed version respectively. On the other hand, "cat" is not a palindrome because "cat" does not equal "tac".

// **Parameters**  
// Input: str {String}    
// Output: {Boolean}

// **Constraints**  

// Assume the string only contains lowercase letters and no spaces.

// Time: O(N)  
// Space: O(1)

function anagramPalidrome(string) {

    let hash = {};
    let numberOfOdds = 0;

    for (var i = 0; i < string.length; i++) {
        if (hash[string.charAt(i)]) {
            hash[string.charAt(i)]++;
        } else {
            hash[string.charAt(i)] = 1;
        }
    }

    for (x in hash) {
        if (hash[x] % 2 !== 0) {
            numberOfOdds++;
        }
    }

    if (string.length % 2 !== 0 && numberOfOdds === 1) {
        return true;
    }

    if (string.length % 2 === 0 && numberOfOdds === 0) {
        return true;
    }

    return false;
}


// anagramPalidrome("carrace"); // --> true ("carrace" can be rearranged to "racecar")`  
anagramPalidrome("caaaac"); // --> false`






