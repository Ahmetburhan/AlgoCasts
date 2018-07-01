var products = [
    { name: "cucumber", type: "fruit", quantity: 12, price: 10 },
    { name: "banana", type: "fruit", quantity: 11, price: 12 },
    { name: "banana", type: "fruit", quantity: 33, price: 12 },
    { name: "tomato", type: "vegie", quantity: 30, price: 12 },
]

//let filteredProducts;

products.filter((product) => product.type === "fruit"
    && product.quantity > 11 && product.price <= 12)




var post = { id: 4, title: "new Post" };
var comments = [
    { postID: 4, content: "awesome post" },
    { postID: 3, content: "its finet" },
    { postID: 4, content: "neat dude" }
];



function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postID === post.id;
    });
}

commentsForPost(post, comments)






var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => number > 50)




/////////// display admin users.


var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

var filteredUsers = users.filter((user) => user.admin)



var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
    return array.filter((arrItem) => arrItem !== iteratorFunction(arrItem))
}

var lessThanFifteen = function (number) {
    return number > 15;
};

function reject(array, iteratorFunction) {
    return array.filter(arrItem => !iteratorFunction(arrItem))

}


function reject(numbers, iteratorFunction) {
    return numbers.filter(function (number) {
        return !iteratorFunction(number);
    });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
});

lessThanFifteen

function reject(array, iteratorFunction) {
    return array.filter(item => !iteratorFunction(item));
}


//final answer
function reject(array, iteratorFunction) {
    return array.filter(arrItem => !iteratorFunction(arrItem))
}

