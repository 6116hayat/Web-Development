let promise = new Promise(function(resolve, reject){
    
    let isSuccesful = Math.random() >= 0.5; //50% chance of success

    if(isSuccesful){
        resolve('Book has been delivered!');
    } else{
        reject('Sorry, your order was canceled');
    }
});

promise.then(function(message){
    console.log(message) // if promise is resolved
}).catch(function(error){
    console.log(error); // if promise is rejected
});

// Ordering and Delivered 2 promises
function firstTask() {
    return new Promise(function(resolve, reject){
        let isSuccesful = Math.random() >= 0.5;
        setTimeout(() => {
            if(isSuccesful){
                resolve('Order placed successfully');
            }else{
                reject('Order failed');
            }
        }, 1000); // simulate with 1 second delay
    });
}

// deliver promise
function secondTask(message) {
    return new Promise(function(resolve, reject){
        let isDelivered = Math.random() >= 0.5;
        setTimeout(() => {
            if(isDelivered){
                resolve(message + ' Package delivered!');
            }else{
                reject('package delivery failed');
            }
        }, 1000); // simulate with 1 second delay
    });
}

// Calling the firstTask and chaining secondTask
firstTask().then(function(result){
    return secondTask(result);
}).then(function(finalResult){
    console.log(finalResult);
}).catch(function(error){
    console.log(error);
})