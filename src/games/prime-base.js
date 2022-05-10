import { getRandomInt } from '../utils.js';
import { startGame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getCorrectAnswer = (number) => {
  let numberOfDivisors = 0;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      numberOfDivisors += 1;
    }
  }

  if (number !== 1 && numberOfDivisors === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = getCorrectAnswer(question);

  return { question, correctAnswer };
};

export default () => startGame({ rules, getQuestionAndCorrectAnswer });
