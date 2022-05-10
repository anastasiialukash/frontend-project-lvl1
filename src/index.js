import {
  congratulateWinner, getAnswer, greeting, showCorrectAnswerMessage, showIncorrectAnswerMessage,
} from './cli.js';

export const startGame = ({ rules, getQuestionAndCorrectAnswer }) => {
  let i = 0;
  const name = greeting(rules);

  while (i < 3) {
    const { question, correctAnswer } = getQuestionAndCorrectAnswer();
    const playerAnswer = getAnswer(question);

    if (playerAnswer === correctAnswer) {
      showCorrectAnswerMessage();
    } else {
      showIncorrectAnswerMessage(name, playerAnswer, correctAnswer);
      break;
    }
    i += 1;
  }

  if (i === 3) {
    congratulateWinner(name);
  }
};

export default startGame;
