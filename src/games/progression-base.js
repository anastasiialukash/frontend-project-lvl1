import { startGame } from '../index.js';

const rules = 'What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  const initialValue = Math.floor(Math.random() * 10);
  let incrementedValue = initialValue;
  const step = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  const numberOfElements = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  const indexToRemove = Math.floor(Math.random() * (numberOfElements - 1 + 1) + 1);
  const progression = [];
  progression.push(initialValue);
  for (let i = 0; i < numberOfElements; i += 1) {
    incrementedValue += step;
    progression.push(incrementedValue);
  }

  const valueToRemove = progression[indexToRemove];
  const question = progression.join(' ').replace(valueToRemove, '...');
  const correctAnswer = valueToRemove.toString();

  return { question, correctAnswer };
};

export default () => startGame({ rules, getQuestionAndCorrectAnswer });
