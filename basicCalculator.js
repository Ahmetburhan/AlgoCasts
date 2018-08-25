/**
 * @param {string[]} str
 * @return {string[][]}
 */
var basicCalculator = function(str) {
    let result = []

    for(let i = str.length -1; i>0; i--){
        let curr = str.charAt(i)
        // console.log(curr)
        if (curr == ")" && str.charAt(i-1) !== ")" ){
            continue
        } else {
            if(curr == ")"){
                continue
            } else{
                if (str.charAt(i - 1) === "-"){
                    result.push(curr * (-1))
                    i--
                }else if (str.charAt(i - 1) === "+") {
                    result.push(curr)
                } else {
                    result.push(curr)
                }
                
            }
        }

    }


  
    return result;
};

console.log(basicCalculator("-(5+(6-5))"))
