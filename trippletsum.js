let tripletSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    console.log(nums)
    result =[];
    let l,r;

    for(let i=0; i < nums.length -2; i++){
        l = i+1;
        r = nums.length -1;



        while (l<r){
            if ((nums[i] + nums[l] + nums[r]) == target) {

                result.push([nums[i], nums[l], nums[r]]);
                return result;
            } else if (nums[i] + nums[l] + nums[r] < target) {
                l++;
            } else r--;

        }
        return result;
    }
    


}

let nums = [2,3,4,5,6,7,8,0,9,0,10,16]
console.log(tripletSum(nums, 15))
