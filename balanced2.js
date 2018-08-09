let parens = "((({}{{}})))"

let parenFinder = function (str) {
    if (str.length == 0) {
        return true;
    }
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let curr = str.charAt(i);
        if (curr == "(" || curr == "{" || curr == "[") {
            stack.push(curr)

        }

    } else if (curr == ")" && stack[stack.length - 1] == "(" || curr == "}" && stack[stack.length - 1] == "{" || curr == "]" && stack[stack.length - 1] == "[") {
        stack.pop()
        continue;

    } else {
        return false;
    } return stack.length == 0

}

  
  
  



parenFinder(parens);