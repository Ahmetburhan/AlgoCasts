var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

let pluck = paints.map((paint) => paint.color)
    

let foro = function(obj){
    let result = [];
    for(let color in obj){
        result.push(obj[color].color)
    } return result

}


console.log(foro(paints))

console.log(pluck)

