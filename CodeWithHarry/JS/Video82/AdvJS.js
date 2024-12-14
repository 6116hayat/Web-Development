// 1. IIFE: It is a function that runs as soon as it is defined.
//          It is used to avoid polluting the global namespace, execute an async await, etc


(function() {
    console.log('This is an IIFE!');
})();

// Explanation:
// → The function is wrapped in () to define it
// → The () at the end immediately invokes the function

// 2. De-structuring: Assingment is used to unpack values from an array, or properties from objects, into distinct variables

// Array Destructuring:
const nums = [1, 2, 3];
const [a, b, c] = nums; // De-structure array elements
console.log(a, b, c); 

// Object Destructuring
const person = {name: 'Hayat', age: 21};
const {name, age} = person; // De-structure object person
console.log(name, age);

// 3. Spread syntax: Spread syntax(...)allows an iterable(like an array or object) to be expanded into individual elements

// spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// spread with objects
const obj1 = {name: 'Hayat', age:21};
const obj2 = {...obj1, city: 'Delhi'};
console.log(obj2);

// 4. Local and Global Block Scopes
// → GLOBAL 
// → LOCAL


// 5. Hoisting: it is a JS behaiviour where variable and function declarations are moved to the top of their scope during execution. 
// Only declarations are hoiseted, not intializations

// Example with var
console.log(x);
var x = 5;
console.log(x);

