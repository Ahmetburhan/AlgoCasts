/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, count) {
    if (!count) {
        var count = 0;
    }

    if (n === 1) {
        return true;
    }

    if (count > 50) {
        return false;
    }

    var happySplit = n.toString().split('');

    var sumSquare = happySplit.reduce(function (prev, val) {
        console.log(prev + (Math.floor(val * val)))
        return prev + (Math.floor(val * val));
    }, 0);

    count++;
    return isHappy(sumSquare, count);
};


console.log(isHappy(16))


console.log(isHappy(19))


