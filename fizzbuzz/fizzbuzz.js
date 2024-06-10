/**
    Implementation of the FIZZBUZZ program. Find details in the
    FIZZBUZZ_README.
    
    @datetime:: June 09, 2024 11:22 pm (UTC-5)
    @author:: jac0der
 */ 

// declaring global multiple constant values to check for.
const MULT3 = 3
const MULT5 = 5


/*
    Function to determine if a divisor is a multiple of dividend.
    Used the modulo (%) operator to determine if divisor is a multiple
    of dividend. Modulo operator returns the remainder from a division,
    if zero (0) is returned, then divisor is a multiple of dividend.
    @inputs::
            dividend - number being divided
            divisor - number being check to see if it is a multiple
                    of dividend.
    @output:: Boolean - True if divisor is a multiple of dividend,
            otherwise, False.
*/
function isMultiple(dividend, divisor)
{
    if (dividend % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


/*
    Function to loop through numbers from 1 to 100,
    printing 
        - FizzBuzz if a number is both a multiple of 3 and 5
        - Fizz if a number is a multiple of 3
        - Buzz if a number is a multiple of 5

    for loop is used to produce the numbers from 1 - 100.
    @input:: none
    @output:: none
*/
function fizzBuzz()
{
    for(let i = 1; i<= 100; i++)
    {
        // check if i is both a multiple of 3 AND 5
        if( (isMultiple(i, MULT3)) && (isMultiple(i,MULT5)) )
        {
            console.log("FizzBuzz");
        }
        // check if i is multiple of 3
        else if(isMultiple(i, MULT3))
        {
            console.log("Fizz");
        }
        // check if i is multiple of 5
        else if(isMultiple(i, MULT5))
        {
            console.log("Buzz");
        }
        else // no multiple found, print number
        {
            console.log(i);
        }
    }
}


// execute function
fizzBuzz();



