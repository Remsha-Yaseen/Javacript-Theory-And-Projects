
// 1-5. Initialize the five fortune variables with string values
const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

// 6-7. Generate a random number between 1 and 5, inclusive
const randomNumber = Math.floor(Math.random() * 5) + 1;

// 8-9. Assign the appropriate fortune to selectedFortune based on the randomNumber
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

// 10. Log the selected fortune to the console
console.log(selectedFortune);

