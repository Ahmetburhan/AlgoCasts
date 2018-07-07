function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if (previous < 0) { return previous; }
        if (char === "(") { return ++previous; }
        if (char === "{") { return ++previous; }
        if (char === "[") { return ++previous; }

        if (char === ")") { return --previous; }
        if (char === "}") { return --previous; }
        if (char === "]") { return --previous; }
        return previous;
    }, 0);
}

function balanced(string) {
    return !string.split("").reduce(function (previous, char){
        if(char === "(") {return ++previous;}
        if(char === ")") {return --previous;}
        return previous;
    }, 0)
}

// balanced("(}");

// console.log("this one", balanced("()())("))

console.log("this one", balancedParens("(){}"))


//! mark makes boolen
//      if (previous < 0 {return previous;}
// makes check if they are like this orde )( return false

// balancedParens("()()()()[][]][{}{}{}{}{}");