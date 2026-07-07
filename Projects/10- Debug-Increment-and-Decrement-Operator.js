

// --- Setup variables for your friend's program ---
let counter = 10;
let score = 8;
let coins = 3;
let health = 7;

// User Story 1 & 2: Uses prefix increment (++counter)
// Evaluates to 11 immediately and updates counter to 11
let updatedCounter = ++counter;

// User Story 3 & 4: Uses postfix increment (score++)
// Evaluates to the current value (8), then updates score to 9
let finalScore = score++;

// User Story 5 & 6: Uses prefix decrement (--coins)
// Evaluates to 2 immediately and updates coins to 2
let updatedCoins = --coins;

// User Story 7 & 8: Uses postfix decrement (health--)
// Evaluates to the current value (7), then updates health to 6
let newHealth = health--;

// --- Console Verification ---
console.log("updatedCounter (11):", updatedCounter);
console.log("finalScore (8):", finalScore);
console.log("updatedCoins (2):", updatedCoins);
console.log("newHealth (7):", newHealth);


