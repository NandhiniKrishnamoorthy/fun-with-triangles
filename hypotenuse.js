var sideA = document.querySelector("#side1");
var sideB = document.querySelector("#side2");
var calculateButton = document.querySelector("#check-button");
var outputMessage = document.querySelector("#error-message");

calculateButton.addEventListener("click", function calculateHypotenuse() {
    var sideA_value = sideA.value;
    var sideB_value = sideB.value;
    if (sideA_value && sideB_value) {
        if (sideA_value > 0 && sideB_value > 0) {
            var hypotenuse = (sideA_value ** 2 + sideB_value ** 2) * 0.5;
            outputMessage.innerText = "Hypotenuse value is " + hypotenuse.toFixed(2);
        }
        else {
            outputMessage.innerText = "Please enter positive value";
        }
    }
    else {
        outputMessage.innerText = "Please enter all values";
    }
    
});