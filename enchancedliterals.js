const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

console.log(COLORS)

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

console.log(props)




function sum(a = 0, b = 0) {

    return a + b;
}

sum(2 + 3)