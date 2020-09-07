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

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
