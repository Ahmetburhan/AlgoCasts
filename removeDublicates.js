let duplicates = function(array) {
    let seen = new Set();
    // let duble= [];
for(let el of array){
    if (!seen.has(el)) {
            seen.add(el);
        }
        // //this is if you want to show doubles
        // else{
        //     duble.push(el)

        // }
    } return console.log(seen);

}

let sort = [1,2,3,4,4,5,4,3,5,4,7];

duplicates(sort);
