/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map();
    for(let i = 0; i < strs.length; i++){
        var string = strs[i].split('').sort().join('');
        if (map.has(string)){
            map.set(string, [...map.get(sting), strs[i]]);
        } else {
            map.set(string, [strs[i]]);
        }
    }
    var result = [];
    for (var value of map.values()){
        result.push(value);
    } return result;

    
};






console.log(groupAnagrams(["qwqeqwe", "qweqwew", "qwqdddeqwe", "qweqdddwew"]))






// function validAnagram(str1, str2) {
//     let sortedStr1 = str1.split('').sort().join("");
//     let sortedStr2 = str2.split('').sort().join("");

//     return sortedStr1 === sortedStr2;


// }
