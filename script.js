const userInput = document.getElementById('user-input')
const resultScreen = document.getElementById('result-screen')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        const currentDisplay = userInput.textContent;
// If the current display is '0', replace it with the button value
        if (currentDisplay === '0') {
            userInput.textContent = buttonValue;
        } else {
            userInput.textContent += buttonValue;
        }
    });
});

// Define a function to clear the calculator's input and result screens
function clearCalculator() {
    userInput.textContent = '0';
    resultScreen.textContent = '0';
    // Handle additional clearing or resetting if needed
}

// Attach the function to the clear button click event
const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', clearCalculator);

// Define a function to perform the calculation and update the result screen
function performCalculation() {
    const expression = userInput.textContent;
    try {
        const result = math.evaluate(expression);
        resultScreen.textContent = result;
    } catch (error) {
        resultScreen.textContent = 'Math Error'; // Display "Math Error" in result screen
    }
}

// Attach the function to the equals button click event
const equalsButton = document.getElementById('equalsBtn');
equalsButton.addEventListener('click', performCalculation);

// Define a function to delete the last inputed character
function deleteLastInput() {
    const currentInput = userInput.textContent;
    userInput.textContent = currentInput.substring(0, currentInput.length - 1);
    // Handle additional deletion logic if needed
}

// Attach the function to the delete button click event
const deleteButton = document.getElementById('deleteBtn');
deleteButton.addEventListener('click', deleteLastInput);

