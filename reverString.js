let str = "Hi this is ah'met";

let reverse = function(str){
   return str.replace(/[^\w]/g,"").split("").reverse().join("")
}

console.log(reverse(str))