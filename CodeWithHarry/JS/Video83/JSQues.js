function ans1(){
    
    let name = prompt("Enter your name");
    
    const arrlen = name.length;

    if(arrlen < 6){
        console.log(`${name} You are chosen to be in Gryffindor`);
    }else if( arrlen < 8){
        console.log(`${name} You are chosen to be in Hufflepuff`);
    }else if( arrlen < 12){
        console.log(`${name} You are chosen to be in Ravenclaw`);
    }else if(12 <= arrlen){
        console.log(`${name} You are chosen to be in Slytherin`);
    }

    console.log(arrlen);
}

function ans2(){

}


// ans1();