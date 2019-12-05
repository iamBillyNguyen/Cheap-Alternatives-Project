$(document).ready(function () {
    $("#login").submit(function (e) {
        e.preventDefault();
        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (error) {
                var user = firebase.auth().currentUser;

                console.log(user);
                window.location = "../main.html";
            })
            .catch(function (error) {
                console.log(error);
            })

    });
});