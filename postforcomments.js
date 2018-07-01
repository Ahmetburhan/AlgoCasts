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