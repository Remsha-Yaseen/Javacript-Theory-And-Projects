


function addTogether() {
  const [first, second] = arguments;

  // Helper function to check if a value is a valid number
  const isNumber = (val) => typeof val === "number" && !isNaN(val);

  // Validate the first argument
  if (!isNumber(first)) {
    return undefined;
  }

  // Case 1: Two arguments are provided
  if (arguments.length === 2) {
    if (!isNumber(second)) {
      return undefined;
    }
    return first + second;
  }

  // Case 2: Only one argument is provided
  if (arguments.length === 1) {
    return function (nextNum) {
      if (!isNumber(nextNum)) {
        return undefined;
      }
      return first + nextNum;
    };
  }
}
