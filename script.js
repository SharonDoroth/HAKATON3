const questions = [
  {
    question: "What is your favorite color?",
    answers: ["Red", "Green", "Blue", "Yellow"],
  },
  {
    question: "Choose a hobby:",
    answers: ["Hiking", "Reading", "Cooking", "Gaming"],
  },
  {
    question: "Pick a mythical creature:",
    answers: ["Dragon", "Phoenix", "Unicorn", "Mermaid/Merman"],
  },
];

let currentQuestion = 0;
let answers = [];

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");

  if (currentQuestion < questions.length) {
    questionElement.textContent = questions[currentQuestion].question;

    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = questions[currentQuestion].answers[i];
    }
  } else {
    showResult();
  }
}

function nextQuestion(answerIndex) {
  answers.push({
    question: questions[currentQuestion].question,
    answer: questions[currentQuestion].answers[answerIndex - 1],
  });

  currentQuestion++;
  showQuestion();
}

function showResult() {
  const resultElement = document.getElementById("result");
  const responseList = document.getElementById("response-list");
  const quizContent = document.getElementById("quiz-content");
  const userResponses = document.getElementById("user-responses");

  // Create an image element for the funny GIF
  const gifElement = document.createElement("img");
  gifElement.id = "funny-gif";
  gifElement.alt = "Funny GIF";

  const sign = calculateZodiacSign();

  // Display a funny GIF based on the result
  switch (sign) {
    case "Aries":
      gifElement.src = "aries.gif";
      break;
    case "Taurus":
      gifElement.src = "taurus.gif";
      break;
    // Add cases for other signs and corresponding GIFs
    default:
      gifElement.src = "unknown.gif";
      break;
  }

  // Append the GIF element to the result area
  resultElement.textContent = `Your zodiac sign is ${sign}!`;
  resultElement.appendChild(gifElement);

  // Hide quiz content and show user responses
  quizContent.style.display = "none";
  userResponses.style.display = "block";

  // Display user responses
  answers.forEach((response) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${response.question}: ${response.answer}`;
    responseList.appendChild(listItem);
  });
}


function calculateZodiacSign() {
  // Customize this logic based on your preferences
  const colorAnswer = answers.find(
    (response) => response.question === "What is your favorite color?"
  ).answer;
  const hobbyAnswer = answers.find(
    (response) => response.question === "Choose a hobby:"
  ).answer;
  const creatureAnswer = answers.find(
    (response) => response.question === "Pick a mythical creature:"
  ).answer;

  // Example logic (customize this)
  if (colorAnswer === "Red") {
    if (hobbyAnswer === "Hiking" && creatureAnswer === "Dragon") {
      return "Aries";
    } else {
      return "Leo";
    }
  } else if (colorAnswer === "Green") {
    // Customize for other signs based on preferences
    return "Taurus";
  } else if (colorAnswer === "Blue") {
    // Customize for other signs based on preferences
    return "Aquarius";
  } else if (colorAnswer === "Yellow") {
    // Customize for other signs based on preferences
    return "Pisces";
  }

  // Default to a placeholder sign if no match is found
  return "Unknown Sign";
}

startQuiz();

function showResult() {
  const resultElement = document.getElementById("result");
  const responseList = document.getElementById("response-list");
  const quizContent = document.getElementById("quiz-content");
  const userResponses = document.getElementById("user-responses");

  // Create an image element for the funny GIF
  const gifElement = document.createElement("img");
  gifElement.id = "funny-gif";
  gifElement.alt = "Funny GIF";

  resultElement.textContent = `Your zodiac sign is ${calculateZodiacSign()}!`;

  // Display a funny GIF based on the result
    switch (sign) {
        case "Aries":
            gifElement.src = "aries.gif";
            break;
        case "Taurus":
            gifElement.src = "taurus.gif";
            break;
        case "Gemini":
            gifElement.src = "gemini.gif";
            break;
        case "Cancer":
            gifElement.src = "cancer.gif";
            break;
        case "Leo":
            gifElement.src = "leo.gif";
            break;
        case "Virgo":
            gifElement.src = "virgo.gif";
            break;
        case "Libra":
            gifElement.src = "libra.gif";
            break;
        case "Scorpio":
            gifElement.src = "scorpio.gif";
            break;
        case "Sagittarius":
            gifElement.src = "sagittarius.gif";
            break;
        case "Capricorn":
            gifElement.src = "capricorn.gif";
            break;
        case "Aquarius":
            gifElement.src = "aquarius.gif";
            break;
        case "Pisces":
            gifElement.src = "pisces.gif";
            break;
        default:
            gifElement.src = "unknown.gif";
            break;
    }

  // Append the GIF element to the result area
  resultElement.appendChild(gifElement);

  // Hide quiz content and show user responses
  quizContent.style.display = "none";
  userResponses.style.display = "block";

  // Display user responses
  answers.forEach((response) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${response.question}: ${response.answer}`;
    responseList.appendChild(listItem);
  });
}
