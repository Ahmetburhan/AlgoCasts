// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug

let nums = [1, 2, 3, 4, 6]

// function delay(array, sn) {
//     for (let i = 0; i < array.length; i++) {
//         setTimeout(() => {
//             console.log(array[i]);
//         }, array[i] * sn)

//     }
// }



for (let i = 1; i <= 10; i++) {
    (function (i) {

        setTimeout(() => {
            console.log(i)
        }, i * 1000);

    })(i);
}


// delay(nums,2000)
