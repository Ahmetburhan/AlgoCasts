const numbers = [1, 2, 3];

const doubled = (numbers) => {
    const [number, ...rest] = numbers;
    return (number === undefined) ? [] : [number * 2, ...doubled(rest)];
};

doubled(numbers);


//const numbers = [1, 2, 3];
"///"
function double([number, ...rest]) {

    if (!number) {
        return [];
    }

    return [number * 2, ...double(rest)]
}

double(numbers);


const numbers = [1, 2, 3];

const doubled = ([number, ...rest]) => {
    return (number === undefined) ? [] : [number * 2, ...doubled(rest)];
};

doubled([1, 4, 5, 7]);
