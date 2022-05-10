import { getRandomInt } from '../utils.js';
import { startGame } from '../index.js';

const rules = 'What is the result of the expression?';

const getCorrectAnswerForCalcGame = (numb1, numb2, operation) => {
  if (operation === '+') {
    return numb1 + numb2;
  }
  if (operation === '*') {
    return numb1 * numb2;
  }
  if (operation === '-') {
    return numb1 - numb2;
  }
  return 'Something went wrong - the correct value was not calculated';
};

const getQuestionAndCorrectAnswer = () => {
  const operations = ['*', '+', '-'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const numb1 = getRandomInt();
  const numb2 = getRandomInt();
  const question = `${numb1} ${randomOperation} ${numb2}`;
  const correctAnswer = getCorrectAnswerForCalcGame(numb1, numb2, randomOperation).toString();
  return { question, correctAnswer };
};

export default () => startGame({ rules, getQuestionAndCorrectAnswer });
