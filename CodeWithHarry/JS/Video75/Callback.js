function greeting(name){
    console.log('Hello, '+ name);
}

function UserInput(callback){
    const name = prompt('Please enter your name');
    callback(name);
}

UserInput(greeting);

/*
Imagine you're planning a surprise party for a friend. You ask a buddy to help you out. You say, "Hey, after I greet everyone at the door, can you please play some music?"

In this scenario:

You greeting the guests is the main function.

Your buddy playing the music is the callback function.

So, in JavaScript:

The main function does its job and then calls the callback function to do something else afterward.
*/ 

// Another example of Callback Function
function greet(name, callback){
    console.log('Hello '+ name);
    callback(); // callback function called
}

function playMusic(){
    console.log('Playing Music');
}

// Calling the greet function with playMusic as callback
greet('Hayat', playMusic);