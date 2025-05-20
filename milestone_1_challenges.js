// Challenge 1: Sum of Two Numbers
function addition(num1,num2){
  return num1 + num2;
}

// Challenge 2: Convert minutes into seconds
function convert(minutes){
  return minutes * 60;
}

// Challenge 3:Find the perimeter of a rectangle
function findPerimeter(length,width){
  return 2 * (length + width);
}

// Challenge 4: Check Negative
function checkNegative(num){
  if(num < 0){
    return true;
  } else {
    return false;
  }
}

//Test cases
console.log("Addition of two numbers");
console.log(addition(3,5)); //8
console.log(addition(-6,9)); //3

console.log("Convert minutes into seconds");
console.log(convert(5)); //300
console.log(convert(2)); //120

console.log("Find the perimeter of a rectangle");
console.log(findPerimeter(6,7)); //26
console.log(findPerimeter(20,10)); //60

console.log("Check Negative");
console.log(checkNegative(-23)); //true
console.log(checkNegative(55)); //false