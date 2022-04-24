import readlineSync from 'readline-sync';

export const greeting = () => {
    const name = readlineSync.question('May I ask your name? ');
    console.log(`Hello, ${name}!`);
};