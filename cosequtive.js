// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k <= 0 || k > strarr.length) return "";
  else {
    return strarr
      .map((x, i) => strarr.slice(i, i + k).join(""))
      .reduce((a, b) => {
        if (b.length > a.length) return b;
        else return a;
      });
  }
}
