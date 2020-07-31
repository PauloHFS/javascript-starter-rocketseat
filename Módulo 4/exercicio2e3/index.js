var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");
var listRepoElement = document.querySelector("#app ul");

repos = [];

btnElement.onclick = function () {
    var githubUser = inputElement.value;
    inputElement.value = "";

    axios.get('https://api.github.com/users/' + githubUser + '/repos')
        .then(function (response) {

            for (repo of response.data) {
                repos.push(repo.name);
            }

            renderRepos();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderRepos() {
    for (repo of repos) {
        var liElement = document.createElement("li");
        var liTextElement = document.createTextNode(repo);

        liElement.appendChild(liTextElement);
        listRepoElement.appendChild(liElement);
    }
}