// Function to update time
function updateTime(){
    const now = new Date(); 
    document.getElementById('time').innerText = 'Current Time: '+ now.toLocaleTimeString();
}

// call update every second(1000 milliseconds)
setInterval(updateTime, 1000);


// call update every second(3000 milliseconds)
// setInterval(updateTime, 3000);


// call update every second(5000 milliseconds)
// setInterval(updateTime, 5000);

// function to change the message
function changeMessage(){
    document.getElementById('msg').innerText = 'Timeout';
}

// call msg after 3 sec (3000 milisecond)
setTimeout(changeMessage, 5000);

// function for the button
function btn(){
    document.getElementById('btn').addEventListener('click', () => {
        
        // create a heading
        const newHeading = document.createElement('h1');
        newHeading.textContent = 'This is new Heading';

        // create a paragraph
        const newParagraph = document.createElement('p');

        // set text to content
        newParagraph.textContent = ('This is a sample line');

        // append
        document.body.appendChild(newHeading);
        document.body.appendChild(newParagraph);
    })
}