// Question 1
// Given an integer array nums of length n and an integer target, find three integers
// in nums such that the sum is closest to the target.
// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1; // Pointer at the next element
      let right = nums.length - 1; // Pointer at the last element
  
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === target) {
          return currentSum; // Exact sum found, return it
        }
  
        // Update closest sum if the current sum is closer to the target
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
  
        if (currentSum < target) {
          left++; // Increment left pointer if the sum is less than target
        } else {
          right--; // Decrement right pointer if the sum is greater than target
        }
      }
    }
  
    return closestSum;
  }
  

  