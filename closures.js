// Q:
// Implement add_to:



function add_to(num) {
    let result;
    return function (result) {
        console.log(num + result)

    }

}

var adding_to = add_to(6);
adding_to(10);      // returns 16


