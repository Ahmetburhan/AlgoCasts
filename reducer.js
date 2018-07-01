function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}


var username = new Field("2cool");
var password = new Field("my_password");
var stapper = new Field("");


var fields = [username, password, stapper];

var formIsValid = fields.every((field) => field.validate());

console.log(formIsValid)
//returns fallse because of stapper is less than 0 so false.


var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every((user) => user.hasSubmitted)

var someSubmitted = users.some((user) => user.hasSubmitted)

console.log("some:", someSubmitted);
console.log(hasSubmitted)



var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function (request) {
    return request.status === "pending"
})
inProgress