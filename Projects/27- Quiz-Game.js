


// User Stories 1 - 7: Create the questions array with 5 distinct question objects
const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris"],
    answer: "Paris"
  },
  {
    category: "Entertainment",
    question: "How many Academy Awards did the movie 'Titanic' win?",
    choices: ["11", "9", "14"],
    answer: "11"
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2018?",
    choices: ["Brazil", "France", "Germany"],
    answer: "France"
  }
];

// User Story 8: Function to get a random question object
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// User Story 9: Function to get a random choice from the question's choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// User Stories 10 - 14: Function to evaluate the results using exact equality
function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

