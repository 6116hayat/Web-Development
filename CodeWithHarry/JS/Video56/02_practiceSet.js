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

// 3 answer : number divisible by 2 or 3
console.log("Program if number is DIVISIBLE by 2 or 3");
let num1 = 456;

if(num1 %2 == 0){
    console.log("The Number is divisible by 2");
}else if(num1 % 3 == 0){
    console.log("The Number is divisible by 3");
}else{
    console.log("Number out of Bound");
}


