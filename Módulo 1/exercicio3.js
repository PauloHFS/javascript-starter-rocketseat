function temHabilidade(skills) {
    if (skills.indexOf("javascript") !== -1) {
        return false;
    } else {
        return true;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false