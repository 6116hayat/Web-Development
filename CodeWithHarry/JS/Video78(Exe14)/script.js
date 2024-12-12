let textbox = document.getElementById('textbox');

// Creating the functions
async function main(){
    
    async function getfun1() {
        let randNum = Math.floor(Math.random() * 7) + 1; // Generate a random Number
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Creating a new element {textbox}
                let thing1 = document.createElement('h1');
                
                // Set the content
                thing1.textContent = "Intializing Hacking";
                
                // append
                textbox.appendChild(thing1);

                resolve();
                
            }, (randNum * 1000));
        });
    }


    async function getfun2() {
        let randNum = Math.floor(Math.random() * 7) + 1; // Generate a random Number
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Creating a new element {textbox}
                let thing2 = document.createElement('h1');
                
                // Set the content
                thing2.textContent = "Reading your Private Files";
                
                // append
                textbox.appendChild(thing2);

                resolve();
                
            }, (randNum * 1000));
        })
    }


    async function getfun3() {
        let randNum = Math.floor(Math.random() * 7) + 1; // Generate a random Number
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Creating a new element {textbox}
                let thing3 = document.createElement('h1');
                
                // Set the content
                thing3.textContent = "Password Files Detected";
                
                // append
                textbox.appendChild(thing3);

                resolve();
                
            }, (randNum * 1000));
        })
    }


    async function getfun4() {
        let randNum = Math.floor(Math.random() * 7) + 1; // Generate a random Number
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Creating a new element {textbox}
                let thing4 = document.createElement('h1');
                
                // Set the content
                thing4.textContent = "Sending Private Data to Server";
                
                // append
                textbox.appendChild(thing4);

                resolve();
                
            }, (randNum * 1000));
        })
    }


    async function getfun5() {
        let randNum = Math.floor(Math.random() * 7) + 1; // Generate a random Number
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Creating a new element {textbox}
                let thing5 = document.createElement('h1');
                
                // Set the content
                thing5.textContent = "Cleaning up";
                
                // append
                textbox.appendChild(thing5);

                resolve();
                
            }, (randNum * 1000));
        })
    }

    // Sequentially cal the functions
    await getfun1();
    await getfun2();
    await getfun3();
    await getfun4();
    await getfun5();
    
}

// Calling the main function
main();