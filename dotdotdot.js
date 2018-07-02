function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number
    })
}


// ... converts input to array
console.log(addNumbers(2, 3, 4))
