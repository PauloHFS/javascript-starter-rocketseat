var ulElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    ulElement.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        var linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");
        var pos = todos.indexOf(todo);
        var linkText = document.createTextNode("Excluir");
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);

        ulElement.appendChild(todoElement);
    }
}

renderTodos();

btnElement.onclick = function () {
    var todoText = inputElement.value;
    inputElement.value = "";

    todos.push(todoText);
    
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem("list_todos", JSON.stringify(todos));
}