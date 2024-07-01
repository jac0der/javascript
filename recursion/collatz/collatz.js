/*
    Recursive program that calculates how many steps it takes 
    to get to 1 if you start from n and recurse as indicated in README_COLLATZ.
    @datetime:: June 30, 2024 10:43 pm (UTC-5)
    @author:: jac0der
*/
let number;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number: ', (answer) => {
    number = answer;
    console.log(collatz(number))

    rl.close();
});


/**
 * Function to calculate the number of steps taken
   to get to 1, given a number n, using the algorithm
   for the collatz sequence, as outlined in the 
   README_COLLATZ read me file.
 * @param {*} number -> value enetered by user
 * @returns -> number of steps taking to get to 1, from 
                a number n.
 */
function collatz(number)
{
    step_count = 1;

    if(number == 1)
    {
        step_count = 0;
    }
    else if(number % 2 == 0)
    {
        step_count += collatz(number/2);
    }
    else
    {
        step_count += collatz((3*number) + 1)
    }

    return step_count;
}