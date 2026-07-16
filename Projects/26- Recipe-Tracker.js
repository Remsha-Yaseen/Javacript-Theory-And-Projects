

// Step 1: Empty array
const recipes = [];

// Steps 2 & 3: Recipe 1 object
const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

// Step 4: Recipe 2 object
const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

// Step 5: Recipe 3 object
const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

// Step 7: Push the objects into the array in order
recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

// Step 8: Function to get total ingredients
function getTotalIngredients(ingredients) {
  return ingredients.length;
}

// Step 9: Function to get difficulty level
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

// Step 11: Fill in recipe1 object properties directly
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// Step 12: Fill in recipe2 and recipe3 properties
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// Step 13: Log the recipes array to the console
console.log(recipes);

