async function getSeat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ah! There is an empty seat!!');
        }, 5000);
    })
}


async function getorder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Here is your Drink(Orange Juice)');
        }, 5000);
    })
}


async function finisedDrink() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Drink was Delicious');
        }, 5000);
    })
}

async function main() {
    
    console.log("Entering the Cafe");
    
    console.log("Choosing the Seat");
    let seat = await getSeat();
    console.log(seat);
    
    console.log("Waiter Arriving");
    
    console.log("Choosing the Drink");
    let order = await getorder();
    console.log(order);
    
    console.log("Drink Arrived");

    console.log("Sipped Drink");
    let finish = await finisedDrink();
    console.log(finish);

    console.log("Paid the Bill");
}

main()