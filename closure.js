//IIFEE
// var counter = ( function() {
//     var count = 0;
//     return function (){
//         count++;
//         console.log(count);
//     }
// }());

var Counter2 = function () {
    count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
var counter = Counter2();



counter();
counter();