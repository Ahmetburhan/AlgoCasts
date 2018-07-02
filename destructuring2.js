const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];



points;
"---"

points.map(([x, y]) => {
    return { x, y };
})

// console.log below
// [[4, 5], [10, 1], [0, 40]]
// ---
//     [{ "x": 4, "y": 5 }, { "x": 10, "y": 1 }, { "x": 0, "y": 40 }]


const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
    var { title } = profile;
    var { department } = profile;
    return title === 'Engineer' && department === 'Engineering';
}


