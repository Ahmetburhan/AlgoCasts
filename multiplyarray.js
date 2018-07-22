let numbers = [2,3,4,5,-4,-5,-1,40,6]

let multiply = function (numbers, target) {
    let result = [];
    for(let i = 0; i< numbers.length; i++){
        for(let j = 1; j < numbers.length; j++){
            if(numbers[i] * numbers[j] == 20){
                result.push(numbers[i]);
                console.log(numbers[i]);
                console.log(numbers[j])
                // result.push(numbers[j]);
            } 
        }
    }return result;
}

console.log(multiply(numbers))