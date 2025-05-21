// Challenge 1: Sum of Two Numbers
function addition(num1, num2) {
  return num1 + num2;
}

// Challenge 2: Convert minutes into seconds
function convert(minutes) {
  return minutes * 60;
}

// Challenge 3:Find the perimeter of a rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}

// Challenge 4: Check Negative
function isNegative(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
// Challenge 5: Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    return `${name} is old enough to drive`;
  } else {
    return `${name} is not old enough to drive yet`;
  }
}

// Challenge 6: Largest Number
function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// Challenge 7 : BMI Calculator
function calculateBMI(weight, height) {
  let BMI = Number((weight / (height * height)).toFixed(1));
  if (BMI < 18.5) {
    return `Your BMI is ${BMI} - Underweight`;
  } else if (BMI >= 18.5 && BMI < 24.9) {
    return `Your BMI is ${BMI} - Normal weight`;
  } else if (BMI >= 25 && BMI < 29.9) {
    return `Your BMI is ${BMI} - Overweight`;
  } else {
    return `Your BMI is ${BMI} - Obese`;
  }
}

//Challenge 8: Greeting Based on Time
function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}!`;
  } else if (hour >= 12 && hour <= 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour >= 18 && hour <= 21) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}!`;
  }
}

// Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
  // Check first if the number is divisible by 3 and 5 
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

//Challenge 10: Perimeter 2
function perimeter(letter, num) {
  if (letter === "s") {
    return 4 * num;
  } else if (letter === "c") {
    return (6.28 * num);
  } else {
    return "Invalid input";
  }
}

// Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

// Challenge 12: Multiply by itself
function powerUp(num, times) {
  let result = 1;
  for (let i = 0; i < times; i += 1) {
    result = result * num
  }
  return result;
}

//challenge 13: Factorial Calculator - Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Challenge 14: Multiple sum
function sumMultiples(n, divisor) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  return sum;
}

// Challenge 15: Sum of Digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    // get the last digit
    let lastDigit = num % 10;
    // add it to the sum
    sum += lastDigit;
    // remove the last digit 
    num = Math.floor(num / 10);
  }
  return sum;
}

//Test cases
console.log("Addition of two numbers");
console.log(addition(3, 5)); //8
console.log(addition(-6, 9)); //3

console.log("Convert minutes into seconds");
console.log(convert(5)); //300
console.log(convert(2)); //120

console.log("Find the perimeter of a rectangle");
console.log(findPerimeter(6, 7)); //26
console.log(findPerimeter(20, 10)); //60

console.log("Check Negative");
console.log(isNegative(-23)); //true
console.log(isNegative(55)); //false

console.log("Can I Drive");
console.log(canDrive("Jane", 22)); //Jane is old enough to drive
console.log(canDrive("June", 12)); //June is not old enough to drive yet

console.log("Largest Number");
console.log(findLargest(5, 9, 3)); //9
console.log(findLargest(10, 10, 10)); //10
console.log(findLargest(-1, -5, -3)); //-1

console.log("BMI Calculator");
console.log(calculateBMI(68, 1.75)); //Your BMI is 22.2 - Normal weight
console.log(calculateBMI(85, 1.8)); // Your BMI is 26.2 - Overweight

console.log('Greeting Based on Time');
console.log(greetUser("Alice", 10)); //Good morning, Alice!

console.log("FizzBuzz Check")
console.log(fizzBuzzCheck(3)); //Fizz
console.log(fizzBuzzCheck(10)); //Buzz
console.log(fizzBuzzCheck(15)); //FizzBuzz
console.log(fizzBuzzCheck(7)); //7

console.log("Perimeter of Shapes");
console.log(perimeter("s", 7)); //28
console.log(perimeter("c", 4)); //25.12

console.log("Sum of Even Numbers");
console.log(sumEvenNumbers(6)); //12 (2+4+6)
console.log(sumEvenNumbers(10)); //30 (2+4+6+8+10)
console.log(sumEvenNumbers(5)); //6 (2+4)

console.log("Multiply by itself");
console.log(powerUp(2, 3)); //8 (2*2*2)
console.log(powerUp(5, 0)); // 1 (anyhing to the zero power is 1)
console.log(powerUp(3, 4)); //81 (3*3*3*3)
console.log(powerUp(0)); //1


console.log("Factorial Calculator");
console.log(factorial(0)); //1
console.log(factorial(4)); //24 (1*2*3*4)
console.log(factorial(6)); //720 (1*2*3*4*5*6)

console.log("Multiple sum");
console.log(sumMultiples(10, 2)); //30 (2+4+6+8+10)
console.log(sumMultiples(15, 3)); //45 (3+6+9+12+15)
console.log(sumMultiples(7, 5)); //5

console.log("Sum of Digits");
sumDigits(123); //6 (1+2+3)
sumDigits(4567); //22 (4+5+6+7)
sumDigits(0); //0