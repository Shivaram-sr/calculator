// Function to append values to the display
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  // Function to calculate the result
  function calculate() {
    const resultField = document.getElementById("result");
    try {
      resultField.value = eval(resultField.value); // Evaluate the input
    } catch (error) {
      resultField.value = "Error"; // Display error for invalid input
    }
  }
  