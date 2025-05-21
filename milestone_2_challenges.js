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
function findWinner(arr){
  let maxVotes = 0;
  let winner= {};
  for (let i = 0 ; i < arr.length; i++) {
    if (arr[i].votes > maxVotes) {
      maxVotes = arr[i].votes;
      winner = arr[i];
    }
  }
  return winner;
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
