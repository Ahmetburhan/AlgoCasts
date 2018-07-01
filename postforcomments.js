var posts = [
    { id: 1, title: "New Post" },
    { id: 2, title: "old Post" }
];

var comment = { postId: 1, content: "Great Post" };

function postForComments(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}
postForComments(posts, comment)


var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find((user) => user.admin)

console.log(admin);





var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find((account) => account.balance === 12)

console.log(account)