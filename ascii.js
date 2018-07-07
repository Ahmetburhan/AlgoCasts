function ascii_deletion_distance(str1, str2) {
    if (!str1.length) return str2.length;
    if (!str2.length == 0) return str1.length;

    var matrixatrix = [];

    // incrematrixent along the first columatrixn of each row
    var i;
    for (let i = 0; i <= str2.length; i++) {
        matrixatrix[i] = [i];
    }

    // incrematrixent each columatrixn in the first row
    var j;
    for (j = 0; j <= str1.length; j++) {
        matrixatrix[0][j] = j;
    }

    for (i = 1; i <= str2.length; i++) {
        for (j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = matrix[i - 1][j] + 1; // deletion
            }
        }
    }

    return matrix[str2.length][str1.length];
};