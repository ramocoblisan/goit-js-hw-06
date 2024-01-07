const inputBox = document.querySelector("#name-input");
const spanOutPut = document.querySelector("#name-output");
function enterText(event) {
    if (inputBox.value === "") {
        spanOutPut.textContent = "Anonymous";
    } else {
        spanOutPut.textContent = event.currentTarget.value;
    };
};

inputBox.addEventListener("input", enterText);