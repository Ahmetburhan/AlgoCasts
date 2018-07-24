let tripletSum = function (nums, target) {
   nums = nums.sort(function(a,b) { return a-b})
    let result = []
   for(let i=0; i < nums.length -2; i++){
       let l = i + 1;
       let r = nums.length - 1;
    //    let sum = (nums[i] + nums[l] + nums[r]);
       while(l < r){
           if ((nums[i] + nums[l] + nums[r]) == target){
               result.push([nums[i], nums[l], nums[r]])
               return result;
           } else if ((nums[i] + nums[l] + nums[r]) < target){
               l++;
           } else {
               r--;
           }
       }
   } return result;


}

let nums = [2,3,4,5,6,7,8,0,9,0,10,16]
console.log(tripletSum(nums, 15))
