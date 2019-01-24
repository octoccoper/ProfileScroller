class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    pictureProfile(data) {

        console.log(data.results[0]);

        this.profile.innerHTML = `
    <div id="imageDisplay">
    <img src="${data.results[0].picture.large}">
    </div>
    <span>Gender:</span>
    <span id="gender">${data.results[0].gender}</span>
    <br>
    <span>Age:</span>
    <span id="age">${data.results[0].dob.age}</span>
    <br>
    <span>Name:</span>
    <span id="firstname">${data.results[0].name.first}</span>
    <span id="lastname">${data.results[0].name.last}</span>
    <br>
    <br>
    <div id="profileDisplay">
    <span>Ceil phone:</span>
    <span id="cell">${data.results[0].cell}</span>
    <br>
  
    <span>Location:</span>
    <span id="location">${data.results[0].location.city}</span>
    </div>
    <br>`;
    }
}