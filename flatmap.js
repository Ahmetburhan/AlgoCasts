var data = [[1,2],[4],[2,3]]

var flatten = function(arr){
    var flatMap = [];
    arr.forEach(function(value) {
        if(Array.isArray(value)) {
        flatMap.concat(flatten(value))
        } else {
            flatMap.push(value);
        }
    })
    return flatMap;
}

var result = flatten(data)
console.log(result)