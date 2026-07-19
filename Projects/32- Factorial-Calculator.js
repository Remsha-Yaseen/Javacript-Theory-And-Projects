
// User Stories 1-4: Declare a number variable between 1 and 20
let num = 5; 

// User Stories 5-8 & 11: Create the factorial calculator function
function factorialCalculator(n) {
  // Declare a result variable initialized to 1
  let result = 1;
  
  // Loop through all numbers from 1 to the input number (inclusive)
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// User Stories 9-10: Call the function with num and save the output
let factorial = factorialCalculator(num);

// User Story 12: Format the required result string matching the template exactly
let resultMsg = `Factorial of ${num} is ${factorial}`;

// User Story 13: Output the message to the console
console.log(resultMsg);





