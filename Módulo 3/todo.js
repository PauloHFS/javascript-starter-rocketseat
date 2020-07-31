var ulElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    ulElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        ulElement.appendChild(todoElement);
    }
}

renderTodos();

btnElement.onclick = function () {
    var todoText = inputElement.value;
    inputElement.value = "";

    todos.push(todoText);
    
    renderTodos();
}
