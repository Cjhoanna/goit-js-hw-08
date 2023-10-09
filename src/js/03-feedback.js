var throttle = require('lodash');
const input = document.getElementById("email");
const textArea = document.getElementById("message");
document.querySelector('form').addEventListener('submit', validateForm)

input.addEventListener("input", updateValue);
textArea.addEventListener("input", updateValue);

function updateValue() {
    throt_fun({
        email: input.value,
        message: textArea.value
    });
}

var throt_fun = throttle.throttle(function (feedback) {
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
  console.log('Save feedback after 1 seconds');
}, 500);

let localFeedBack = localStorage.getItem("feedback-form-state")
if (localFeedBack === null) {
localStorage.setItem("feedback-form-state", JSON.stringify({
    email: "",
    message: ""
}))
} else {
    let data = JSON.parse(localFeedBack);
    input.value = data.email;
    textArea.value = data.message
}

function validateForm() {
    let data = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(data === null ? '' : data)
    localStorage.clear();
    input.value = '';
    textArea.value = '';
}
