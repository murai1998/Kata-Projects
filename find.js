// Collect|
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let sortedA = A.sort((a, b) => a - b);
  let res = sortedA.filter(
    a => (sortedA.lastIndexOf(a) - sortedA.indexOf(a)) % 2 == 0
  );
  return res[0];
}
