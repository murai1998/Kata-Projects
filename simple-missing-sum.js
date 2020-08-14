// In this Kata, we will calculate the minumum number that is not a possible sum from a list of integers.

// solve([1,2,8,7]) = 4 => we can get 1, 2, 3 (from 1+2), but we cannot get 4. 4 is the minimum number not possible from the list.
// solve([4,1,2,3,12]) = 11. We can get 1, 2, 3, 4, 4+1=5, 4+2=6,4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10. But not 11.
// solve([2,3,2,3,4,2,12,3]) = 1. We cannot get 1.

function solve(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sum + 1) break;
    sum += arr[i];
  }
  return sum + 1;
}
