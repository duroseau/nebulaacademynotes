var runningSum = function(nums) {
    let num = []
    let sum = 0
  for (let i = 0;i<= nums.length-1;i++){
      sum+=nums[i]
      num.push(sum)
  }
    return num
};
