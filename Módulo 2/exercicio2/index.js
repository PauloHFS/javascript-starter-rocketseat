var appElement = document.querySelector("#app");
var btnElement = document.querySelector("button");

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var newColor = getRandomColor();

function criarBox() {
    var box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = "#f00";

    box.onmouseover = function () {
        box.style.backgroundColor = getRandomColor();
    }

    appElement.appendChild(box);
}

btnElement.onclick = criarBox;
