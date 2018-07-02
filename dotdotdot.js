function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    })
}


// ... converts input to array
console.log(addNumbers(2, 3, 4))



const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall green"];




//option1
//defaultColors.concat(userFavoriteColors)



["blue", ...fallColors, ...defaultColors, ...userFavoriteColors];



function validateShoppingList(...items) {
    if (items.indexOf("milk") < 0) {
        return ["milk", ...items];
    }
    return items;
}

validateShoppingList("oranges", "bread", "eggs")
