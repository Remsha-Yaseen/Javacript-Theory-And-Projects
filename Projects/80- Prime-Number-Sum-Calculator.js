


function sumPrimes(num) {
  // Prime numbers start at 2
  if (num < 2) {
    return 0;
  }

  // Helper function to check if a number is prime
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let totalSum = 0;

  // Iterate through all numbers from 2 up to num
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      totalSum += i;
    }
  }

  return totalSum;
}


