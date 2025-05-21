//Challenge 1: Sum of Positives
function sumofPositives(arr){
  let sum = 0;
  for(let i = 0 ; i < arr.length; i++ ){
    if(arr[i] > 0){ // Check if the number is positive
      sum += arr[i];
    }
  }
  return sum;
}

//Test cases
console.log(sumofPositives([1, -3, 5, -2, 9, -8 ])); //15