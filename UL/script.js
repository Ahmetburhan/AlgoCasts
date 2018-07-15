let arr1 = ["ali", "veli", "deli"];

// let items = document.querySelector(".items");

// const itemsArray = Array.from(array)
// console.log(itemsArray)
let str ="<ul>";
// let str;
arr1.forEach((el)=> {
//   let str = '<ul>';
   str += `<li>${el}</li>`;
});
str += "<ul>";
console.log(str)
document.querySelector(".lis").innerHTML = str;


// console.log(top)