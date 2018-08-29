function bitStrings(n) {
    let result = [];

    function generateStrings(str, depth) {
        if (depth === n) {
            result.push(str);
            return;
        }
        generateStrings(str + "0", depth + 1)

        if ((depth - 1 < 0) || str[depth - 1] !== "1") {
        generateStrings(str + "1", depth + 1)
        }


    }

    generateStrings("", 0)

    return result;
}


// bitStrings(3)



function balancedParensPermutations(num) {
    let result = [];

    function permute(str, open, close) {
        if (open === 0 && close === 0) {
            result.push(str);
            return;
        }
        if (open === close) {
            permute(str + "(", open - 1, close);
        } else if (open === 0) {
            permute(str + ")", open, close - 1);
        } else {
            permute(str + "(", open - 1, close);
            permute(str + ")", open, close - 1);
        }
    }
    permute("", num, num);

    return result;
}

balancedParensPermutations(3)