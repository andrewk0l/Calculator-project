const numberButtons = document.querySelectorAll(['number'])
const operatorButtons = document.querySelectorAll(['operator'])
const equalsButton = document.getElementById('equalsBtn')
const pointButton = document.getElementById('pointBtn')
 const clearButton = document.getElementById('clearBtn')
 const deleteButton = document.getElementById('deleteBtn')
 const defaultOperationScreen = document.getElementById('defaultOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')

window.addEventListener('keydown', keyboardInput)
 

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    
}

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0')
    currentOperationScreen.textContent += number
  }
  

numberButtons.forEach((button) =>
button.addEventListener('click', () => appendNumber(button.textContent))
)