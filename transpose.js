/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (a) {
    let result = [];
    let temp = []
    for (let i = 0; i < a[0].length; i++) {
        temp = []
        for (let j = 0; j < a.length; j++) {
            // console.log(a[i][j])
            temp.push(a[j][i])
        }
        result.push(temp)
    }
    return result
};


let A = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

console.log(transpose(A))