document.addEventListener("DOMContentLoaded", function() {
    // Get all the div elements inside the game board
    const squares = document.querySelectorAll("#board div");
    
    // Variable to track current turn (X or O)
    let currentPlayer = "X";
    
    // Array to store the state of the game
    const gameState = Array(9).fill(null); // Initialize a 9-element array with null values

    // Get the status div to update the message later
    let status = document.getElementById("status");

    // Define winning combinations (rows, columns, diagonals)
    const winningCombos = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    // Function to check for a winner
    function checkWinner() {
        // Loop through all winning combinations
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            // If the same player occupies all squares in the combination, declare a winner
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Return the winner (X or O)
            }
        }
        return null; // No winner yet
    }

    // Loop through each square
    squares.forEach(function(square, index) {
        // Add 'square' class to each div for styling
        square.classList.add("square");
        
        // Add click event listener for alternating between X and O
        square.addEventListener("click", function() {
            // Only proceed if the square is empty and there's no winner yet
            if (!gameState[index] && !status.classList.contains("you-won")) {
                // Update the square with X or O and store the state
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer); // Add the class "X" or "O" for styling
                gameState[index] = currentPlayer;

                // Check if there's a winner
                let winner = checkWinner();
                if (winner) {
                    // Update status message and add "you-won" class
                    status.textContent = `Congratulations! ${winner} is the Winner!`;
                    status.classList.add("you-won");
                } else {
                    // Toggle between X and O for the next turn
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Add mouseover event to apply hover effect
        square.addEventListener("mouseenter", function() {
            if (!gameState[index] && !status.classList.contains("you-won")) {
                square.classList.add("hover");
            }
        });

        // Add mouseleave event to remove hover effect
        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });
    });
});
