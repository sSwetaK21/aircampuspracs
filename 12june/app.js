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


// Take a number and print the square of the number

function numberSquare(num) {
    //Write your code here
    return num ** 2;
  }
  console.log(numberSquare(2))

    // Take a number and print the cube of the number

    function numberCube(num) {
        return num ** 3;
    }
    console.log(numberCube(2))

    // Take a number and print the square root of the number
    function numberSquareRoot(num) {
        return Math.sqrt(num);
    }
    console.log(numberSquareRoot(4))

    // Take a number and print the cube root of the number
    function numberCubeRoot(num) {
        return Math.cbrt(num);
    }
    console.log(numberCubeRoot(8))

    // Take a number and print the factorial of the number
    function numberFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }