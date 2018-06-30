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
var bracketCallback = function () {
    if (initialValue === "(")

}
   let  bracketString = '(())(())';
reduce(bracketString.split(''), 0, bracketCallback) == 0 ? console.log('true') : console.log('false')


//Your answer code end




let reducer = function (str) {

    let balanced = {
            ( : )
}
if (str.length === 0) {
    return false;
}
            
            
    
    
    
    
    
     } 