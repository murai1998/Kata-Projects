function willFit(present, box) {
  let p2 = present.sort((a, b) => a - b);
  let b2 = box.sort((a, b) => a - b);
  return p2.filter((x, i) => x >= b2[i] - 1).length > 0 ? false : true;
}

// Santa's elves are boxing presents, and they need your help! Write a function that takes two sequences of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.

// Examples: Present and box respectively

// [10, 7, 16], [13, 32, 10] --> true, box is bigger than present
// [5, 7, 9], [9, 5, 7]      --> false, present and box are same size
// [17, 22, 10], [5, 5, 10]) --> false, box is too small
