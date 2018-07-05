var myArr = [{
    "sortnumber": 9,
    "name": "Bob"
},
{
    "sortnumber": 5,
    "name": "Alice"
},
{
    "sortnumber": 4,
    "name": "John"
},
{
    "sortnumber": 3,
    "name": "James"
},
{
    "sortnumber": 7,
    "name": "Peter"
},
{
    "sortnumber": 6,
    "name": "Doug"
},
{
    "sortnumber": 2,
    "name": "Stacey"
}];

//myArr.sort(); // doesn't do anything since it doesn't know on what property to sort


// myArr.sort(function(a, b) {
//     return (a.sortnumber - b.sortnumber); // sorts array
//     // return (a.name - b.name); // doesn't sort array
// });



// sorts array even when I use name as property to sort on
// myArr.sort(function(a, b) {
//     if (a.sortnumber < b.sortnumber) return -1;
//     else if (a.sortnumber > b.sortnumber) return 1;
//     return 0;
// });

myArr.sort((a,b) => (a.sortnumber - b.sortnumber));



console.log(myArr);