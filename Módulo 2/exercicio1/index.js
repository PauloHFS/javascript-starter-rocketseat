var appElement = document.querySelector("#app");
var btnElement = document.querySelector("button");

function criarBox() {
    var box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "#f00";

    appElement.appendChild(box);
}

btnElement.onclick = criarBox;