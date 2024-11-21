// Faulty Calculator 

let rand_num = Math.random();
// console.log("The Random Number is :", rand_num);

function faulty_Calculator(){
    alert("Welcome to the Calculator ;)");

    let a = parseFloat(prompt("Enter the 1st Number"));
    let b = parseFloat(prompt("Enter the 2nd Number"));

    let c = prompt("Enter the Operation")

    let result;
    if(c == '+'){
        result = a - b;
    }else if(c == '*'){
        result = a + b;
    }else if(c == '-'){
        result = a / b;
    }else if(c == '/'){
        result = a ** b;
    }else{
        result = "Invalid Operation";
    }

    alert("The result = "+ result);

}

function normal_Calculator(){
    alert("Welcome to the Calculator :)");

    let a = parseFloat(prompt("Enter the 1st Number"));
    let b = parseFloat(prompt("Enter the 2nd Number"));

    let c = prompt("Enter the Operation")

    let result;
    if(c == '+'){
        result = a + b;
    }else if(c == '*'){
        result = a * b;
    }else if(c == '-'){
        result = a - b;
    }else if(c == '/'){
        result = a / b;
    }else{
        result = "Invalid Operation";
    }

    alert("The result = " + result);

}

if(rand_num < 0.1){
    faulty_Calculator();
}else{
    normal_Calculator();
}