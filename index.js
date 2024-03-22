#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: 'Select your first number',
        type: 'number',
        name: 'number1' },
    { message: 'Select your second number',
        type: 'number',
        name: 'number2' },
    { message: 'Select your right operator',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiply', 'Divide'] },
]);
if (answer.operator === 'Addition') {
    console.log(answer.number1 + answer.number2);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.number1 - answer.number2);
}
else if (answer.operator === 'Multiply') {
    console.log(answer.number1 * answer.number2);
}
else if (answer.operator === 'Divide') {
    console.log(answer.number1 / answer.number2);
}
else {
    console.log('Select your right operator');
}
