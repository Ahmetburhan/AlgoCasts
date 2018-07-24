// Please implement  the array reduce function and use it to answer the question that follows.

//Your reduce code start
function reduce(list, initialValue, callback) {
    for (var i = 0; i < list.length; i++) {

        initialValue = callback(initialValue, list[i]);

    }
    return initialValue;


}
//Your reduce code end


// Given a string of round brackets (parentheses) return true if the number of opening and closing match else return false
// '(())(())' returns true
// '(()((' returns false


//Your answer code start
let isValid = function(str){
    if(str.length === 0){
        return false;
    }
    let stack = [];
    for(let i=0; i<str.length; i++){
        let curr = str.charAt(i);
        if(curr === "("|| curr === "{" || curr === "["){
            stack.push(curr);

        } else if (curr === ")" && stack[stack.length - 1] === "(" || curr === "}" && stack[stack.length - 1] === "{" || curr === "]" && stack[stack.length - 1] === "[" ) {
            stack.pop()
            continue;
        } else {return false;}
    }return stack.length === 0
}


console.log(isValid("((())){}"))


let parens = "((())){}";
let arrParens = parens.split("");

let reduced =arrParens.reduce((count, parens)=>{
count[parens] = (count[parens]||0) + 1;
return count;
},{});

console.log(reduced)

//Your answer code end




