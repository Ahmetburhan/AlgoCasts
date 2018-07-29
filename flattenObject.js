let flattenObj = function (obj){
    let result = {};
    for(let i in obj){
        if((typeof obj[i] == "object")){
            let flatten = flattenObj(obj[i]);
            for (let x in flatten){
               result[i+"."+x] = flatten[x];
            }
        } else {
            result[i]= obj[i];
        }
    }return result;

}


// var flattenObject = function (ob) {
//     var toReturn = {};

//     for (var i in ob) {

//         // console.log("im loggin",ob.hasOwnProperty(i))
//         // if (!ob.hasOwnProperty(i)) continue;

//         if ((typeof ob[i]) == 'object') {
//             var flatObject = flattenObject(ob[i]);
//             for (var x in flatObject) {
//                 if (!flatObject.hasOwnProperty(x)) continue;

//                 toReturn[i + '.' + x] = flatObject[x];
//             }
//         } else {
//             toReturn[i] = ob[i];
//         }
//     }
//     return toReturn;
// };
var o = {
    a: {
        m: {
            x: "1",
            y: "2"
        }
    },
    b: "3",
    c: {
        m: "4"
    }
};
/*
output:
{
  a.m.x: 1
  a.m.y: 2
  b: 3
  c.m: 4
}
*/

console.log(flattenObj(o))

