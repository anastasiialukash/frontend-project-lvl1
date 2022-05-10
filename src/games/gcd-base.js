import { getRandomInt } from '../utils.js';
import { startGame } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers?';

const getCorrectAnswer = (number1, number2) => {
  let maxCommonDivisor = 0;

  for (let i = 1; i < number1 / 2; i += 1) {
    let divisor = i;
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      divisor = i;
      if (divisor > maxCommonDivisor) {
        maxCommonDivisor = divisor;
      }
    }
  }

  return maxCommonDivisor;
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const question = `${number1} ${number2}`;
  const correctAnswer = getCorrectAnswer(number1, number2).toString();
  return { question, correctAnswer };
};

export default () => startGame({ rules, getQuestionAndCorrectAnswer });
