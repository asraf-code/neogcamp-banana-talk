var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-box");


function clickHandler() {
    outputDiv.innerText = "ajlajnfolj " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)



