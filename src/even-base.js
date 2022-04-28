import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const validateAnswer = (question, answer) => {
  const isEven = (question % 2 === 0);
  let result = '';
  const correctAnswer = isEven ? 'yes' : 'no';

  if ((isEven && (answer === 'yes')) || (!isEven && (answer === 'no'))) {
    result += 'Correct!';
  } else {
    result += `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`;
  }

  return result;
};

export const getQuestionAndAnswer = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${question} `);
  console.log(`Your answer: ${answer}`);
  return { question, answer };
};

export const startGame = () => {
  const name = greeting;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let i = 0;

  while (i < 3) {
    const questionAndAnswer = getQuestionAndAnswer();
    const validationResult = validateAnswer(questionAndAnswer.question, questionAndAnswer.answer);
    console.log(validationResult);
    if (validationResult !== 'Correct!') {
      console.log(`Let's try again, ${name}`);
      break;
    }
    i += 1;
  }

  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
