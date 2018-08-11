let obj = {
    name: "ahmet",
    age: 12,
    dob: "11/23/44",

}

console.log(Object.keys(obj).length - 1)

// console.log(obj) // implement stringify

console.log(JSON.stringify(obj));
// JSON.parse("JSON string")

let stringify = function (obj) {
    let result = ''
    let last = Object.keys(obj).length - 1
    let index = 0
    for (let key in obj) {
        if (index == last) {
            result += `"${key}":"${obj[key]}"`

        } else {
            result += `"${key}":"${obj[key]}",`
            index++;
        }
    }

    //obj[lastindex]
    '"name":"ahmet","age":"12","dob":"12/12/21",'
    //   result = result.slice(0,-1);
    result = `{${result}}`
    return result;

}

console.log(stringify(obj))

// {"index:0,name":"ahmet",
// "index:1,age":"12",
// "index:2,dob":"11/23/44",}




