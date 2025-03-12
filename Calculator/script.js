let currentInput = "";

// Append numbers and operators to the input
function append(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

// Calculate the expression
function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // Using eval to calculate the result
    document.getElementById("display").value = currentInput;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

// Capture keyboard input
window.addEventListener("keydown", function (event) {
  const key = event.key;

  // If a number or operator is pressed, append it to the input
  if ("0123456789".includes(key) || "+-*/".includes(key)) {
    append(key);
  }

  // Handle the 'Enter' key to calculate the result
  if (key === "Enter") {
    calculate();
  }

  // Handle the 'Backspace' key to clear the last character
  if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1); // Remove last character
    document.getElementById("display").value = currentInput;
  }

  // Handle the 'Escape' key to clear the display
  if (key === "Escape") {
    clearDisplay();
  }
});
