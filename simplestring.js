// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s) {
  let uc = 0;
  let lc = 0;
  let n = 0;
  let sc = 0;
  [...s].forEach(x => {
    if (x.match(/[A-Z]/)) uc++;
    if (x.match(/[a-z]/)) lc++;
    if (x.match(/[0-9]/)) n++;
    if (x.match(/[^A-Za-z0-9]/)) sc++;
  });
  return [uc, lc, n, sc];
}
