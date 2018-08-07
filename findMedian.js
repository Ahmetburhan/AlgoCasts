// 403 - Median of Two Sorted Arrays
// Given two sorted arrays of integers of the same length, determine the median of the combined sorted array.

// The median of an array of sorted numbers corresponds to the middle element, if the array has an odd number of elements, and the average of the two middle elements if the array has an even number of elements.

//     Input: Two Arrays of Integers
// Output: Integer
// Example
// Input: [1, 12, 13, 26, 38], [2, 15, 17, 30, 45]
// Output: 16
//     (because the median of [1, 2, 12, 13, 15, 17, 26, 30, 38, 45] equals 16)
// Constraints
// Time Complexity: (Intermediate) O(N), (Advanced) O(log(N))
// Auxiliary Space Complexity: O(1).

let arr1 = [11, 12, 13, 26, 38]; 
let arr2 = [2, 15, 17, 30, 45];

 function medianFounder (arr1, arr2) {
    let result = [];
    let length = arr1.length + arr2.length;

    for (let i=0,j=0; i<length; i++){
    if(arr1[i]< arr2[j]){
        result.push(arr1[i]);
    } else if (arr1[i] > arr2[j]) {
         result.push(arr2[j]);
         j++;
         i--;
    }
    }
 
    let medianSum = result[(result.length + 1) / 2 - 1] + result[(result.length + 1) / 2]
    let median = medianSum / 2

  
    return [result, median]
 }

 console.log(medianFounder(arr1, arr2))