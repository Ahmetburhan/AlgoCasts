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