document.addEventListener("DOMContentLoaded", function() {
    // Get all the div elements inside the game board
    const squares = document.querySelectorAll("#board div");
    
    // Variable to track current turn (X or O)
    let currentPlayer = "X";
    
    // Array to store the state of the game
    const gameState = Array(9).fill(null); // Initialize a 9-element array with null values

    // Loop through each square
    squares.forEach(function(square, index) {
        // Add 'square' class to each div for styling
        square.classList.add("square");
        
        // Add click event listener for alternating between X and O
        square.addEventListener("click", function() {
            // Only proceed if the square is empty
            if (!gameState[index]) {
                // Update the square with X or O and store the state
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer); // Add the class "X" or "O" for styling
                gameState[index] = currentPlayer;

                // Toggle between X and O for the next turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});


