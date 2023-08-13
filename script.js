// Keep track of the current input
let currentInput = '';

// Function to append the clicked button value to the current input
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

// Function to perform the calculation
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}
