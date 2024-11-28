/*
    Data types represent the different kinds of values we can use in JavaScript.
    There are altogether 8 basic data types in JavaScript.

    1. String	Textual data.	'hello', "hello world!",
    2. Number	An integer or a floating-point number.	3, 3.234, 3e-2, etc.
    3. BigInt	An integer with arbitrary precision.	900719925124740999n, 1n, etc.
    4. Boolean	Any of two values: true or false.	true and false
    5. undefined	A data type whose variable is not initialized.	let a;
    6. null	Denotes a null value.	let a = null;
    7. Symbol	A data type whose instances are unique and immutable.	let value = Symbol('hello');
    8. Object	Key-value pairs of collection of data.	let student = {name: "John"};


    Note: JavaScript data types are divided into primitive and non-primitive types.

    Primitive Data Types: They can hold a single simple value. String, Number, BigInt, 
    Boolean, undefined, null, and Symbol are primitive data types.

    Non-Primitive Data Types: They can hold multiple values. Objects are n
    on-primitive data types.
*/

// 1***=> Strings -> represents textual data which contains a sequence of characters.
// strings are surrounded by single or double quotes or Backticks `Hello`

// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes (recomended)
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);


// 2***=> Numbers -> the number type represents numeric values (both integers 
// and floating-point numbers).

// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);



// 3***=> BigInt
// BigInt is a type of number that can represent very large or very small 
// integers beyond the range of the regular number data type.

// A BigInt number is created by appending n to the end of an integer
// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;

// In JavaScript, you can't mix BigInt and number values 
// (for instance, by performing arithmetic operations between them).
// BigInt value
let value = 900719925124740998n;

// Error! BitInt and number cannot be added
// -> let sum = value + 1; 
// -> console.log(sum);
// -> TypeError: Cannot mix BigInt and other types, use explicit conversions



/*
    4***=> Boolean
    A Boolean data can only have one of two values: true or false
*/
let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false



/*
    5***=> undefined
    In JavaScript, undefined represents the absence of a value.
    If a variable is declared but the value is not assigned, then the value of 
    that variable will be undefined
*/
let age;
console.log(age);  // undefined

// It is also possible to explicitly assign undefined as a variable value.
let vehicle = undefined;
console.log(vehicle);  // undefined

// Note: You should avoid explicitly assigning undefined to a variable. 
// Usually, we assign null to variables to indicate "unknown" or "empty" values.



/*
    6***=> null
    In JavaScript, null represents "no value" or "nothing."

    the number variable is set to have no value.
*/
let number = null;
console.log(number);  // null


/*
    7***=> Symbol
    A Symbol is a unique and primitive value. This data type was introduced in ES6.

    When you create a Symbol, JavaScript guarantees that it is distinct from all 
    other symbols, even if they have the same descriptions.

    Here, we have used === to compare value1 and value2. It returns true if the 
    two values are exactly the same. Otherwise, it returns false.

    Though both value1 and value2 contain "programiz", JavaScript treats them as 
    different since they are of the Symbol type. Hence, value1 === value2 returns false.
*/
// two symbols with the same description
let value3 = Symbol("programiz");
let value4 = Symbol("programiz");

console.log(value3 === value4);  // false




/*
    8***=> Object
    An Object holds data in the form of key-value pairs. 
*/
let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
// accessing properties of an object
console.log(student.class + ' ' + student.firstName);