var ulElement = document.querySelector("ul");

var nomes = ["Diego", "Gabriel", "Lucas"];

for (nome of nomes) {
    var liElement = document.createElement("li");
    var textElement = document.createTextNode(nome);
    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);
}