// Create a business name generator by combining list of adjectives and shop name and Another word

/*
    Adjectives:
    Crazy
    Amazing
    Fire

    Shop Name;
    Engine
    Food
    Garments

    Another Word
    Bros
    Limited
    Hub

*/


alert("Welcome to the BUSINESS NAME GENERATOR");


let prefix = "" ;
let middleName = "" ;
let lastWord = "" ;


function adjName(){
    let num1 = Math.floor(Math.random() * 3) + 1;

    if(num1 === 1){
        prefix = "Crazy-"; 
        alert(`Your Adjective Will be ${prefix}` );
    }else if(num1 === 2){
        prefix = "Amazing-"; 
        alert(`Your Adjective Will be ${prefix}` );
    }else if(num1 === 3){
        prefix = "Fire-"; 
        alert(`Your Adjective Will be ${prefix}` );
    }
    return prefix;
}

function shopName(){
    const occupName = prompt("What is your shop product 1 => Engine || 2 => Food || 3 => Garments");

    if(occupName === '1'){
        middleName = "Engine-";
        alert(`Your Product is ${middleName}` );
    }else if(occupName === '2'){
        middleName = "Food-";
        alert(`Your Product is ${middleName}` );
    }else if(occupName === '3'){
        middleName = "Garments-";
        alert(`Your Product is ${middleName}` );
    }
    return middleName;
}

function anotherWord(){
    let num1 = Math.floor(Math.random() * 3) + 1;

    if(num1 === 1){
        lastWord = "Bros"; 
        alert(`Your lastWord Will be ${lastWord}` );
    }else if(num1 === 2){
        lastWord = "Limited"; 
        alert(`Your lastWord Will be ${lastWord}` );
    }else if(num1 === 3){
        lastWord = "Hub"; 
        alert(`Your lastWord Will be ${lastWord}` );
    }
    return lastWord;
}

prefix = adjName();
middleName = shopName();
lastWord = anotherWord();

const businessName = prefix + middleName + lastWord;
alert(`Your Business Name is : ${businessName}`);
