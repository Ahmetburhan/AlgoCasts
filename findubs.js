let nums = [1, 3, 45, 6, 7, 8, 90, 6, 6, 7, 8, 6]

let nonDublicate = function (nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    return [...set]

}
console.log("non dubs", nonDublicate(nums))
//return dublicates


let dublicates = function (nums) {
    let set = new Set()
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            set.add(nums[i])
        } else {
            map[nums[i]] = nums[i]
        }
    }
    return [...set]

}
console.log("dubs", dublicates(nums))