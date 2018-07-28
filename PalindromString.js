var isSquare = function (n) {
    // if (n < 0) {
    //     return false
    // };
    // if (n == 0) {
    //     return true;
    // };
    // let root = Math.sqrt(n)
    // if (root * root == n) { return true }
    // return false; // fix me

    return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(33))
console.log(isSquare(9))
console.log(isSquare(3))
console.log(isSquare(11))
console.log(isSquare(-9))

// Test.describe("isSquare", function () {
//     Test.it("should work for some examples", function () {
//         Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//         Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
//         Test.assertEquals(isSquare(3), false, "3 is not a square number");
//         Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
//         Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//         Test.assertEquals(isSquare(26), false, "26 is not a square number");
//     });
// });