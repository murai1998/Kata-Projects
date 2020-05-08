function sumTwoSmallestNumbers(numbers) {  
    let  min1 = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min1), 1);
    let  min2 = Math.min(...numbers)
    return min1 + min2; 
  }