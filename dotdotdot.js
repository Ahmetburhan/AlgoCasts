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



const MathLibrary = {
    calculateProduct(...rest) {
        console.log("Please use multiply functions")
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }

}

MathLibrary.calculateProduct(2, 4)




function product(...numbers) {
    //var numbers = [a,b,c,d,e];

    return numbers.reduce((acc, number) => acc * number)
}


product(2, 3)


function join(array1, array2) {
    return [...array1, ...array2]

}


join([1, 2, 3], [4, 5, 7])