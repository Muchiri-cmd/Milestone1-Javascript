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

// Challenge 3: Election Winner
function findWinner(arr) {
  let maxVotes = 0;
  let winner = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].votes > maxVotes) {
      maxVotes = arr[i].votes;
      winner = arr[i];
    }
  }
  return winner;
}

// Challenge4: Longest Word
function findLongestWord(arr) {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

//Challenge5: Count Properties
function countProperties(obj) {
  let properties = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      properties++;
    }
  }
  return properties;
}

// Challenge 6: FIlter By Length
function filterByLength(arr, minLength) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;

}

//Challenge 7: Sum of Even Numbers
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Challenge 8: DIfference between Sum of Even and Odd  numbers
function differenceEvenOdd(arr) {
  let sumEvenNumbers = 0;
  let sumOddNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenNumbers += arr[i];
    } else {
      sumOddNumbers += arr[i];
    }
  }
  let difference = sumEvenNumbers - sumOddNumbers;
  return difference;
}

//Challenge 9: Count Truthy
function countTruthy(obj) {
  let truthCount = 0;
  for (let key in obj) {
    if (obj[key]) { // Check if the value is truthy
      truthCount++;
    }
  }
  return truthCount;
}

//Challenge 10: Average of Numbers
function average(arr) {
  let total = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    let avg = total / arr.length;
    return avg;
  }

}

//Challenge 11: Lineear Search
function linearSearch(arr,value){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===value){
      return i;
    }
  }
  return -1;
}

//Challenge 12: Reverse Linear Search
function reverseLinearSearch(arr,value){
  for (let i = arr.length - 1;i >= 0; i--){
    if (arr[i]== value) return i;
  }
  return -1;
}

// Challenge 13: Linear Search All Indices
function linearSearchAll(arr,value){
  let indices = []
  for(let i = 0 ; i< arr.length; i++){
    if (arr[i] == value){
      indices.push(i);
    }
  }
  return indices;
}

//Test cases
console.log("Sum of Positives");
console.log(sumofPositives([1, -3, 5, -2, 9, -8])); //15

console.log("Find maximum value");
console.log(findMax([3, 7, 2, 9, 5])); //returns 9

console.log("Election Winner");
console.log(findWinner([
  { candidate: "Alice", votes: 50 },
  { candidate: "Bob", votes: 75 },
  { candidate: "Charlie", votes: 65 }
])); //returns { candidate: "Bob", votes: 75 }

console.log("Longest Word");
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
// returns: "grapefruit")

console.log("Count Properties");
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// returns: 3

console.log("Filter by Length");
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// returns: ["giraffe", "hippo", "elephant"])

console.log("Sum of Even Numbers");
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); //returns: 12 //because 2+4+6  =12 

console.log("Difference between Sum of Even and Odd numbers");
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3)

console.log("Count Truthy");
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// returns: 2  // "hello" and 42 are truthy)

console.log("Average of Numbers");
console.log(average([2, 4, 6, 8]));
// returns: 5)
console.log(average([]));
// returns: 0)

console.log("Linear Search");
console.log(linearSearch([5, 3, 7, 1, 4, 7], 7));  // returns: 5)
console.log(linearSearch([5, 3, 7, 1, 4], 10));    // returns: -1)

console.log("Reverse Linear Search");
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)); // returns: 5
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10)); // returns: -1

console.log("Linear Search All Indices")
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));  // returns: [2, 5])
console.log(linearSearchAll([5, 3, 7, 1, 4], 10));    // returns: [])