

// 1. initStack
function initStack() {
  return {
    collection: []
  };
}

// 2. push
function push(stack, element) {
  stack.collection.push(element);
}

// 3. pop
function pop(stack) {
  return stack.collection.pop();
}

// 4. peek
function peek(stack) {
  if (stack.collection.length === 0) {
    return undefined;
  }
  return stack.collection[stack.collection.length - 1];
}

// 5. isEmpty
function isEmpty(stack) {
  return stack.collection.length === 0;
}

// 6. clear
function clear(stack) {
  stack.collection = [];
}





