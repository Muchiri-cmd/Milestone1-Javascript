//Challenge 1: Sum of Positives
function sumofPositives(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { // Check if the number is positive
      sum += arr[i];
    }
  }
  return sum;
}

// Challenge 2: Find maximum value
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//Test cases
console.log("Sum of Positives");
console.log(sumofPositives([1, -3, 5, -2, 9, -8])); //15

console.log("Find maximum value");
console.log(findMax([3, 7, 2, 9, 5])); //returns 9
