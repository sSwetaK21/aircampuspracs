// Take two numbers and find the quotient and remainder.

// Input:
// Input are provided as functional parameter.

// Output:
// Return comma seperated quotient and remainder.

// Eg 1:

// 10
// 2

// output:

// 5,0
// Note :- If you cannot divide the numbers then the output must be "-1,-1".
let a=5;
let b=10;
let quotient = 0;
let remainder = 0;
function quotientAndRemainder(a, b) {
  if (a % b === 0) {
    quotient = a / b;
    remainder = 0;
  } else {
    quotient = Math.floor(a / b);
    remainder = a % b;
  }
  return quotient + "," + remainder;
}
