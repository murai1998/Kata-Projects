//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var moveZeros = function(arr) {
  let arr2 = arr.slice();
  let q = 0;
  let del = 0;
  arr.forEach((x, i) => {
    if (x === 0) {
      arr2.splice(i + del, 1);
      q++;
      del--;
    }
  });
  return [...arr2, ...Array(q).fill(0)];
};
