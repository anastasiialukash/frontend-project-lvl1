import readlineSync from 'readline-sync';

const greeting = () => readlineSync.question('May I ask your name? ');

export default greeting();
