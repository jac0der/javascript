/*  
    A variable is simply a container in MEMORY for storing data.

    In JavaScript, we use the var or let keywords to declare variables. 
    For example,
*/
var model;
let year;

/*
    var is used in older versions of JavaScript

        Variables created with var are function-scoped, meaning they 
        can be accessed anywhere within the function they were 
        defined in.

        e.g.  var x;


    let is the new way of declaring variables, starting with ES6 (ES2015).

    Variables declared with let are block-scoped, meaning they can only 
    be accessed within the block where they were declared.

    e.g.  let y;
*/


/*
    Inititalize a variable
    
    use the assignment operator = to assign a value to a variable.
*/
// declare variable
let vehicle_make;

// assign 'Toyota' to vehicle_make
vehicleMake = 'Toyota';
console.log(vehicleMake);


// initialize variable during declaration
let make = 'Corolla Cross';



// declare multiple variables in a single statement
let num1 = 5, num2 = '6', num3 = 7;
console.log(num2);

// declare and assign multiple variables to the same value in one line.
let x = y = z = 10;
console.log(z);


// If I use a variable without initializing, it will have an undefined value.
let num;
console.log(num);
// output: undefined


/*
    The value of a variable may vary. Hence, the name variable.
    Here, the value of the score variable is changed from 5 to 3 when we assign a new value to it.
*/
// assign 5 to variable score
let score = 5; 
console.log(score); // 5

// change the value of score to 3
score = 3; 
console.log(score); // 3




/*
    CONSTANTS
    A constant is a type of variable whose value cannot be changed (immutable).
    In JavaScript, we use the const keyword to create constants. 
*/
const age = 100;

// Once a constant is initialized, we cannot change its value.
 age = 120;
console.log(age); // Error! constant cannot be changed


// constant declarations must be initialized or I get an Error.
//const g; // 'const' declarations must be initialized.ts(1155) or // Error! Missing initializer in const declaration


/*
    Note: If you are sure that the value of a variable won't change throughout the program, 
    we recommend you use const.
*/





