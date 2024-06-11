const number = 100;

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

console.log(collatz(number))