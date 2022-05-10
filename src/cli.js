import readlineSync from 'readline-sync';

export const greeting = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  return name;
};

export const getAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question} `);
  console.log(`Your answer: ${answer}`);
  return answer;
};

export const showCorrectAnswerMessage = () => console.log('Correct!');

export const showIncorrectAnswerMessage = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export const congratulateWinner = (name) => {
  console.log(`Congratulations, ${name}!`);
};
