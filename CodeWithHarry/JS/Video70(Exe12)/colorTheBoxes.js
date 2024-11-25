alert("Exercise 12 : Color the Boxes ");

let boxes = document.getElementsByClassName('box');


if(boxes.length < 5){
    console.log("Not enough boxes!!!");
}else{
    let random_index = [];

    while(random_index.length < 5){
        let rand_num = Math.floor(Math.random() * 5);
        if(!random_index.includes(rand_num)){
            random_index.push(rand_num);
        }
    }
    
    // Background-color
    boxes[random_index[0]].style.backgroundColor = "green";
    boxes[random_index[1]].style.backgroundColor = "yellow";
    boxes[random_index[2]].style.backgroundColor = "pink";
    boxes[random_index[3]].style.backgroundColor = "orange";
    boxes[random_index[4]].style.backgroundColor = "blue";
}

