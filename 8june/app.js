// Practice problems
// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal
/* Your answer here*/
let a = 12;
let b = 12;
if (a == b) {
    console.log("Number1 and Number2 are equal");
} else {
    console.log("Number1 and Number2 are not equal");
}





// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
/* Your answer here
*/


let num1 = 10;

if (num1 % 2 == 0) {
    console.log(num1 + " is an even integer");
} else {
    console.log(num1 + " is an odd integer");
}


// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here
*/
let p1 = 10;
if (p1 > 0) {
    console.log(p1 + " is a positive number");
} else {
    console.log(p1 + " is a negative number");
}
// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here
*/
let l1 = 2016;
if (l1 % 4 == 0) {
    console.log(l1 + " is a leap year");
} else {
    console.log(l1 + " is not a leap year");
}



// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here
*/
let age = 21;
if (age >= 18) {
    console.log("Congratulation! You are eligible for casting your vote.");
} else {
    console.log("Sorry! You are not eligible for casting your vote.");
}
// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here
*/
let m = 5;
if (m > 0) {
    console.log("The value of n = 1" );
} else if (m == 0) {
    console.log("The value of n = 0" );
} else {
    console.log("The value of n = -1");
}


// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here
*/

let h = 220;
if (h <= 135) {
    console.log("The person is Dwarf");
} else if (h > 135 && h <= 200) {
    console.log("The person is Medium");
} else {
    console.log("The person is Tall");
}


// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here
*/
number1 = 12,
    number2 = 25,
    number3 = 52;
if (number1 > number2 && number1 > number3) {
    console.log("The 1st Number = " + number1 + " 2nd Number = " + number2 + " 3rd Number = " + number3);
    console.log("The 3rd Number is the greatest among three");
} else if (number2 > number1 && number2 > number3) {
    console.log("The 1st Number = " + number1 + " 2nd Number = " + number2 + " 3rd Number = " + number3);
    console.log("The 2nd Number is the greatest among three");
} else {
    console.log("The 1st Number = " + number1 + " 2nd Number = " + number2 + " 3rd Number = " + number3);
    console.log("The 3rd Number is the greatest among three");
}


// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here
*/
let x = 7;
let y = -9;
if (x > 0 && y > 0) {

    console.log("The coordinate point (" + x + "," + y + ") lies in the First quadrant.");
} else if (x < 0 && y > 0) {
    console.log("The coordinate point (" + x + "," + y + ") lies in the Second quadrant.");
} else if (x < 0 && y < 0) {
    console.log("The coordinate point (" + x + "," + y + ") lies in the Third quadrant.");
} else {
    console.log("The coordinate point (" + x + "," + y + ") lies in the Fourth quadrant.");
}

// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140
// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.
/* Your answer here
*/
// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here
*/
// let n1 = 1;
// let n2 = 5;
// let n3 = 7;


// 12. Write a  program to find the sum of the first n natural numbers.
// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here
*/


// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here
*/
// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here
*/
let a1 = 50;
let b1 = 50;
let c1 = 60;
if (a1 == b1 && b1 == c1) {
    console.log("This is an Equilateral triangle");
} else if (a1 == b1 || b1 == c1 || a1 == c1) {
    console.log("This is an Isosceles triangle");
} else {
    console.log("This is a Scalene triangle");
}





// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here
*/

let angle1=40;
let angle2=55;
let angle3=65;
if (angle1+angle2+angle3==180 && angle1>0 && angle2>0 && angle3>0) {
    console.log("The triangle is valid");
} else {
    console.log("The triangle is not valid");
}



// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here
*/

let character = a;

if(character >=65 && character <=90 || character >=97 && character <=122){
    console.log("This is an alphabet");
} else if (character >=48 && character <=57) {
    console.log("This is a digit");
} else {
    console.log("This is a special character");
}






// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here
*/
let alphabet = "k";
if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {
    console.log("The alphabet is a vowel");
} else {
    console.log("The alphabet is a consonant");
}






// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here
*/
let buy = 500,
    sell = 700;
if (buy > sell) {
    console.log("You can booked your profit amount :" + (buy - sell));
} else {
    console.log("loss");
}
// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :
// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-
// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here
*/





// 20. Write a program to accept a grade and declare the equivalent description :
// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here
*/

let grade = "A";
switch (grade) {    
    case "E":
        console.log("You have chosen : Excellent");
        break;
    case "V":
        console.log("You have chosen : Very Good");
        break;
    case "G":
        console.log("You have chosen : Good");
        break;
    case "A":
        console.log("You have chosen : Average");
        break;
    case "F":
        console.log("You have chosen : Fail");
        break;
    default:
        console.log("Invalid grade");
        break;
}



// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here
*/
let day = 4;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}




// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here
*/
let digit = 4;
switch (digit) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;

    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    default:    
        console.log("Invalid digit");
        break;
}





// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here
*/
let Month = 4;
switch (Month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June ");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
   
    default:    
        console.log("Invalid Month Number");
        break;
}



// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days

let month = 7;
switch (month) {
    case 1:
        console.log("Jan have 31 days");
        break;
    case 2:
        console.log("Feb have 28 days");
        break;
    case 3:
        console.log("March have 31 days");
        break;
    case 4:
        console.log("April have 30 days");
        break;
    case 5:
        console.log("May have 31 days");
        break;
    case 6:
        console.log("June have 30 days");
        break;
    case 7:
        console.log("July have 31 days");
        break;
    case 8:
        console.log("August have 31 days");
        break;
    case 9:
        console.log("September have 30 days");
        break;
    case 10:
        console.log("October have 31 days");
        break;
    case 11:
        console.log("November have 30 days");
        break;
    case 12:
        console.log("December have 31 days");
        break;
    default:
        console.log("Invalid Month Number");
        break;
}