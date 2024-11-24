console.log("Harry");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "green"
boxes[1].style.backgroundColor = "orange"

document.getElementById("purpleBox").style.backgroundColor = "purple";

document.querySelector(".box").style.backgroundColor = "pink";

// cannot insert CSS for the all selector 
// use forEach loop
// document.querySelectorAll(".box").forEach( e => {
//     e.style.backgroundColor = "yellow";
// })