// Question 2
// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// use code javasript
function fourSum(nums, target) {
    const result = [];
    const n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array in ascending order
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicate values for the first element
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicate values for the second element
        }
  
        let left = j + 1;
        let right = n - 1;
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right];
          
          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);
            left++;
            right--;
  
            while (left < right && nums[left] === nums[left - 1]) {
              left++; // Skip duplicate values for the third element
            }
            while (left < right && nums[right] === nums[right + 1]) {
              right--; // Skip duplicate values for the fourth element
            }
          } else if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }

 
  