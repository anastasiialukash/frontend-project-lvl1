import { getRandomInt } from '../utils.js';
import { startGame } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
export const getCorrectAnswerForEvenGame = (question) => {
  const isEven = (question % 2 === 0);
  return isEven ? 'yes' : 'no';
};

export const getQuestionAndCorrectAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = getCorrectAnswerForEvenGame(question);
  return { question, correctAnswer };
};

export default () => startGame({ rules, getQuestionAndCorrectAnswer });
