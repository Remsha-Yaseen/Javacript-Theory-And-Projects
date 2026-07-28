
// 1. Declare the empty inventory array
let inventory = [];

// 2. Find a product index using its lowercase name
function findProductIndex(productName) {
  const searchName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === searchName) {
      return i;
    }
  }
  return -1;
}

// 3. Add or update a product in the inventory
function addProduct(productObj) {
  const lowerName = productObj.name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index !== -1) {
    // Product exists, update quantity
    inventory[index].quantity += productObj.quantity;
    console.log(lowerName + " quantity updated");
  } else {
    // Product doesn't exist, push a new object with the lowercase name
    inventory.push({ name: lowerName, quantity: productObj.quantity });
    console.log(lowerName + " added to inventory");
  }
}

// 4. Remove or reduce a product from the inventory
function removeProduct(productName, quantity) {
  const lowerName = productName.toLowerCase();
  const index = findProductIndex(lowerName);

  // Case 1: Product not found
  if (index === -1) {
    console.log(lowerName + " not found");
    return;
  }

  const currentProduct = inventory[index];

  // Case 2: Not enough quantity to subtract
  if (currentProduct.quantity < quantity) {
    console.log("Not enough " + lowerName + " available, remaining pieces: " + currentProduct.quantity);
    return;
  }

  // Perform subtraction
  currentProduct.quantity -= quantity;

  // Case 3: Quantity hits exactly zero (remove item entirely)
  if (currentProduct.quantity === 0) {
    console.log("Remaining " + lowerName + " pieces: 0");
    inventory.splice(index, 1);
  } else {
    // Case 4: Successful subtraction with items remaining
    console.log("Remaining " + lowerName + " pieces: " + currentProduct.quantity);
  }
}
