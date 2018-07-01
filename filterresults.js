
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {

    return array.reduce((result, item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
        return result;
    }, []);


}

unique(numbers)

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {

    return array.reduce((previous, item) => {
        if (!previous.find(i => { return i === item })) {
            previous.push(item);
        }
        return previous;
    }, []);


}

unique(numbers)