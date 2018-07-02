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