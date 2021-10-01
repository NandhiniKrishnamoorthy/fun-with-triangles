// JavaScript source code
var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangle = document.querySelector("#check-button");
var outputMessage = document.querySelector("#error-message");


isTriangle.addEventListener("click", function check() {
    var angle1Value = Number(angle1.value);
    var angle2Value = Number(angle2.value);
    var angle3Value = Number(angle3.value);

    if (angle1Value && angle2Value && angle3Value) {
        if (angle1Value > 0 && angle2Value > 0 && angle3Value > 0) {
            var sum = angle1Value + angle2Value + angle3Value;
            if (sum === 180) {
                showMessage("Success! these angles form a triangle!");
            }
            else {
                showMessage("Failed! these angles don't form a triangle!");
            }
        }
        else {
            showMessage("Please enter positive values");
        }
    }
    else {
        showMessage("Please enter all 3 angle values");
    }
});

function showMessage(msg) {
    outputMessage.innerText = msg;
}
