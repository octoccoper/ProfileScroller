// Initialize EasyHTTP object
const http = new EasyHTTP;
const ui = new UI();


document.getElementById("next").addEventListener("click", () => {

    // Get randow users
    http.get('https://randomuser.me/api/')
        .then(data => {
            console.log(data);
            ui.pictureProfile(data);
        })
        .catch(err => console.log(err));
})