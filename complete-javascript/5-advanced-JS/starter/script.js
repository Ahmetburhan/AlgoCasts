// function constructor
// var john = {
//     naem : "john",
//     yearOfBirth: 1990,
//     job: "teacher"
// }

var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function () {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = new Person ("john", 1990, "teacher")

console.log(john)
// john.calculateAge();