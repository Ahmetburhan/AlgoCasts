function minimumSwaps(arr) {
    let result = [];

    for (let i = 0; i > arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i > j) {
                let temp = i;
                i = j;
                j = temp;
                result.push(i)
            }
        } 
    } return result;


}


console.log(minimumSwaps([1,4,3,5,6]))