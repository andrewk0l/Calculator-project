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

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', () => {
    userInput.textContent = '0';
    resultScreen.textContent = '0';
    // Clear any stored data and reset variables
});

const equalsButton = document.getElementById('equalsBtn');
equalsButton.addEventListener('click', () => {
    const expression = userInput.textContent;
    console.log(expression)
    const result = math.evaluate(expression); // Note: using eval() for simplicity, consider safer alternatives
    resultScreen.textContent = result;
    // Handle storing or updating data related to the result
});
