//write a function the copies of stringify
//it can be object string and array or number as well


// console.log(JSON.stringify({ x: 5, y: 6 }));
// // expected output: "{"x":5,"y":6}"

// console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// // expected output: "[3,"false",false]"


let stringify = function (arg) {
    let result = "{"

    if (typeof arg === "undefined") {
        return console.log("Arg is undefined")
    }

    if (typeof arg === "number") {

        return `${arg}`
    }

    if (typeof arg === "object") {

        for (let obj in arg) {
            if (typeof arg[obj] === "number") {
                result += `"${obj}":${arg[obj]},`
            }
            else {
                result += `"${obj}":"${arg[obj]}",`
            }
        }

        return result.substring(0, result.length - 1) + "}"
    }


}

console.log("original", JSON.stringify({ x: 5, y: 6 }));

// { '5': 'x', '6': 'y' }

// {"x":5,"y":6}
// console.log(stringify())

// console.log(stringify(3))
console.log(stringify({ x: 5, y: 6 }))