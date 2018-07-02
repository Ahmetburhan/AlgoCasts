function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
}
console.log(doubleMessage(3))

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("ahmet", "burhan")


const double = (num) => num * 2;
console.log(double(2))



const numbers = [1, 2, 3]

const doubled = numbers.map((num) => num * 2);
console.log(doubled)