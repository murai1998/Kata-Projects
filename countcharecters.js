// Count characters in your string
// 3148389% of 1,98610,895 of 19,619riston
// JavaScript
// TRAIN AGAINNEXT KATA
// Details
// Solutions
// Forks (7)
// Discourse (87)
// Collect|
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// FUNDAMENTALSSTRINGSASCIICHARACTER ENCODINGSFORMATS

function count(string) {
  let obj = {};
  string.split("").forEach(x => {
    if (!obj.hasOwnProperty(x)) obj[x] = 1;
    else obj[x] += 1;
  });
  return obj;
}
