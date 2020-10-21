var url = 'https://private-anon-97368599da-wad20postit.apiary-mock.com/users/1';
$.getJSON(url, function(data) {
    var firstname = data.firstname;
    var lastname = data.lastname;
    var user = firstname.concat(" " + lastname);
    var mail = data.email;
    var picture = data.avatar;
    document.getElementById("name").innerHTML = user;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("picture").src = picture;

    //console.log(data);
});


function imageClicked() {
    document.getElementById("dropDownArea").classList.toggle("show");
}
