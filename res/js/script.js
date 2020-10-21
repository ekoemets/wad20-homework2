const url = 'https://private-anon-97368599da-wad20postit.apiary-mock.com/users/1';
$(document).ready(function() {
    $.getJSON(url, function(data) {
        let user = `${data.firstname} ${data.lastname}`
        let mail = data.email;
        let picture = data.avatar;
        $("#profile-name").text(user);
        $("#profile-email").text(mail);
        $("#picture").attr("src", picture);
    });
});


function imageClicked() {
    $("#dropdown-area").toggleClass("show");
}
