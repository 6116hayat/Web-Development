document.querySelector('.container').addEventListener('click', () => {
    alert('Container clicked!');
});


document.querySelector('.box').addEventListener('click', (event) => {
    alert('Box clicked!');
    event.stopPropagation(); //stop the event from bubbling up
});


document.querySelector('.inner-box').addEventListener('click', (event) => {
    alert('Inner-Box clicked!');
    event.stopPropagation(); //stop the event from bubbling up
});