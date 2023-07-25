const twoSum = function (nums, target) {
  const arr = [];
  const nums = nums.length;
  for (let i = 0; i < nums; i++) {
    for (let j = 0; j < nums; i++) {
      if (nums[i] + nums[j] == target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};
