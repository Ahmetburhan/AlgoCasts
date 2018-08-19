
function happy(n, count) {
    if (!count) {
        let count = 0;
    }
    if (n === 1) {
        return true
    }
    if (count > 50) {
        return false
    }
    let happysplit = n.toString().split("")
    console.log(happysplit)
    let summer = happysplit.reduce((prev, val) => {
        return prev + (Math.floor(val * val))
    }, 0)
    count++
    console.log(summer, count)
    return happy(summer, count)
}

happy(19)