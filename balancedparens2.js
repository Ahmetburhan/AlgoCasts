function balanced(str) {

    let stack = []

    for (let i = 0; i < str.length; i++) {
        let curr = str.charAt(i)
        console.log(curr)
        if (curr == "(" || curr == "{" || curr == "[") {
            stack.push(curr)

        } else {
            if (curr == ")" && stack[stack.length - 1] == "(" || curr == "]" && stack[stack.length - 1] == "[" ||
                curr == "}" && stack[stack.length - 1] == "{")
                stack.pop();

        }
    }
    return stack.length === 0
}



balanced("[]({}{)")