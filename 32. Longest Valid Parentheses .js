/**
 * @param {string} s
 * @return {number}
 */

const longestValidParentheses = s => {
    const stack = [];
    let max = 0;
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                console.log(i - stack[stack.length - 1])
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};

// var longestValidParentheses = function (s) {

//     let map = [];
//     count = 0;

//     let arrStr = s.split("");

//     for (let i= 0; i < arrStr.length; i++) {
//         let j = i + 1;
//         if (arrStr[i] === "(" && arrStr[j] === ")") {
//             // map.push(arrStr[i])
//             count++
//         }
//     } return count;

// };

let s = ")()((()))()";
console.log(longestValidParentheses(s))

