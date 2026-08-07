


function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  } else {
    const numArray = rangeOfNumbers(startNum, endNum - 1);
    numArray.push(endNum);
    return numArray;
  }
}


