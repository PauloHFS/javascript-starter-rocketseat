var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");
var listRepoElement = document.querySelector("#app ul");

repos = [];

btnElement.onclick = function () {
    var githubUser = inputElement.value;
    inputElement.value = "";
    
    renderCarregamento();
    axios.get('https://api.github.com/users/' + githubUser + '/repos')
        .then(function (response) {

            for (repo of response.data) {
                repos.push(repo.name);
            }

            renderRepos();
        })
        .catch(function (error) {
            renderError(error.response.status, error.response.statusText);
        });
}

function renderRepos() {
    listRepoElement.innerHTML = "";

    for (repo of repos) {
        var liElement = document.createElement("li");
        var liTextElement = document.createTextNode(repo);

        liElement.appendChild(liTextElement);
        listRepoElement.appendChild(liElement);
    }
    repos = [];
}

function renderCarregamento() {
    listRepoElement.innerHTML = "";

    var liElement = document.createElement("li");
    var liTextElement = document.createTextNode("Carregando...");
    
    liElement.appendChild(liTextElement);
    listRepoElement.appendChild(liElement);
}

function renderError(status, statusText) {
    listRepoElement.innerHTML = "";

    var liElement = document.createElement("li");
    var liTextElement = document.createTextNode(status +': '+ statusText);

    liElement.appendChild(liTextElement);

    listRepoElement.appendChild(liElement);
}