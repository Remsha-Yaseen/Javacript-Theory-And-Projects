

function frankenSplice(arr1, arr2, n) {
  // 1. Create a local copy of arr2 so we don't mutate the original array
  let localArray = arr2.slice();
  
  // 2. Use the spread operator (...) to insert all elements of arr1 
  // into localArray starting at index n, deleting 0 elements.
  localArray.splice(n, 0, ...arr1);
  
  // 3. Return the newly created merged array
  return localArray;
}
