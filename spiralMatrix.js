
function matrixSpiral(n) {
    let matrix = []
    for (let i = 0; i < n; i++) {
        let newArr = new Array(n).fill(0)
        matrix.push(newArr)
    }
    let minRow = 0,
        maxRow = n - 1,
        minCol = 0,
        maxCol = n - 1,
        counter = 1;

    while (minRow <= maxRow && minCol <= maxCol) {

        for (let col = minCol; col <= maxCol; col++) {
            matrix[minRow][col] = counter;
            counter += 1;
        }
        minRow += 1

        for (let row = minRow; row <= maxRow; row++) {
            matrix[row][maxCol] = counter;
            counter += 1;
        }
        maxCol -= 1

        for (let col = maxCol; col >= minCol; col--) {
            matrix[maxRow][col] = counter;
            counter += 1;
        }

        maxRow -= 1

        for (let row = maxRow; row >= minRow; row--) {
            matrix[row][minCol] = counter;
            counter += 1
        }

        minCol += 1

    }

    return matrix;


}

console.log(matrixSpiral(4))
