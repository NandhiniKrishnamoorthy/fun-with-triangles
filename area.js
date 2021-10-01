// JavaScript source code
var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");
var calculateButton = document.querySelector("#check-button");
var outputMessage = document.querySelector("#error-message");

calculateButton.addEventListener("click", function calculateArea() {
    var firstSideValue = Number(side1.value);
    var secondSideValue = Number(side2.value);
    var thirdSideValue = Number(side3.value);

    //the sum of two side lengths of a triangle is always greater than the third side. 
    //If this is true for all three combinations of added side lengths, then you will have a triangle

    if (firstSideValue && firstSideValue && firstSideValue) {

        if (firstSideValue > 0 && firstSideValue > 0 && firstSideValue > 0) {
            if (
                firstSideValue + secondSideValue > thirdSideValue &&
                secondSideValue + thirdSideValue > firstSideValue &&
                firstSideValue + thirdSideValue > secondSideValue
            ) {
                const semiPerimeter = (firstSideValue + secondSideValue + thirdSideValue) / 2;              //A = √[s(s-a)(s-b)(s-c)]

                const result = Math.sqrt(
                    semiPerimeter *
                    (semiPerimeter - firstSideValue) *
                    (semiPerimeter - secondSideValue) *
                    (semiPerimeter - thirdSideValue)
                ).toFixed(4);
                outputMessage.innerText = `Area of a triangle using heron's formula is ${result} units`;
            } else {
                outputMessage.innerText = "Enter valid side lengths such that each side lengths";
            }
        }
        else {
            outputMessage.innerText = "Please enter positive values";
        }
        
    }
    else {
        outputMessage.innerText = "Please enter all values";
    }
    
});