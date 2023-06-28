// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
function singleNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
      result ^= num; // XOR operation
    }
    
    return result;
  }
  
  // Test case
  const nums = [2, 2, 1];
  console.log(singleNumber(nums)); // Output: 1
  