// Fetch a random quote
// fetch("https://type.fit/api/quotes") // Make an HTTP GET request
//     .then(response => {
//         if(!response.ok){
//             throw new Error('Network response was not OK');
//         }
//         return response.json(); //convert response to JSON
//     })

//     // .then(response => response.json()) // Convert response to JSON
//     .then(function(data) {
//         // console.log('Quote:', data.content); // Log the quote
//         // console.log('Author:', data.author); // Log the author
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error); // Handle errors
//     });


// Fetch a Joke
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(function(data) {
        console.log(data)

        // Create a paragraph Element
        const p = document.createElement('p');

        p.innerHTML = data.value;

        // Append
        document.getElementById('joke').appendChild(p);
    })
    .catch(error => console.error('Error:', error));

// Random Dog Image
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not OK');
        }
        return response.json(); //convert response to JSON
    })
    .then(function(data){
        console.log(data.message);

        // Create a image Element 
        const img = document.createElement('img');

        // Set src for the fetched URL
        img.src = data.message;

        img.alt ="Random dog Image";

        // Append
        document.getElementById('Image').appendChild(img);
    })
    .catch(error => {
        console.error('error fetching data: ', error);
    })

    



