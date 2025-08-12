console.log("Hello World from TypeScript!");
console.log("This file runs directly with ts-node when you use 'yarn start'");

// Simple function example
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Basic variable
const userName: string = "Developer";
console.log(greet(userName));

// Array example
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Simple calculation
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);