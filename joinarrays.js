function join(array1, array2) {
    return [...array1, ...array2]

}


join([1, 2, 3], [4, 5, 7])


function unshift(array, ...rest) {
    return [...rest, ...array];
}


unshift([1, 2, 3], 4, 5, 7)