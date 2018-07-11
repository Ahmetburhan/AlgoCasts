function perfectNumber(number) {

    let divisors = [];

    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    console.log(divisors);

    let sum = 0;

    for (var i = 0; i < divisors.length; i++) {
        sum += divisors[i];
        return true;
    }

    return sum === number;

}

perfectNumber(28)