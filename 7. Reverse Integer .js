/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var negative = false;
    if (x < 0) {
        negative = true;
        x = Math.abs(x);
    }

    let result = Number(String(x).split('').reverse().join(''));



    if (result > Math.pow(2, 31) || result < -Math.pow(2, 31)) {
        return 0;
    }
    if (negative) {
        return result *= -1;
    } return result;

}

console.log(reverse(-12123132))