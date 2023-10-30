const question = [
  {
    'que': "which of the following is a markup language?",
    'a': "html",
    'b': "css",
    'c': "javascript",
    'd': "php",
   ' correct': "a",
  },
  {
    'que': "what year was javascript lanched?",
    'a': "1996",
   'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b",
  },
  {
    'que': "what does css stands for?",
    'a': "hypertext markup language",
    'b': "cascading style sheet",
   'c': "jason object notation",
    'd': "helicopters terminals motoboats lamborginis",
    'correct': "b",
  },
];

let index = 0;
let total = question.length;
let right = 0,
  wrong = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll('.options');
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];

  queBox.innerText = `${index + 1}) ${data.que}`;
optionInput[0].nextElementSibling.innerText = data.a;
optionInput[1].nextElementSibling.innerText = data.b;
optionInput[2].nextElementSibling.innerText = data.c;
optionInput[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
  const data = question[index];
  const ans = getAnswer()
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.Value;
    }
  });
  return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
        <h3> thankyou for playing quiz </h3>
        <h2> ${right}/ ${total} </h2>
        `;
};

loadQuestion();
