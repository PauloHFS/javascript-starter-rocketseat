function temHabilidade(skills) {
    if (skills.indexOf("Javascript") === -1) {
        return false;
    } else {
        return true;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)) 