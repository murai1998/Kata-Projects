// This function should return an element from the multidimensional array (length > 0) by the specified indices (length > 0).

// For example:

//   ( [[1, 2], [3, 4], [5, 6]], [0,0] )  => 1        (arr[0][0])
//   ( ['one','two','three'], [2] )       => 'three'  (arr[2])
//   ( [[[ 1, 2, 3]]], [ 0, 0, 1 ] )      => 2        (arr[0][0][1])

function getElement(array, indexes) {
  //console.log(indexes.length)
  //return array[indexes[0]][indexes[1]]
  if (indexes.length == 1) return array[indexes[0]];
  if (indexes.length == 2) return array[indexes[0]][indexes[1]];
  if (indexes.length == 3) return array[indexes[0]][indexes[1]][indexes[2]];
}
