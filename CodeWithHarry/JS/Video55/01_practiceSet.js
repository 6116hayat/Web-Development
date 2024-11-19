// 1 answer
let a  = "Hayat";
a = a +1;

console.log("The value of a", a);

// 2 answer : Typeof A will be string
console.log("TypeOf a :",typeof(a));

// 3 answer : No variable declared with const cannot be changed further
// but with object defined key can be changed.

// 4 answer :  we can add a new key to the const object
const b = {
    anInteger : 5,
    name : "Hayat",
    salary : "10lakhs"
}

b.anInteger = 6;
b.ishandsome = true;
b.name = "Umar";

console.log(b);

// 5 answer
let dict = {
    Hope: "A feeling of expectation and desire for a certain thing to happen.",

    Love : "An intense feeling of deep affection.",

    Joy : "A feeling of great pleasure and happiness.",

    Kind : "Having or showing a friendly, generous, and considerate nature.",

    Calm : "Not showing or feeling nervousness, anger, or other strong emotions"
}

console.log(dict);