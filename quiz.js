// JavaScript source code
var quizform = document.querySelector(".quiz-form");
var submitButton = document.querySelector("#check-button");
var outputMessage = document.querySelector("#error-message");

var correctAnswers = ["3", "obtuse", "acute", "equilateral", "perimeter", "hypotenuse", "5", "180", "60", "5"];

submitButton.addEventListener("click", function result() {
    var formResults = new FormData(quizform);
    var score = 0,
        index = 0;
    for (var value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    // console.log("The score is "+score);
    outputMessage.innerText = "The score is " + score;
});
