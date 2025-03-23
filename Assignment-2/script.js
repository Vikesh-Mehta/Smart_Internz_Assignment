// 1. Declare a variable age and assign it a value of 25. 
let age = 25;

// Then, declare another variable isAdult that is true if age is 18 or more, otherwise false.
let isAdult = age >= 18;

// 2. Given x = 10 and y = 5, perform the following operations and store the results:
let x = 10;
let y = 5;

let addition = x + y;          // Addition
let multiplication = x * y;    // Multiplication
let modulus = x % y;           // Modulus

// 3. Write a program that checks if a number n is even or odd and stores the result in a variable.
let n = 7; // You can change this value to test with different numbers
let isEven = (n % 2 === 0);

// 4. Write a for loop to store numbers from 1 to 5 in an array.
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}

// 5. Write a function square that takes a number as input and returns its square.
function square(num) {
    return num * num;
}

// Example usage of the square function
let squaredValue = square(4); // You can change the input to test with different numbers

// Output results
console.log("Age:", age);
console.log("Is Adult:", isAdult);
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log("Is Even:", isEven);
console.log("Numbers Array:", numbersArray);
console.log("Squared Value:", squaredValue);