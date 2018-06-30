// Complete the countPairs function below.
function countPairs(numbers, k) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] - numbers[j] == k || numbers[j] - number[i] == k) {
                count++
            }
        }
    }

    return count;

}

console.log(countPairs([1,2,4,5,6], 4))