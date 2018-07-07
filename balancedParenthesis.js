// function balancedParens(string) {
//     return !string.split("").reduce(function (previous, char) {
//         if (previous < 0) { return previous; }
//         if (char === "(") { return ++previous; }
//         if (char === "{") { return ++previous; }
//         if (char === "[") { return ++previous; }

//         if (char === ")") { return --previous; }
//         if (char === "}") { return --previous; }
//         if (char === "]") { return --previous; }
//         return previous;
//     }, 0);
// }

function balanced(string) {
    return !string.split("").reduce(function (previous, char){
        if(char === "(") {return ++previous;}
        if(char === ")") {return --previous;}
        return previous;
    }, 0)
}


function balanced(string) {
    let stack = [];
    for (let i = 0, l = string.length; i < l ; i++ ) {
        if (string.charAt(i) === "(" || string.charAt(i) === "{" || string.charAt(i) === "[") {
            stack.push(string.charAt(i));
        } else {
            if ((stack[stack.length - 1] === "(" && string.charAt(i) === ")" || stack[stack.length - 1] === "{" && string.charAt(i) === "}" || stack[stack.length - 1] === "[" && string.charAt(i) === "]")) {
                
                stack.pop();
                
                continue;
                
            } return false;
        }

    } return console.log("testing", stack), stack.length === 0;
}

// balanced("(}");

console.log("this one", balanced("{}(){}{}["))

// console.log("this one", balancedParens("(){}"))


//! mark makes boolen
//      if (previous < 0 {return previous;}
// makes check if they are like this orde )( return false

// balancedParens("()()()()[][]][{}{}{}{}{}");