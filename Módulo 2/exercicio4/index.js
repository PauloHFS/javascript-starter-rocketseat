var inputElement = document.querySelector("input");
var btnElement = document.querySelector("button");
var ulElement = document.querySelector("ul");

function adicionar() {
    var nome = inputElement.value;
    inputElement.value = "";

    var liElement = document.createElement("li");
    var liTextElement = document.createTextNode(nome);
    liElement.appendChild(liTextElement);
    ulElement.appendChild(liElement);
}