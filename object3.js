var foo = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 }
var props = Object.keys(foo).map(function (key) {
    return { key: key, value: this[key] };
}, foo);


props.sort(function (p1, p2) { return p2.value - p1.value; });

console.log(props)

var topThree = props.slice(0, 3);

console.log(topThree)

console.log(Object.values(topThree))
// console.log(Object.keys(foo))
// console.log(Object.values(foo))


