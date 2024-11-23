alert("Welcome to the factorial program");

let num = prompt("Enter the Num for the factorial!!");

let factorial = 1;

for (let i = 1; i <= num; i++){
    factorial *= i;
}

alert(`Your factorial of ${num} is ${factorial}`);