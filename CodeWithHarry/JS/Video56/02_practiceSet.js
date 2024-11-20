// 1 answer
console.log("Age = 16");
let age = 15;
if(age < 10 ){
    console.log("Invalid age");
}else if(10 < age < 20){
    console.log("Age is in parameter");
}else{
    console.log("age broke the parameter");
}

// 2 answer : Switch Case statement
let fruit = "Mango";
switch (fruit) {
    case "Mango":
        fruit = "Mango";
        break;
    case "Apple":
        fruit = "Apple";
        break;
    case "Kiwi":
        fruit = "Kiwi";
        break;
    case "Pineapple":
        fruit = "pineApple";
        break;
    default:
        fruit = "Unknown fruit";
        break;
}

console.log(`Fruit is ${fruit}.`);

// 3 answer :  number divisible by 2 and 3
console.log("Program id the num is divisible by 2 and 3");
let Num1 = 654;
if( Num1 % 2 == 0 && Num1 % 3 == 0){
    console.log("The Number is Divisible by 2 and 3");
}else{
    console.log("The Number is not Divisible by 2 and 3");
}

// 4 answer : number divisible by 2 or 3
console.log("Program if number is DIVISIBLE by 2 or 3");
let num1 = 456;

if(num1 %2 == 0){
    console.log("The Number is divisible by 2");
}else if(num1 % 3 == 0){
    console.log("The Number is divisible by 3");
}else{
    console.log("Number out of Bound");
}

// 5 answer: Can drive or not
let Age = 56;
console.log("The age is : ", Age);
if(Age < 0){
    console.log("Invalid Age");
}else if(0 < Age && Age < 18){
    console.log("Cannot Drive");
}else if(18 < Age && Age  < 80){
    console.log("You Can drive");
}else{
    console.log("The Age limit has reached");
}


