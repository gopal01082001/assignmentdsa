// 
function findMissingRanges(nums, lower, upper) {
    const ranges = [];
  
    let next = lower;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > next) {
        ranges.push(createRange(next, nums[i] - 1));
      }
      next = nums[i] + 1;
    }
  
    if (next <= upper) {
      ranges.push(createRange(next, upper));
    }
  
    return ranges;
  }
  
  function createRange(start, end) {
    return start === end ? [start] : [start, end];
  }
  
  // Example usage:
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const missingRanges = findMissingRanges(nums, lower, upper);
  console.log(missingRanges);
  