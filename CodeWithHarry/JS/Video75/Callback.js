function greeting(name){
    console.log('Hello, '+ name);
}

function UserInput(callback){
    const name = prompt('Please enter your name');
    callback(name);
}

UserInput(greeting);