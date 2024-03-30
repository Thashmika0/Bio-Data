function editBioData() {
    var newName = prompt("Enter new name:");
    var newProfession = prompt("Enter new profession:");
    var newLocation = prompt("Enter new location:");
    var newExperience = prompt("Enter new experience:");

    document.getElementById("name").innerText = newName;
    document.getElementById("profession").innerText = newProfession;
    document.getElementById("location").innerText = newLocation;
    document.getElementById("experience").innerText = newExperience;
}
