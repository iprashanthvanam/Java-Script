// Get all the buttons with the class 'color-button'
const buttons = document.querySelectorAll('.color-button');

// Get the body element to change its background color
const body = document.body;

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the color value from the 'data-color' attribute of the clicked button
        const newColor = button.getAttribute('data-color');
        
        // Change the background color of the body to the new color
        body.style.backgroundColor = newColor;
    });
});