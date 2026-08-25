// Global variable to keep track of current array state
let currentArray = [];

// 1. Return a random integer between 1 and 100 inclusive
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

// 2. Generate an array of 5 random integers using generateElement
function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

// 3. Create and return an empty div element
function generateContainer() {
  return document.createElement("div");
}

// 4. Populate an element with 5 span elements, each containing a number from the array
function fillArrContainer(element, arr) {
  element.innerHTML = "";
  arr.forEach((num) => {
    const span = document.createElement("span");
    span.textContent = num;
    element.appendChild(span);
  });
}

// 5. Return true if first integer is less than or equal to the second
function isOrdered(a, b) {
  return a <= b;
}

// 6. Swap elements in place at index and index+1 if not ordered
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

// 7. Highlight child elements at index and index+1 with red dashed border
function highlightCurrentEls(element, index) {
  const children = element.children;
  if (children[index]) {
    children[index].style.border = "2px dashed red";
  }
  if (children[index + 1]) {
    children[index + 1].style.border = "2px dashed red";
  }
}

// DOM Elements
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const startingArrayEl = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

// Click handler for #generate-btn
generateBtn.addEventListener("click", () => {
  // Clear any step containers inside arrayContainer except #starting-array
  const extraContainers = arrayContainer.querySelectorAll("div:not(#starting-array)");
  extraContainers.forEach((el) => el.remove());

  // Generate new 5-element array
  currentArray = generateArray();

  // Populate #starting-array
  fillArrContainer(startingArrayEl, currentArray);
});

// Click handler for #sort-btn
sortBtn.addEventListener("click", () => {
  // Return early if no array has been generated yet
  if (!currentArray || currentArray.length === 0) return;

  // Clear previous sorting step containers if sort button is clicked again
  const extraContainers = arrayContainer.querySelectorAll("div:not(#starting-array)");
  extraContainers.forEach((el) => el.remove());

  // Clone current array to mutate step-by-step
  let arr = [...currentArray];
  let isSorted = false;

  // We need to keep track of whether we are rendering the first step (#starting-array)
  let isFirstStep = true;
  let currentContainer = startingArrayEl;

  // Bubble sort pass steps
  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (!isFirstStep) {
        currentContainer = generateContainer();
        arrayContainer.appendChild(currentContainer);
      }

      // Populate current step's container
      fillArrContainer(currentContainer, arr);

      // Highlight elements being compared in this step
      highlightCurrentEls(currentContainer, i);

      // Swap in array if needed
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        isSorted = false;
      }

      isFirstStep = false;
    }
  }

  // Final step: render the completely sorted array without highlights
  const finalContainer = generateContainer();
  fillArrContainer(finalContainer, arr);
  arrayContainer.appendChild(finalContainer);
});

