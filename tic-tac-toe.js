document.addEventListener("DOMContentLoaded", function() {
    // Get all the div elements inside the game board
    const squares = document.querySelectorAll("#board div");

    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add("square");
    });
});
