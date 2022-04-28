import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I ask your name? ');
};

export default greeting();
