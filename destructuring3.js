const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return { subject, time, teacher }
});
classesAsObject


"------------"
"  Way 1     "
"------------"

const classesAsObject1 = classes.map(aclass => {
    const [subject, time, teacher] = aclass;
    return { subject, time, teacher };
});
classesAsObject1;
